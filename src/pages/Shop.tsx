import ProductCard from '../components/ProductCard'
import { useOutletContext } from "react-router-dom";
import { ContextType } from '../types';


export default function Shop() {
  const {products, isLoading, error, images} = useOutletContext<ContextType>()

  if (isLoading) { return <div>Loading...</div>}

  if (error) {return <div>Error: {error} </div>}

  return (
    <div className='pb-16'>
      <div className='max-w-screen-xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map(product => (
          <ProductCard key={product.name} product={product} imageSrc={images[product.name] || ''}/>
        ))}
      </div>
    </div>
  )
}
