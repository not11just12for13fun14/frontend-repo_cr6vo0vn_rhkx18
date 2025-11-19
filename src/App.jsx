import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Growth from "./components/Growth";
import Curriculum from "./components/Curriculum";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <Hero />
      <About />
      <Reviews />
      <Growth />
      <Curriculum />
      <Details />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
