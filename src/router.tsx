import {
  createRootRoute,
  createRoute,
  createRouter,
  notFound,
} from '@tanstack/react-router'
import { loadServices } from '@/data/charter'
import { serviceCategories, type ServiceCategoryId } from '@/data/site'
import { AboutPage } from '@/pages/about'
import { EmergencyPage } from '@/pages/emergency'
import { GovernmentPage } from '@/pages/government'
import { HomePage } from '@/pages/home'
import { LegislativePage } from '@/pages/legislative'
import { NotFoundPage } from '@/pages/not-found'
import { ServiceDetailPage, ServiceNotFound } from '@/pages/service-detail'
import { ServicesPage } from '@/pages/services'
import { TransparencyPage } from '@/pages/transparency'
import RootLayout from './root-layout'

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
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

const emergencyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/emergency', component: EmergencyPage })
const governmentRoute = createRoute({ getParentRoute: () => rootRoute, path: '/government', component: GovernmentPage })
const legislativeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/legislative', component: LegislativePage })
const transparencyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/transparency', component: TransparencyPage })

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceRoute,
  aboutRoute,
  emergencyRoute,
  governmentRoute,
  legislativeRoute,
  transparencyRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
