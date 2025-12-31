import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Models } from "./components/Models";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Models />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
