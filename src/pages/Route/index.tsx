import { Badge } from '../../components/Badge'
import { CopyToClipboard } from '../../components/CopyToClipboard'
import { Item } from './Item'

export type ItemType = {
  name: string
  type: string
  required: boolean
}

type RouteType = {
  name: string
  description: string
  route: string
  method: string
  headers: ItemType[]
  params: ItemType[]
  body: ItemType[]
}

interface RouteProps {
  route: RouteType
}

export function Route({ route }: RouteProps) {
  return (
    <div className="flex-1 flex overflow-auto">
      <main className="flex-1 flex flex-col p-4 max-w-3xl mx-auto gap-6 md:p-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{route.name}</h1>
            <Badge method={route.method} size="md" />
          </div>

          {route.description && (
            <span className="text-sm text-zinc-500">{route.description}</span>
          )}
        </div>

        {route.route && (
          <div className="flex flex-col gap-2">
            <span className="text-zinc-700">Route</span>

            <code className="bg-zinc-800 pl-4 pr-3 py-3 rounded-xl flex items-center justify-between">
              <pre className="text-white text-sm">{route.route}</pre>

              <CopyToClipboard content={route.route} />
            </code>
          </div>
        )}

        {route.headers.length > 0 && (
          <div className="flex flex-col">
            <span className="text-zinc-700">Headers</span>

            <div className="flex flex-col divide-y divide-dashed">
              {route.headers.map((item) => (
                <Item key={item.name} item={item} />
              ))}
            </div>
          </div>
        )}

        {route.params.length > 0 && (
          <div className="flex flex-col">
            <span className="text-zinc-700">Params</span>

            <div className="flex flex-col divide-y divide-dashed">
              {route.params.map((item) => (
                <Item key={item.name} item={item} />
              ))}
            </div>
          </div>
        )}

        {route.body.length > 0 && (
          <div className="flex flex-col">
            <span className="text-zinc-700">Body parameters</span>

            <div className="flex flex-col divide-y divide-dashed">
              {route.body.map((item) => (
                <Item key={item.name} item={item} />
              ))}
            </div>
          </div>
        )}
      </main>

      <div className="hidden w-64 xl:block" />
    </div>
  )
}
