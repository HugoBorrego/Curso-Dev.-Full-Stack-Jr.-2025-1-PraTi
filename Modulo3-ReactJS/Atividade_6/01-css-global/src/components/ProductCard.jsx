import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image } = product
  const { addToCart } = useContext(CartContext)

  return (
    <div className="card" tabIndex="0" aria-label={`Produto ${title}`}>
      <div className="image-wrapper">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <h2 className="title" title={title}>{title}</h2>
      <p className="price">R$ {price.toFixed(2)}</p>
      <p className="rating">{"★".repeat(rating)}</p>
      <span className={`tag ${tag.toLowerCase()}`}>{tag}</span>
      <button
        className="btn solid"
        onClick={() => addToCart(product)}
      >
        Adicionar
      </button>
    </div>
  )
}
