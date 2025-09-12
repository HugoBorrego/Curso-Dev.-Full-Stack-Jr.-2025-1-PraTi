import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ThemeContext } from "../context/ThemeContext"

export const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image } = product
  const { addToCart } = useContext(CartContext)
  const { theme } = useContext(ThemeContext)

  const tagColors = {
    indie: "bg-yellow-700",
    rap: "bg-red-700",
    rock: "bg-blue-600",
    nacional: "bg-indigo-700",
    clássico: "bg-gray-500",
    alternativo: "bg-pink-600",
    dark: "bg-black",
    psychedelic: "bg-purple-700"
  }

  const isLight = theme === "light"

  return (
    <div
      tabIndex="0"
      aria-label={`Produto ${title}`}
      className={`flex flex-col justify-between min-h-[380px] rounded-lg shadow-lg p-4 transition-transform hover:scale-[1.02] ${
        isLight ? "bg-white text-black" : "bg-neutral-900 text-white"
      }`}
    >
      <div className="flex-1 flex items-center justify-center mb-3">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="max-h-[220px] w-full object-contain rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold mb-1" title={title}>
        {title}
      </h2>
      <p className="text-green-500 font-bold">R$ {price.toFixed(2)}</p>
      <p className="text-orange-400">{'★'.repeat(rating)}</p>
      <span
        className={`inline-block mt-1 px-2 py-1 rounded-full text-xs uppercase ${
          tagColors[tag.toLowerCase()] || 'bg-gray-600'
        }`}
      >
        {tag}
      </span>
      <button
        onClick={() => addToCart(product)}
        className={`mt-3 px-4 py-2 rounded-md font-semibold ${
          isLight
            ? "bg-blue-500 hover:bg-blue-700 text-white"
            : "bg-blue-600 hover:bg-blue-800 text-white"
        }`}
      >
        Adicionar
      </button>
    </div>
  )
}
