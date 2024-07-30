import ProductCard from '../components/ProductCard'

export default function Shop() {
  return (
    <div>
      <div className='max-w-screen-xl px-4 mx-auto grid grid-cols-3 gap-3'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
