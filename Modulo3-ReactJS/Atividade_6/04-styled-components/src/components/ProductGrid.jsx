import "./ProductGrid.css"
import { ProductCard } from "./ProductCard"
/* import products from "../data/products" */

export const ProductGrid = () => (
  <div className="grid">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
)
