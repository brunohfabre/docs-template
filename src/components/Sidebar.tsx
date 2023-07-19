import { Link } from 'react-router-dom'

import { resources } from '../resources'
import { Badge } from './Badge'

export function Sidebar() {
  return (
    <div className="flex-col p-4 w-64 border-r border-zinc-200 hidden lg:flex">
      {resources.map((resource) => (
        <div key={resource.name} className="flex flex-col gap-2">
          <span className="text-base font-medium">{resource.name}</span>

          <div className="flex flex-col gap-2">
            {resource.routes.map((route) => (
              <Link
                key={route.name}
                className="flex items-center cursor-pointer text-zinc-500 hover:text-zinc-900"
                to={`/${resource.name
                  .toLowerCase()
                  .replace(' ', '-')}/${route.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
              >
                <div className="w-12 flex">
                  <Badge method={route.method} />
                </div>

                <span className="text-sm">{route.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
