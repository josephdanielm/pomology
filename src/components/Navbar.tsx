import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='bg-white'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4 whitespace-nowrap'>
        <Link to='/' className='text-2xl font-bold whitespace-nowrap text-zinc-800'>
          Tech Stack
        </Link>
        <div className="space-x-4 text-zinc-800 font-semibold">
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
