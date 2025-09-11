import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import styles from './ProductList.module.css'

export const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image } = product
  const { addToCart } = useContext(CartContext)

  return (
    <div className={styles.card} tabIndex="0" aria-label={`Produto ${title}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <h2 className={styles.title} title={title}>{title}</h2>
      <p className={styles.price}>R$ {price.toFixed(2)}</p>
      <p className={styles.rating}>{"★".repeat(rating)}</p>
      <span className={`${styles.tag} ${styles[tag.toLowerCase()]}`}>{tag}</span>
      <button
        className={styles.btnSolid}
        onClick={() => addToCart(product)}
      >
        Adicionar
      </button>
    </div>
  )
}
