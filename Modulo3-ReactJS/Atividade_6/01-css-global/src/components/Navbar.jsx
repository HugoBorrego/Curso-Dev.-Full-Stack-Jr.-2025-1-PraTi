import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import './Navbar.css'

export const Navbar = ({ cartCount }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="navbar">
      <button onClick={toggleTheme} aria-label="Alternar tema" className="theme-toggle">
        {theme === "light" ? "🌞" : "🌙"}
      </button>
      <h1>🌊 Rota das Ondas🏄</h1>
      <div className="cart-badge" aria-label={`Carrinho com ${cartCount} itens`}>
        🛒 {cartCount}
      </div>
    </nav>
  )
}
