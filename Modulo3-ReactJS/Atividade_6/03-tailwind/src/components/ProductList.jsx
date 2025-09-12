import { products } from './products'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}
