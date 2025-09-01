import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import styles from './Navbar.module.css'

export const Navbar = ({ cartCount }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className={styles.navbar}>
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className={styles.themeToggle}
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>
      <h1 className={styles.title}>🌊 Rota das Ondas🏄</h1>
      <div
        className={styles.cartBadge}
        aria-label={`Carrinho com ${cartCount} itens`}
      >
        🛒 {cartCount}
      </div>
    </nav>
  )
}
