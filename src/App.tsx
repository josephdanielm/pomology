import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import useGetFruits from './utils/useGetFruits'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

export default function App() {
  const { products, isLoading, error, images } = useGetFruits()

  return (
    <ShoppingCartProvider>
      <div className='space-y-10 md:space-y-16 lg:space-y-24'>
        <Navbar />
        <Outlet context={{ products, isLoading, error, images }} />
      </div>
    </ShoppingCartProvider>
  )
}
