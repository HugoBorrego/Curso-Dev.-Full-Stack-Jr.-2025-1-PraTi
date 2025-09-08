// pages/CartPage.jsx
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./CartPage.css"

export const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext)

    return (
        <main className="cart-page">
            <Link to="/" className="btn back">
                ⬅️ Voltar à Loja
            </Link>

            <h2>🛒 Meu Carrinho</h2>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div className="cart-list">
                    {cart.map((p, index) => (
                        <div key={index} className="cart-card">
                            <img src={p.image} alt={p.title} />
                            <div className="cart-info">
                                <h3>{p.title}</h3>
                                <p>R$ {p.price.toFixed(2)}</p>
                                <button
                                    className="btn remove"
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
