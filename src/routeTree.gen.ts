import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import { Route as settingsRoute } from './routes/settings'

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute
    }
    '/settings': {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(indexRoute.options, {
  path: '/',
  getParentRoute: () => rootRoute,
})

Object.assign(settingsRoute.options, {
  path: '/settings',
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([indexRoute, settingsRoute])