import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { CartProvider } from "./context/CartContext"
import { Navbar } from "./components/Navbar"
import { ProductList } from "./components/ProductList"
import { CartPage } from "./pages/CartPage"

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}
