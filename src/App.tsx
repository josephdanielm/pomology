import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='space-y-10 md:space-y-16 lg:space-y-24'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
