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

export const landing: Array<routeInterface> = [landingRoutes];
