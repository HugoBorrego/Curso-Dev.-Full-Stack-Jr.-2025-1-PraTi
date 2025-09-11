import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CartContext } from "../context/CartContext"
import { useNavigate, Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className="theme-toggle"
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>

      {/* Link para voltar para a Home */}
      <Link to="/" className="navbar-title">
        <h1>🎥 CineShop 🎞️</h1>
      </Link>

      <button
        className="cart-badge"
        aria-label={`Carrinho com ${cart.length} itens`}
        onClick={() => navigate("/cart")}
      >
        🛒 {cart.length}
      </button>
    </nav>
  )
}
