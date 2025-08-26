import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import './Navbar.css'

export const Navbar = ({ cartCount }) => {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <nav className="navbar">
            <h1>Rota das Ondas</h1>
            <div className="navbar-actions">
                <button onClick={toggleTheme} aria-label="Alternar tema" className="theme-toggle">
                    {theme === "light" ? "🌞" : "🌙"}
                </button>
                <div className="cart-badge" aria-label={`Carrinho com ${cartCount} itens`}>
                    🛒 {cartCount}
                </div>
            </div>
        </nav>


    )
}
