import { ThemeProvider } from "./context/ThemeContext"
import { Navbar } from "./components/Navbar"
import { ProductList } from "./components/ProductList"

export default function App() {
  return (
    <ThemeProvider>
      <Navbar cartCount={3} />
      <main style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
        <h1>Bem-vindo à nossa loja 🛍️</h1>
      </main>
      <ProductList />
    </ThemeProvider>
  )
}
