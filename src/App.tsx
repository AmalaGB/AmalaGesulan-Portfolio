import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Experience from "./components/Experience.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="bg-neutral-950 text-white overflow-x-hidden">

      <Navbar />

      <main className="space-y-28">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
