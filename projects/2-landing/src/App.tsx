import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

const App = () => {
  return (
    <div className="relative min-h-screen text-text-primary overflow-x-hidden">
      {/* navigation */}
      <Navbar/>
      <main>
       <Hero/>
      </main>
    </div>
  )
}
export default App