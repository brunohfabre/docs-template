import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Command } from 'cmdk'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { resources } from '../../resources'
import { Badge } from '../Badge'

const platform = navigator?.userAgentData?.platform ?? navigator?.platform

export function Search() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if ((e.key === 'k' && e.metaKey) || (e.key === 'k' && e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [])

  function handleSelect(route: string) {
    navigate(route)

    setOpen(false)
  }

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed top-0 left-0 bottom-0 right-0 z-50"
      >
        <div
          className="fixed top-0 left-0 bottom-0 right-0 bg-black/50"
          onClick={() => setOpen(false)}
        />

        <div className="fixed bg-white overflow-hidden rounded-lg max-w-xl w-full max-h-[70%] top-[15%] left-[50%] translate-x-[-50%] flex flex-col">
          <div className="flex items-center px-4 gap-3 border-b border-zinc-100">
            <MagnifyingGlass
              size={18}
              weight="bold"
              className="text-zinc-400"
            />

            <Command.Input
              placeholder="Search routes"
              className="flex-1 h-12 outline-none"
            />
          </div>

          <Command.List className="flex flex-col overflow">
            <Command.Empty className="p-16 text-zinc-500 flex items-center justify-center">
              No results found.
            </Command.Empty>

            <div className="flex flex-col py-2">
              {resources.map((resource) => (
                <Command.Group key={resource.name} className="flex flex-col">
                  <div className="flex px-4 py-2">
                    <span className="text-sm text-zinc-400">
                      {resource.name}
                    </span>
                  </div>

                  {resource.routes.map((route) => (
                    <Command.Item
                      key={route.name}
                      className="flex items-center h-10 px-4 text-sm text-zinc-900 data-[selected=true]:bg-zinc-100"
                      onSelect={() =>
                        handleSelect(
                          `/${resource.name
                            .toLowerCase()
                            .replace(' ', '-')}/${route.name
                            .toLowerCase()
                            .replace(' ', '-')}`,
                        )
                      }
                    >
                      <div className="w-12 flex">
                        <Badge method={route.method} />
                      </div>

                      <span>{route.name}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </div>
          </Command.List>
        </div>
      </Command.Dialog>

      <button
        type="button"
        className="w-full flex gap-4 items-center h-10 pl-4 pr-2 rounded-lg border border-zinc-100 text-zinc-400 hover:bg-zinc-100 transition-colors justify-between"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2">
          <MagnifyingGlass />

          <span className="text-sm">Quick search for anything</span>
        </div>

        <span className="text-xs border border-zinc-200 py-1 px-2 rounded-md leading-none">
          {platform === 'macOS' ? '⌘' : 'Ctrl'} K
        </span>
      </button>
    </>
  )
}
