import ProductCard from '../components/ProductCard'
import { useOutletContext } from "react-router-dom";
import { ContextType } from '../types';
import getImage from '../utils/getImage';
import { useEffect, useState } from 'react';

export default function Shop() {
  const {products, isLoading, error, images} = useOutletContext<ContextType>()


  if (isLoading) { return <div>Loading...</div>}

  if (error) {return <div>Error: {error} </div>}

  return (
    <div>
      <div className='max-w-screen-xl px-4 mx-auto grid grid-cols-3 gap-3'>
        {products.map(product => (
          <ProductCard key={product.name} product={product} imageSrc={images[product.name] || ''}/>
        ))}
      </div>
    </div>
  )
}
