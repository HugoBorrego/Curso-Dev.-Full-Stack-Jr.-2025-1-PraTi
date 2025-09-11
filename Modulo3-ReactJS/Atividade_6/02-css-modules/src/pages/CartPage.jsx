import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import styles from "./CartPage.module.css"

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  return (
    <main className={styles.cartPage}>
      <Link to="/" className={`${styles.btn} ${styles.back}`}>
        ⬅️ Voltar à Loja
      </Link>

      <h2>🛒 Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className={styles.cartList}>
          {cart.map((p, index) => (
            <div key={index} className={styles.cartCard}>
              <img src={p.image} alt={p.title} />
              <div className={styles.cartInfo}>
                <h3>{p.title}</h3>
                <p>R$ {p.price.toFixed(2)}</p>
                <button
                  className={`${styles.btn} ${styles.remove}`}
                  onClick={() => removeFromCart(index)}
                >
                  ❌ Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
