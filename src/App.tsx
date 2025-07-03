// App.tsx
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
