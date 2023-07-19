import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { PageHeader } from './components/PageHeader'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <div className='min-w-screen min-h-screen flex flex-col'>
        <PageHeader />

        <div className='flex-1 flex'>
          <Sidebar />

          <Routes />
        </div>
      </div>
    </BrowserRouter>
  )
}
