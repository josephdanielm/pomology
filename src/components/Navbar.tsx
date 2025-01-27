import { Link, useLocation } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart()

  const location = useLocation()

  return (
    <nav className=' sticky top-0 bg-white '>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4 whitespace-nowrap'>
        <Link to='/' className='text-2xl font-bold whitespace-nowrap text-gray-800 group'>
          Pomology
        </Link>
        <div className='space-x-4 text-gray-800 font-semibold flex items-center'>
          <Link className='font-medium relative group' to='/'>
            <span>Home</span>
            <span className={`${location.pathname === '/' && 'w-1/2 bg-gray-900'} group-hover:w-1/2 absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-gray-400`}></span>
            <span className={`${location.pathname === '/' && 'w-1/2 bg-gray-900'} group-hover:w-1/2 absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-gray-400`}></span>
          </Link>
          <Link className='font-medium relative group' to='/shop'>
            <span>Shop</span>
            <span className={`${location.pathname === '/shop' && 'w-1/2 bg-gray-900'} group-hover:w-1/2 absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-gray-400`}></span>
            <span className={`${location.pathname === '/shop' && 'w-1/2 bg-gray-900'} group-hover:w-1/2 absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-gray-400`}></span>
          </Link>
          <button onClick={openCart} className='flex items-center w-fit justify-center py-[2px] px-2 text-base font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out'>
          {cartQuantity}
            <svg
              className=' transition-all duration-200 ease-in-out fill-gray-700 mb-1 ml-1'
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
            >
              <path
                vectorEffect='non-scaling-stroke'
                d='M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-506.66q0-27 19.83-46.84Q199.67-720 226.67-720h100v-6.67q0-64 44.66-108.66Q416-880 480-880t108.67 44.67q44.66 44.66 44.66 108.66v6.67h100q27 0 46.84 19.83Q800-680.33 800-653.33v506.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-506.66h-100v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66H393.33v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66h-100v506.66ZM393.33-720h173.34v-6.67q0-36.33-25.17-61.5-25.17-25.16-61.5-25.16t-61.5 25.16q-25.17 25.17-25.17 61.5v6.67ZM226.67-146.67v-506.66 506.66Z'
              />
            </svg>
            
          </button>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
