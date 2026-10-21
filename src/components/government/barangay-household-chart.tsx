import { useEffect, useRef, useState } from "react"
import type { EChartsType } from "echarts/core"
import type { Barangay } from "@/data/government"
import { barangays, barangayMeta } from "@/data/government"
import { government } from "@/data/site"
import { SourceLink } from "@/components/site/section"
import { links } from "@/data/site"

// Helper to navigate to a barangay with proper focus management
function navigateToBarangay(barangayId: string) {
  const element = document.getElementById(barangayId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" })
    element.focus({ preventScroll: true })
  }
}

// Dynamic import of echarts to keep it out of the main bundle
async function loadEcharts() {
  const ec = await import("echarts/core")
  const { ScatterChart } = await import("echarts/charts")
  const { GridComponent, TooltipComponent, MarkLineComponent } = await import("echarts/components")
  const { SVGRenderer } = await import("echarts/renderers")

  // Register the components
  ec.use([ScatterChart, GridComponent, TooltipComponent, MarkLineComponent, SVGRenderer])

  return { init: ec.init }
}

function getCSSVariable(name: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return value || "#000000"
}

// Convert OKLCH string to RGB(A) for ECharts, preserving alpha
function oklchToRgb(oklchStr: string): string {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) return "#000000"

  ctx.fillStyle = oklchStr
  ctx.fillRect(0, 0, 1, 1)

  const imageData = ctx.getImageData(0, 0, 1, 1)
  const [r, g, b, a] = imageData.data
  // Preserve alpha: return rgba when alpha < 255, rgb otherwise
  const alpha = a / 255
  // tokens-allow: returns a resolved token as rgb() for ECharts, not a hardcoded color
  return alpha === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function getChartColors() {
  const primary = getCSSVariable("--primary")
  const muted = getCSSVariable("--muted-foreground")
  const border = getCSSVariable("--border")
  const foreground = getCSSVariable("--foreground")
  const popover = getCSSVariable("--popover")
  const popoverForeground = getCSSVariable("--popover-foreground")

  return {
    primary: oklchToRgb(primary),
    muted: oklchToRgb(muted),
    border: oklchToRgb(border),
    foreground: oklchToRgb(foreground),
    popover: oklchToRgb(popover),
    popoverForeground: oklchToRgb(popoverForeground),
  }
}

interface DataItem {
  id: string
  name: string
  value: [number, number]
  population: number
  households: number
  families: number
  label?: {
    show: boolean
    position?: string
  }
}

function buildChartOptions(barangayData: Barangay[], colors: ReturnType<typeof getChartColors>, isNarrow: boolean) {
  const copy = government.barangays.chart

  // Calculate town average
  const totalPopulation = barangayData.reduce((sum, b) => sum + b.population, 0)
  const totalHouseholds = barangayData.reduce((sum, b) => sum + b.households, 0)
  const townAverage = totalPopulation / totalHouseholds

  // Prepare data with calculated metrics
  const dataWithMetrics = barangayData.map((b) => ({
    barangay: b,
    householdSize: b.population / b.households,
  }))

  // Find barangays to label
  const largestBarangay = dataWithMetrics.reduce((max, item) =>
    item.barangay.population > max.barangay.population ? item : max
  )

  const sortedByHouseholdSize = [...dataWithMetrics].sort((a, b) => b.householdSize - a.householdSize)
  const twoHighestHouseholdSize = sortedByHouseholdSize.slice(0, 2)

  const twoLowestHouseholdSize = [...dataWithMetrics]
    .sort((a, b) => a.householdSize - b.householdSize)
    .slice(0, 2)

  const barangaysToLabel = new Set([
    largestBarangay.barangay.id,
    ...twoHighestHouseholdSize.map((item) => item.barangay.id),
    ...twoLowestHouseholdSize.map((item) => item.barangay.id),
  ])

  // Calculate axis bounds
  const minPop = Math.min(...barangayData.map((b) => b.population))
  const maxPop = Math.max(...barangayData.map((b) => b.population))
  const minHH = Math.min(...barangayData.map((b) => b.households))
  const maxHH = Math.max(...barangayData.map((b) => b.households))

  const xAxisMin = Math.floor(minPop / 500) * 500
  const xAxisMax = Math.ceil(maxPop / 500) * 500
  const yAxisMin = Math.floor(minHH / 150) * 150
  const yAxisMax = Math.ceil(maxHH / 150) * 150

  // Build scatter data
  const scatterData: DataItem[] = barangayData.map((b) => {
    const shouldLabel = barangaysToLabel.has(b.id) && !isNarrow
    const isLargest = b.id === largestBarangay.barangay.id
    const labelPosition = b.population > maxPop * 0.6 ? "left" : "right"

    return {
      id: b.id,
      name: b.name,
      value: [b.population, b.households],
      population: b.population,
      households: b.households,
      families: b.families,
      label: {
        show: shouldLabel || isLargest,
        position: labelPosition,
      },
    }
  })

  // Calculate markLine start and end points clipped to axis bounds
  const lineStartX = Math.max(xAxisMin, yAxisMin * townAverage)
  const lineStartY = lineStartX / townAverage
  const lineEndX = Math.min(xAxisMax, yAxisMax * townAverage)
  const lineEndY = lineEndX / townAverage

  return {
    tooltip: {
      trigger: "item",
      backgroundColor: colors.popover,
      borderColor: colors.border,
      textStyle: {
        color: colors.popoverForeground,
      },
      formatter: function (params: any) {
        if (!params.data) return ""
        const data = params.data as DataItem
        const houseSize = (data.population / data.households).toFixed(1)
        return `<strong>${data.name}</strong><br/>
${copy.xAxisName}: ${data.population.toLocaleString("en-PH")}<br/>
${copy.yAxisName}: ${data.households.toLocaleString("en-PH")}<br/>
${copy.peoplePerHousehold}: ${houseSize}<br/>
${government.barangays.families}: ${data.families.toLocaleString("en-PH")}`
      },
    },
    grid: {
      containLabel: true,
      left: "5%",
      right: "5%",
      bottom: "8%",
      top: "5%",
    },
    xAxis: {
      type: "value",
      scale: true,
      min: xAxisMin,
      max: xAxisMax,
      name: copy.xAxisName,
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: {
        color: colors.foreground,
      },
      axisLabel: {
        color: colors.foreground,
        formatter: (value: number) => value.toLocaleString("en-PH"),
      },
      axisLine: {
        lineStyle: {
          color: colors.border,
        },
      },
      splitLine: {
        lineStyle: {
          color: colors.border,
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "value",
      scale: true,
      min: yAxisMin,
      max: yAxisMax,
      name: copy.yAxisName,
      nameLocation: "middle",
      nameGap: 50,
      nameRotate: 90,
      nameTextStyle: {
        color: colors.foreground,
      },
      axisLabel: {
        color: colors.foreground,
        formatter: (value: number) => value.toLocaleString("en-PH"),
      },
      axisLine: {
        lineStyle: {
          color: colors.border,
        },
      },
      splitLine: {
        lineStyle: {
          color: colors.border,
          type: "dashed",
        },
      },
    },
    series: [
      {
        type: "scatter",
        data: scatterData,
        symbolSize: 10,
        itemStyle: {
          color: colors.primary,
        },
        label: {
          show: false,
          color: colors.foreground,
          fontSize: 11,
          formatter: (params: any) => {
            const data = params.data as DataItem
            return data.name
          },
        },
        markLine: {
          silent: true,
          symbol: "none",
          data: [
            [
              { coord: [lineStartX, lineStartY] },
              { coord: [lineEndX, lineEndY] },
            ],
          ],
          lineStyle: {
            color: colors.muted,
            type: "dashed",
            width: 1,
          },
          label: {
            formatter: copy.averageLineLabel.replace("{value}", townAverage.toFixed(1)),
            position: "insideEndTop",
            color: colors.foreground,
            fontSize: 10,
            padding: [0, 5],
          },
        },
        emphasis: {
          itemStyle: {
            color: colors.primary,
            borderColor: colors.foreground,
            borderWidth: 2,
            opacity: 0.9,
          },
          label: {
            show: true,
          },
        },
      },
    ],
  }
}

export function BarangayHouseholdChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<EChartsType | null>(null)
  const isNarrowRef = useRef(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize chart once
  useEffect(() => {
    if (!containerRef.current) return

    let mounted = true
    let resizeObserver: ResizeObserver | null = null

    const initChart = async () => {
      try {
        const { init } = await loadEcharts()

        if (!mounted) return

        const colors = getChartColors()
        const options = buildChartOptions(barangays, colors, isNarrowRef.current)

        // Initialize chart
        const chart = init(containerRef.current!, null, {
          renderer: "svg",
          useDirtyRect: false,
        })

        chart.setOption(options)

        // Handle clicks on dots
        chart.on("click", (params: any) => {
          if (!params.data) return
          navigateToBarangay(params.data.id)
        })

        chartRef.current = chart

        // Combined ResizeObserver: resize chart and check width
        resizeObserver = new ResizeObserver(() => {
          if (chartRef.current && mounted) {
            chartRef.current.resize()

            // Check if narrow
            if (containerRef.current) {
              const wasNarrow = isNarrowRef.current
              const isNarrow = containerRef.current.offsetWidth < 480
              if (isNarrow !== wasNarrow) {
                isNarrowRef.current = isNarrow
                const colors = getChartColors()
                const options = buildChartOptions(barangays, colors, isNarrow)
                chartRef.current.setOption(options)
              }
            }
          }
        })

        resizeObserver.observe(containerRef.current!)

        setIsLoading(false)
      } catch (error) {
        console.error("Failed to initialize barangay household chart:", error)
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    initChart()

    // Watch for theme changes using MutationObserver
    const htmlElement = document.documentElement
    const observer = new MutationObserver(() => {
      if (chartRef.current && mounted) {
        const colors = getChartColors()
        const options = buildChartOptions(barangays, colors, isNarrowRef.current)
        chartRef.current.setOption(options)
      }
    })

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      mounted = false
      observer.disconnect()
      resizeObserver?.disconnect()
      chartRef.current?.dispose()
    }
  }, [])

  const copy = government.barangays.chart

  return (
    <figure className="mb-8 flex flex-col gap-4">
      <figcaption className="text-sm text-muted-foreground">
        {copy.caption}
      </figcaption>
      <div
        ref={containerRef}
        className="h-[360px] w-full rounded-xl border border-border bg-card sm:h-[440px]"
        role="img"
        aria-label={copy.ariaLabel}
      >
        {isLoading && (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-muted-foreground">{copy.loading}</p>
          </div>
        )}
      </div>
      <nav className="sr-only focus-within:not-sr-only" aria-label={copy.navAriaLabel}>
        <ul className="flex flex-col gap-1">
          {barangays.map((barangay) => (
            <li key={barangay.id}>
              <a
                href={`#${barangay.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateToBarangay(barangay.id)
                }}
                className="text-sm underline hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
              >
                {barangay.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-xs text-muted-foreground">
        <SourceLink href={links.demographics} label={barangayMeta.census} />
      </p>
    </figure>
  )
}
