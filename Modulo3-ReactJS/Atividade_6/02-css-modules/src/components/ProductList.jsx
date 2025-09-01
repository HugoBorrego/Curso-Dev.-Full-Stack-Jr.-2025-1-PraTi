import { products } from './products'
import { ProductCard } from './ProductCard'
import styles from './ProductList.module.css'

export const ProductList = () => {
  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}
