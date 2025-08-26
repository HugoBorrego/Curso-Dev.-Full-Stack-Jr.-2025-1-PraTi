import { products } from './products'
import { ProductCard } from './ProductCard'
import "./ProductList.css"

export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}