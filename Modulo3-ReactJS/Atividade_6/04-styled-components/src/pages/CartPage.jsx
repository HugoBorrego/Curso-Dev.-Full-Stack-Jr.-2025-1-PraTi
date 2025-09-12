import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Main = styled.main`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  color: var(--text-color, #fff);
`

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  background: var(--btn-bg, #007bff);
  color: var(--btn-text, #fff);
  text-decoration: none;
  text-align: center;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`

const CartList = styled.div`
  display: grid;
  gap: 16px;
  margin: 20px 0;
`

const CartCard = styled.div`
  display: flex;
  align-items: center;
  background: var(--card-bg, #1a1a1a);
  color: var(--text-color, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 6px var(--card-shadow, rgba(0, 0, 0, 0.3));
  padding: 12px;
  gap: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 6px;
    background: #fff;
  }
`

const CartInfo = styled.div`
  flex: 1;
`

const RemoveButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #dc3545;
  color: white;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background: #b02a37;
    transform: scale(1.05);
  }
`

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  return (
    <Main>
      <BackButton to="/">⬅️ Voltar à Loja</BackButton>
      <h2>🛒 Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <CartList>
          {cart.map((p, index) => (
            <CartCard key={index}>
              <img src={p.image} alt={p.title} />
              <CartInfo>
                <h3>{p.title}</h3>
                <p>R$ {p.price.toFixed(2)}</p>
                <RemoveButton onClick={() => removeFromCart(index)}>
                  ❌ Remover
                </RemoveButton>
              </CartInfo>
            </CartCard>
          ))}
        </CartList>
      )}
    </Main>
  )
}
