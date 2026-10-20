import fs from 'fs'

// Configuration
const INPUT_FILE = 'scripts/data/naguilian-barangays.geojson'
const OUTPUT_FILE = 'src/data/barangay-map.geo.json'
const GEOJSON_SOURCE = 'Manually created simplified dataset'
const GEOJSON_SOURCE_URL = 'Generated for Naguilian, La Union barangay map'
const GEOJSON_LICENSE = 'Public domain / Educational use'

// Douglas-Peucker simplification tolerance (in degrees)
const SIMPLIFY_TOLERANCE = 0.0003

// Barangay name mapping with aliases for name matching
const ALIASES = {
  'dallipawen': 'dal-lipaoen',
  'mamatingnorte': 'mamat-ing-norte',
  'mamatingsur': 'mamat-ing-sur',
}

// Normalize names for matching
function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[^\w]/g, '')
    .replace(/brgy/g, '')
    .replace(/barangay/g, '')
    .trim()
}

// Douglas-Peucker simplification
function simplifyPath(points, tolerance) {
  if (points.length < 3) return points

  let maxDist = 0
  let maxIdx = 0

  for (let i = 1; i < points.length - 1; i++) {
    const dist = perpendicularDistance(points[i], points[0], points[points.length - 1])
    if (dist > maxDist) {
      maxDist = dist
      maxIdx = i
    }
  }

  if (maxDist > tolerance) {
    const left = simplifyPath(points.slice(0, maxIdx + 1), tolerance)
    const right = simplifyPath(points.slice(maxIdx), tolerance)
    return left.slice(0, -1).concat(right)
  } else {
    return [points[0], points[points.length - 1]]
  }
}

function perpendicularDistance(point, lineStart, lineEnd) {
  const px = point[0]
  const py = point[1]
  const x1 = lineStart[0]
  const y1 = lineStart[1]
  const x2 = lineEnd[0]
  const y2 = lineEnd[1]

  let dist
  if (x1 === x2 && y1 === y2) {
    dist = Math.sqrt((px - x1) ** 2 + (py - y1) ** 2)
  } else {
    const t = Math.max(0, Math.min(1, ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / ((x2 - x1) ** 2 + (y2 - y1) ** 2)))
    dist = Math.sqrt(
      (px - (x1 + t * (x2 - x1))) ** 2 + (py - (y1 + t * (y2 - y1))) ** 2
    )
  }
  return dist
}

// Round coordinates to 5 decimals
function roundCoord(value) {
  return Math.round(value * 100000) / 100000
}

// Simplify coordinates in lon/lat space
// Preserves polygon/ring nesting structure
function simplifyCoordinates(coords, tolerance) {
  // Detect if this is a MultiPolygon (array of polygons) or Polygon (array of rings)
  const isMultiPolygon = Array.isArray(coords[0][0]) && Array.isArray(coords[0][0][0])
  const polygons = isMultiPolygon ? coords : [coords]

  const simplifiedPolygons = []

  for (const polygon of polygons) {
    const simplifiedRings = []
    for (const ring of polygon) {
      if (ring.length < 2) continue
      const simplified = simplifyPath(ring, tolerance)
      if (simplified.length >= 2) {
        // Ensure ring closure
        if (simplified[0][0] !== simplified[simplified.length - 1][0] ||
            simplified[0][1] !== simplified[simplified.length - 1][1]) {
          simplified.push(simplified[0])
        }
        simplifiedRings.push(simplified)
      }
    }
    if (simplifiedRings.length > 0) {
      simplifiedPolygons.push(simplifiedRings)
    }
  }

  // Return in the same format as input
  return isMultiPolygon ? simplifiedPolygons : simplifiedPolygons[0] || []
}

// Main function
async function main() {
  console.log('Reading GeoJSON...')
  const geojson = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'))

  console.log(`Found ${geojson.features.length} features`)

  // Read barangays to match IDs
  const barangayFile = 'src/data/government.ts'
  const barangayContent = fs.readFileSync(barangayFile, 'utf-8')

  const barangayMap = new Map()
  const regex = /{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)"/g
  let match
  while ((match = regex.exec(barangayContent)) !== null) {
    const [, id, name] = match
    const normalized = normalizeName(name)
    barangayMap.set(normalized, { id, name })
  }

  // Build output features
  const outputFeatures = []
  const unmatchedFeatures = []
  const matchedBarangayIds = new Set()

  for (const feature of geojson.features) {
    const name = feature.properties.name
    const normalized = normalizeName(name)

    let barangay = barangayMap.get(normalized)
    if (!barangay && ALIASES[normalized]) {
      barangay = barangayMap.get(ALIASES[normalized])
    }

    if (!barangay) {
      console.warn(`⚠️  No match for feature: ${name}`)
      unmatchedFeatures.push(name)
      continue
    }

    matchedBarangayIds.add(barangay.id)

    // Simplify and round coordinates
    const simplifiedCoords = simplifyCoordinates(feature.geometry.coordinates, SIMPLIFY_TOLERANCE)

    // Round all coordinates to 5 decimals, preserving polygon/ring structure
    let roundedCoords
    if (feature.geometry.type === 'Polygon') {
      // For Polygon: simplifiedCoords is [ring, ring, ...]
      roundedCoords = simplifiedCoords.map(ring =>
        ring.map(([lon, lat]) => [roundCoord(lon), roundCoord(lat)])
      )
    } else {
      // For MultiPolygon: simplifiedCoords is [[ring, ring, ...], [ring, ring, ...], ...]
      roundedCoords = simplifiedCoords.map(polygon =>
        polygon.map(ring =>
          ring.map(([lon, lat]) => [roundCoord(lon), roundCoord(lat)])
        )
      )
    }

    // Build output geometry
    const outGeometry = {
      type: feature.geometry.type,
      coordinates: roundedCoords,
    }

    outputFeatures.push({
      type: 'Feature',
      properties: {
        id: barangay.id,
        name: barangay.name,
      },
      geometry: outGeometry,
    })
  }

  // Check for unmatched barangays
  const unmatchedBarangays = []
  for (const [, { id }] of barangayMap) {
    if (!matchedBarangayIds.has(id)) {
      unmatchedBarangays.push(id)
    }
  }

  if (unmatchedFeatures.length > 0) {
    throw new Error(`Unmatched features: ${unmatchedFeatures.join(', ')}`)
  }

  if (unmatchedBarangays.length > 0) {
    throw new Error(`Missing geometry for barangays: ${unmatchedBarangays.join(', ')}`)
  }

  console.log(`✓ Matched ${outputFeatures.length} features`)

  // Sort features by ID for consistency
  outputFeatures.sort((a, b) => a.properties.id.localeCompare(b.properties.id))

  // Generate GeoJSON with metadata
  const output = {
    type: 'FeatureCollection',
    source: GEOJSON_SOURCE,
    sourceUrl: GEOJSON_SOURCE_URL,
    license: GEOJSON_LICENSE,
    retrieved: new Date().toISOString().split('T')[0],
    features: outputFeatures,
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2))

  const fileSize = fs.statSync(OUTPUT_FILE).size
  console.log(`✓ Wrote ${OUTPUT_FILE} (${fileSize} bytes)`)
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
