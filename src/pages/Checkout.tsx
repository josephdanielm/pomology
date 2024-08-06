import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import useGetFruits from '../utils/useGetFruits'

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useShoppingCart()
  const { images, products } = useGetFruits()

  const navigate = useNavigate();
  const goToHomePage = () => navigate('/');

  const totalCost = cartItems.reduce((total, item) => {
    const product = products.find((product) => product.name === item.name)
    return total + (product?.price || 0) * item.quantity
  }, 0)

  const handleCheckout = () => {
    alert(`Checkout successful! If this were a real store, you would be charged $${totalCost.toFixed(2)}.`)
    cartItems.forEach((item) => removeFromCart(item.name))
    goToHomePage()
  }

  return (
    <div className='container mx-auto p-4 pb-16 max-w-screen-xl'>
      <h1 className='text-3xl font-bold mb-8'>Checkout</h1>
      <ul className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {cartItems.map((item) => {
          const product = products.find((product) => product.name === item.name)
          if (!product) return null

          const imageSrc = images[item.name]

          return (
            <li key={item.name} className='p-4 border rounded shadow-md flex items-center gap-x-4'>
              <div className='bg-gray-100 size-24 flex items-center justify-center rounded'>
                <img className='max-w-10' src={imageSrc || ''} alt={item.name} />
              </div>
              <div className='flex flex-col align-top gap-y-2 grow'>
                <div className='flex items-center w-full'>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <span className='font-semibold ml-auto'>${(product.price * item.quantity).toFixed(2)}</span>
                </div>
                <p className='text-gray-700 font-medium'>${product.price.toFixed(2)} x{item.quantity}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <h2 className='text-2xl font-bold mt-6'>Total Cost: ${totalCost.toFixed(2)}</h2>
      <button onClick={handleCheckout} className='flex mt-6 items-center justify-center px-4 py-2 text-base font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out'>
        Checkout 
      </button>
    </div> 
  )
}

export default CheckoutPage
