import { Link } from 'react-router-dom'
import ssdImage from '../assets/ssd-image.jpg'

export default function Hero() {
  return (
    <section>
      <div className='grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl leading-10'>
            Cutting-Edge Electronics for Every Need
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>
            From the latest gadgets to essential accessories, our products simplify your tech life. Discover why
            customers around the world trust TechStack for all their electronic needs.
          </p>
          <Link
            to='/shop'
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100'
          >
            Shop Now
          </Link>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex pl-12'>
          <img src={ssdImage} alt='Closeup image of an SSD' />
        </div>
      </div>
    </section>
  )
}