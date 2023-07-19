import { useState } from 'react'
import { Link } from 'react-router-dom'

import { List } from '@phosphor-icons/react'

import { resources } from '../../resources'
import { Badge } from '../Badge'
import { Search } from './Search'

export function PageHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div className="fixed top-16 right-0 bottom-0 left-0 p-4 flex flex-col bg-white z-10 lg:hidden">
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
                    onClick={() => setOpen(false)}
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
      )}

      <div className="flex h-16 border-b border-zinc-200 items-center justify-between">
        <Link className="flex items-center font-semibold h-16 p-4" to="/">
          Orbit
        </Link>

        <Search />

        <button
          className="h-16 w-16 flex items-center justify-center xl:flex"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <List size={20} weight="bold" className="xl:hidden" />
        </button>
      </div>
    </>
  )
}
