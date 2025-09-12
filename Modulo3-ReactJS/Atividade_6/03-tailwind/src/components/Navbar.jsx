import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CartContext } from "../context/CartContext"
import { useNavigate, Link } from "react-router-dom"


export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <nav className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-3 bg-gradient-to-r from-zinc-900 to-zinc-700 text-white shadow-md font-Times">
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className="text-yellow-400 text-xl hover:scale-110 transition-transform"
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>

      <Link to="/" className="hover:opacity-80 transition-opacity">
        <h1 className="text-2xl tracking-wide text-white drop-shadow-sm">
          🎵 Som na Rede 🎧
        </h1>
      </Link>

      <button
        className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-base flex items-center gap-1 shadow-md"
        aria-label={`Carrinho com ${cart.length} itens`}
        onClick={() => navigate("/cart")}
      >
        🛒 {cart.length}
      </button>
    </nav>
  )
}
