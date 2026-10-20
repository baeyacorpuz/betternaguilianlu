import fs from 'fs'

const OVERPASS_API = 'https://overpass-api.de/api/interpreter'
const OUTPUT_FILE = 'scripts/data/naguilian-barangays.geojson'

async function fetchFromOverpass(query) {
  const response = await fetch(OVERPASS_API, {
    method: 'POST',
    body: query,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  if (!response.ok) {
    throw new Error(`Overpass API error: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

// Stitch together ways into a closed ring
function stitchWays(ways) {
  if (!ways || ways.length === 0) return []
  if (ways.length === 1) return ways[0]

  const rings = []
  const remaining = [...ways]

  while (remaining.length > 0) {
    let ring = [...remaining.shift()]
    let changed = true

    while (changed && remaining.length > 0) {
      changed = false

      for (let i = 0; i < remaining.length; i++) {
        const way = remaining[i]

        // Check if way connects to end of ring
        if (ring[ring.length - 1][0] === way[0][0] && ring[ring.length - 1][1] === way[0][1]) {
          ring = ring.concat(way.slice(1))
          remaining.splice(i, 1)
          changed = true
          break
        }

        // Check if way connects to ring in reverse
        if (ring[ring.length - 1][0] === way[way.length - 1][0] && ring[ring.length - 1][1] === way[way.length - 1][1]) {
          ring = ring.concat(way.slice(0, -1).reverse())
          remaining.splice(i, 1)
          changed = true
          break
        }

        // Check if way connects to start of ring
        if (ring[0][0] === way[way.length - 1][0] && ring[0][1] === way[way.length - 1][1]) {
          ring = way.slice(0, -1).concat(ring)
          remaining.splice(i, 1)
          changed = true
          break
        }

        // Check if way connects to ring start in reverse
        if (ring[0][0] === way[0][0] && ring[0][1] === way[0][1]) {
          ring = way.slice(1).reverse().concat(ring)
          remaining.splice(i, 1)
          changed = true
          break
        }
      }
    }

    // Close the ring if needed
    if (ring[0][0] !== ring[ring.length - 1][0] || ring[0][1] !== ring[ring.length - 1][1]) {
      ring.push(ring[0])
    }

    rings.push(ring)
  }

  return rings
}

async function main() {
  console.log('Fetching Naguilian municipality relation...')

  // Step 1: Find the Naguilian municipality relation (admin_level=6)
  const municipalityQuery = `[out:json];
[bbox:16.40,120.28,16.65,120.55];
relation["name"="Naguilian"]["admin_level"="6"];
out geom;
`

  const municipalityData = await fetchFromOverpass(municipalityQuery)

  if (!municipalityData.elements || municipalityData.elements.length === 0) {
    throw new Error('Could not find Naguilian municipality relation')
  }

  const municipality = municipalityData.elements.find((e) => e.type === 'relation')
  if (!municipality) {
    throw new Error('No municipality relation found')
  }

  console.log(`Found municipality relation (ID: ${municipality.id})`)

  // Step 2: Fetch barangays within the municipality
  console.log('Fetching barangay boundaries...')

  // Derive area ID from municipality relation ID (area id = 3600000000 + relation id)
  const areaId = 3600000000 + municipality.id

  const barangayQuery = `[out:json];
rel(area:${areaId})["boundary"="administrative"]["admin_level"="10"];
out geom;
`

  let barangayData = await fetchFromOverpass(barangayQuery)

  if (!barangayData.elements || barangayData.elements.length === 0) {
    console.warn('No barangays found, trying with expanded bbox...')

    const expandedQuery = `[out:json];
[bbox:16.30,120.15,16.75,120.65];
rel(area:${areaId})["boundary"="administrative"]["admin_level"="10"];
out geom;
`

    barangayData = await fetchFromOverpass(expandedQuery)
  }

  console.log(`Found ${barangayData.elements?.length || 0} potential barangay features`)

  // Step 3: Convert to GeoJSON
  const features = []

  for (const element of barangayData.elements || []) {
    if (element.type !== 'relation') continue

    const name = element.tags?.name
    if (!name) continue

    // Separate outer and inner ways
    const outerWays = []
    const innerWays = []

    for (const member of element.members || []) {
      if (member.type === 'way' && member.geometry) {
        const ring = member.geometry.map((node) => [node.lon, node.lat])
        if (ring.length > 0) {
          if (member.role === 'inner') {
            innerWays.push(ring)
          } else {
            outerWays.push(ring)
          }
        }
      }
    }

    if (outerWays.length === 0) continue

    // Stitch outer ways together
    const outerRings = stitchWays(outerWays)
    const innerRings = stitchWays(innerWays)

    // For now, create a simple polygon from the outer ring
    // In a more complex setup, we'd handle multipolygons and holes properly
    const coordinates = outerRings.length === 1 ? outerRings[0] : outerRings

    const feature = {
      type: 'Feature',
      properties: {
        name: name,
        id: element.id,
      },
      geometry: {
        type: outerRings.length === 1 ? 'Polygon' : 'MultiPolygon',
        coordinates: outerRings.length === 1 ? [coordinates] : outerRings.map(ring => [ring]),
      },
    }

    features.push(feature)
  }

  const geojson = {
    type: 'FeatureCollection',
    features: features,
  }

  // Write output
  fs.mkdirSync('scripts/data', { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(geojson, null, 2))

  console.log(`\nSuccessfully fetched ${features.length} barangay features`)
  console.log(`Saved to ${OUTPUT_FILE}`)
  console.log('\nBarangays found:')
  features.forEach((f) => console.log(`  - ${f.properties.name}`))
}

main().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
