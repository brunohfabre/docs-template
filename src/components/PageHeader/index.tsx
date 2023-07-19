import { Link } from 'react-router-dom'

import { Search } from './Search'

export function PageHeader() {
  return (
    <div className="flex h-16 border-b border-zinc-200 items-center justify-between">
      <Link className="flex items-center font-semibold w-64 h-16 p-4" to="/">
        Orbit
      </Link>

      <Search />

      <div className="w-64 hidden md:flex" />
    </div>
  )
}
