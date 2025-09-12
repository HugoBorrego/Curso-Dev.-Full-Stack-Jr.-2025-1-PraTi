import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CartContext } from "../context/CartContext"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: linear-gradient(90deg, #111, #333);
  color: #fff;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  h1 {
    font-size: 1.8rem;
    margin: 0;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(172, 172, 172, 0.5);
  }
`

const ThemeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffd700;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`

const CartButton = styled.button`
  background-color: #00ff22;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 0 6px rgba(60, 255, 0, 0.5);
`

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <Nav>
      <ThemeButton onClick={toggleTheme} aria-label="Alternar tema">
        {theme === "light" ? "🌞" : "🌙"}
      </ThemeButton>

      <TitleLink to="/">
        <h1>🖥️ Nextronix ⌨️</h1>
      </TitleLink>

      <CartButton
        aria-label={`Carrinho com ${cart.length} itens`}
        onClick={() => navigate("/cart")}
      >
        🛒 {cart.length}
      </CartButton>
    </Nav>
  )
}
