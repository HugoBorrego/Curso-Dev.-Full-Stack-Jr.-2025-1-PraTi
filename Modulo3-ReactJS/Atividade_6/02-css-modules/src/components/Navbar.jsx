import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CartContext } from "../context/CartContext"
import { useNavigate, Link } from "react-router-dom"
import styles from './Navbar.module.css'

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <nav className={styles.navbar}>
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className={styles.themeToggle}
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>

      <Link to="/" className={styles.navbarTitle}>
        <h1 className={styles.navbarHeading}>🎥 CineShop 🎞️</h1>
      </Link>

      <button
        className={styles.cartBadge}
        aria-label={`Carrinho com ${cart.length} itens`}
        onClick={() => navigate("/cart")}
      >
        🛒 {cart.length}
      </button>
    </nav>
  )
}
