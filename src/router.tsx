import {
  createRootRoute,
  createRoute,
  createRouter,
  notFound,
  redirect,
} from '@tanstack/react-router'
import { loadServices } from '@/data/charter'
import { serviceCategories, type ServiceCategoryId } from '@/data/site'
import { AboutPage } from '@/pages/about'
import { BarangaysPage } from '@/pages/government/barangays'
import { HistoryPage } from '@/pages/government/history'
import { GovernmentLayout } from '@/pages/government/layout'
import { LeadershipPage } from '@/pages/government/leadership'
import { OfficialsPage } from '@/pages/government/officials'
import { HomePage } from '@/pages/home'
import { ServiceDetailPage, ServiceNotFound } from '@/pages/service-detail'
import { ServicesPage } from '@/pages/services'
import RootLayout from './root-layout'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

type ServicesSearch = { category?: ServiceCategoryId; q?: string }

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  validateSearch: (search: Record<string, unknown>): ServicesSearch => ({
    category: serviceCategories.some((c) => c.id === search.category)
      ? (search.category as ServiceCategoryId)
      : undefined,
    q: typeof search.q === 'string' && search.q ? search.q : undefined,
  }),
  loader: () => loadServices(),
  component: ServicesPage,
})

const serviceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$serviceId',
  loader: async ({ params }) => {
    const services = await loadServices()
    const service = services.find((s) => s.id === params.serviceId)
    if (!service) throw notFound()
    return service
  },
  component: ServiceDetailPage,
  notFoundComponent: ServiceNotFound,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const governmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/government',
  component: GovernmentLayout,
})

const governmentIndexRoute = createRoute({
  getParentRoute: () => governmentRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/government/leadership', replace: true })
  },
})

const leadershipRoute = createRoute({
  getParentRoute: () => governmentRoute,
  path: '/leadership',
  component: LeadershipPage,
})

const historyRoute = createRoute({
  getParentRoute: () => governmentRoute,
  path: '/history',
  component: HistoryPage,
})

const officialsRoute = createRoute({
  getParentRoute: () => governmentRoute,
  path: '/officials',
  component: OfficialsPage,
})

const barangaysRoute = createRoute({
  getParentRoute: () => governmentRoute,
  path: '/barangays',
  component: BarangaysPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceRoute,
  aboutRoute,
  governmentRoute.addChildren([governmentIndexRoute, leadershipRoute, historyRoute, officialsRoute, barangaysRoute]),
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
