import Layout from "./components/layout/Layout"
import ThemeProvider from "./context/ThemeProvider"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <ThemeProvider>
    <Layout>
      <HomePage/>
    </Layout>
    </ThemeProvider>
  )
}
export default App;