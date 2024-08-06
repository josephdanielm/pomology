import { useShoppingCart } from '../context/ShoppingCartContext'
import getImage from '../utils/getImage'
import { useEffect } from 'react'
import useGetFruits from '../utils/useGetFruits'

type CartItemProps = {
  name: string
  quantity: number
}

export function CartItem({ name, quantity }: CartItemProps) {
  const { removeFromCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()

  const { products, images } = useGetFruits()

  const item = products.find((item) => item.name === name)
  if (item == null) return null

  const imageSrc = images[name]
  const quantityOf = getItemQuantity(name)

  return (
    <div key={name}>
      <div className='flex items-center gap-3'>
        <div className='bg-gray-100 h-20 w-20 flex items-center justify-center'>
          <img className='max-w-8' src={imageSrc || ''} alt={name} />
        </div>
        <div className='flex flex-col align-top gap-y-2 grow'>
          <div className='flex items-center w-full'>
            <span className='font-semibold text-lg'>{name}</span>
            <span className='font-medium ml-auto'>${(item.price * quantityOf).toFixed(2)}</span>
          </div>
          <div className='flex items-center'>
            <button
              onClick={() => decreaseCartQuantity(name)}
              className='flex items-center justify-center size-5 font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out'
            >
              -
            </button>
            <div className='font-medium text-md px-2'>x{quantityOf}</div>
            <button
              onClick={() => increaseCartQuantity(name)}
              className='flex items-center justify-center size-5 font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
