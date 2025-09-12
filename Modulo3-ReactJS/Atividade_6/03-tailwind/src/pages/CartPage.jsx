import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"

export const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext)
  const { theme } = useContext(ThemeContext)

  const isLight = theme === "light"

  return (
    <main
      className={`max-w-[900px] mx-auto p-8 ${
        isLight ? "text-black bg-white" : "text-white bg-neutral-900"
      } transition-colors duration-300`}
    >
      <Link
        to="/"
        className={`inline-block mt-5 px-4 py-2 rounded-md text-center font-semibold ${
          isLight
            ? "bg-blue-500 text-white hover:bg-blue-700"
            : "bg-blue-600 text-white hover:opacity-90"
        }`}
      >
        ⬅️ Voltar à Loja
      </Link>

      <h2 className="text-2xl font-bold mt-6 mb-4">🛒 Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p className={isLight ? "text-gray-600" : "text-gray-300"}>
          Seu carrinho está vazio.
        </p>
      ) : (
        <div className="grid gap-4 my-5">
          {cart.map((p, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-lg shadow-md p-4 transition-transform hover:scale-[1.01] ${
                isLight ? "bg-gray-100 text-black" : "bg-neutral-800 text-white"
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-20 h-20 object-contain rounded-md bg-white"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-green-500 font-bold">
                  R$ {p.price.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-800 text-white font-bold rounded-md transition-transform hover:scale-105"
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
