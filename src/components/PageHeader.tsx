import { Link } from 'react-router-dom'

import { MagnifyingGlass } from '@phosphor-icons/react'

export function PageHeader() {
  return (
    <div className="flex h-16 border-b border-zinc-200 items-center justify-between">
      <Link className="flex items-center font-semibold w-64 h-16 p-4" to="/">
        Orbit
      </Link>

      <div>
        <button
          type="button"
          className="flex gap-4 items-center h-10 pl-4 pr-2 rounded-lg border border-zinc-100 text-zinc-400 hover:bg-zinc-100 transition-colors w-[440px] justify-between"
        >
          <div className="flex items-center gap-2">
            <MagnifyingGlass />

            <span className="text-sm">Quick search for anything </span>
          </div>

          <span className="text-xs border border-zinc-200 py-1 px-2 rounded-md leading-none">
            ⌘ K
          </span>
        </button>
      </div>

      <div className="w-64" />
    </div>
  )
}
