import { Routes as Router, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Route as RouteRender } from './pages/Route'
import { resources } from './resources'

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />

      {resources.map((resource) => (
        <Route
          key={resource.name.toLowerCase().replace(' ', '-')}
          path={resource.name.toLowerCase().replace(' ', '-')}
        >
          {resource.routes.map((route) => (
            <Route
              key={route.name.toLowerCase().replace(' ', '-')}
              path={route.name.toLowerCase().replace(' ', '-')}
              element={<RouteRender route={route} />}
            />
          ))}
        </Route>
      ))}
    </Router>
  )
}
