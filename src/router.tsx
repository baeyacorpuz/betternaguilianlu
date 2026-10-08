import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { serviceCategories, type ServiceCategoryId } from '@/data/site'
import { HomePage } from '@/pages/home'
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
  component: ServicesPage,
})

const routeTree = rootRoute.addChildren([indexRoute, servicesRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
