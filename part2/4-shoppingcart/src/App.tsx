import Home from "./pages/Home/Home"
import CartProvider from "./providers/CartProvider"

const App = () => {
  return (
    <CartProvider>
     <Home/>
    </CartProvider>
  )
}
export default App