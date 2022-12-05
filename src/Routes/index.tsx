import Landing  from "Pages/Landing"

export interface routeInterface {
  path: string
  name: string
  exact?: boolean
  component?: any
  children?: Array<routeInterface>
}

const landingRoutes: routeInterface = {
  path: '/',
  name: 'Home',
  component: Landing
}

const aboutRoutes: routeInterface = {
  path: '/about',
  name: 'Who We Are',
  component: Landing
}

export const landing: Array<routeInterface> = [landingRoutes, aboutRoutes];
