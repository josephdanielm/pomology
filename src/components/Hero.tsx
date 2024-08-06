import { Link } from 'react-router-dom'
import useGetFruits from '../utils/useGetFruits'
import githubLogo from '../assets/github-mark.svg'

export default function Hero() {
  const { images } = useGetFruits()

  return (
    <section className='flex flex-col max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0'>
      <div className='mx-auto place-self-center w-full'>
        <h1 className='max-w-4xl mx-auto mb-6 text-4xl font-extrabold tracking-tight md:text-5xl leading-10 text-center'>
          Exquisite Fruits for Every Occasion
        </h1>
        <p className='max-w-prose mx-auto text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl'>
          From the juiciest berries to exotic tropical finds, our selection celebrates the art of fruit cultivation.
          Experience the essence of nature with Pomology.
        </p>
        <div className='flex flex-col items-center justify-center mb-4 lg:mb-8'>
          <div className='grid gap-4 mx-auto max-w-96 px-4 my-2 mb-8 lg:mb-14 grid-cols-5'>
              <img src={images['Kiwi']!} alt='Kiwi' />
              <img src={images['Banana']!} alt='Banana' />
              <img src={images['Peach']!} alt='Peach' />
              <img src={images['Grapes']!} alt='Grapes' />
              <img src={images['Blueberries']!} alt='Blueberries' />   
          </div>
        </div>
        <Link
          to='/shop'
          className='flex w-fit mx-auto items-center justify-center mb-8 lg:mb-10 px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded hover:bg-gray-100'
        >
          Shop Now
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 w-full justify-center items-center flex py-4">
        <a href="https://github.com/josephdanielm" target='_blank'><img className='size-8' src={githubLogo} alt="Github icon that links to user josephdanielm on Github." />
        </a>
      </div>
    </section>
  )
}
