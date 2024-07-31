import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

export default function Hero() {
  return (
    <section className='flex flex-col max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 '>
      <div className='mx-auto place-self-center w-full'>
        <h1 className='max-w-3xl mx-auto mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl leading-10 text-center'>
          Exquisite Fruits for Every Occasion
        </h1>
        <p className='max-w-prose mx-auto text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>
          From the juiciest berries to exotic tropical finds, our selection celebrates the art of fruit cultivation.
          Experience the essence of nature with Pomology.
        </p>
        <Link
          to='/shop'
          className='flex w-fit mx-auto items-center justify-center mb-8 lg:mb-10 px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100'
        >
          Shop Now
        </Link>
      </div>
      <div className='max-w-screen-lg w-full mx-auto px-4 grid grid-cols-3 gap-3'>
      </div>
    </section>
  )
}
