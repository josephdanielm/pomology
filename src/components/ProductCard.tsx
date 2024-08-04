import { useShoppingCart } from '../context/ShoppingCartContext'
import { ProductCardProps } from '../types'

export default function ProductCard({ product, imageSrc }: ProductCardProps) {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
  const quantity =  getItemQuantity(product.name)

  const colorVariants: any = {
    blue: 'bg-blue-200 border-blue-300',
    red: 'bg-red-200 border-red-300',
    orange: 'bg-orange-200 border-orange-300',
    green: 'bg-lime-200 border-lime-300',
    brown: 'bg-amber-100 border-amber-300',
    purple: 'bg-purple-200 border-purple-300',
    yellow: 'bg-yellow-200 border-yellow-300'
  }

  const productColor = product.categories.color.toLowerCase()

  return (
    <div
      className={`flex flex-col text-gray-800 bg-clip-border w-full rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 px-4 gap-y-4`}
    >
      <div className={`border-2 w-full rounded-xl flex justify-center py-2 ${colorVariants[productColor]}`}>
        <img src={imageSrc} className='max-w-16 sm:pb-6 lg:py-8  self-center py-4' alt={product.name} />
      </div>
      <div className='flex flex-col grow gap-y-2'>
        <div className='flex justify-between'>
          <span className='flex flex-col'>
            <h2 className='text-xl leading-6 font-semibold text-start'>{product.name}</h2>
            <p className='text-sm font-semibold text-gray-500'>{product.categories.family}</p>
          </span>
          <p className='text-xl font-bold'>${product.price.toFixed(2)}</p>
        </div>
        <p className='text-md font-medium text-gray-600 leading-normal mb-4'>{product.description}</p>
          <button onClick={() => increaseCartQuantity(product.name)} className='group w-fit self-end mt-auto gap-x-1 flex items-center justify-center px-4 pr-2 py-2 text-base font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out'>
          Add to Bag
            <svg
              className='mb-1 fill-gray-600 group-hover:fill-gray-700 transition-all duration-300 ease-in-out'
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
  )
}
