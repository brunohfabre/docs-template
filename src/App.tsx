import { BrowserRouter } from 'react-router-dom'

import { PageHeader } from './components/PageHeader'
import { Sidebar } from './components/Sidebar'
import { Routes } from './Routes'
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen max-h-screen flex flex-col">
        <PageHeader />

        <div className="flex-1 flex overflow-auto">
          <Sidebar />

          <Routes />
        </div>
      </div>
    </BrowserRouter>
  )
}
