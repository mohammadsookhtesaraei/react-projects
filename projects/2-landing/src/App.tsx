import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Courses from "./components/Courses/Courses";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";

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

        {/* courses-section*/}
        <Courses/>

        {/* stats -section */}
        <Stats/>

        {/* testimonials section */}
        <Testimonials/>

        {/* pricing -section */}
        <Pricing/>

      </main>
    </div>
  );
};
export default App;
