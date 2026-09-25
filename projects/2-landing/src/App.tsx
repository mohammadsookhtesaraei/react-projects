import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <div className="relative min-h-screen text-text-primary overflow-x-hidden">
      {/* navigation */}
      <Navbar />
      <main>
        {/* hero-section */}
        <Hero />

        {/* features -section */}
        <Features />
      </main>
    </div>
  );
};
export default App;
