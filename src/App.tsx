import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Publications from "./components/Publications.tsx";
import Blog from "./components/Blog.tsx";
import Experience from "./components/Experience.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Publications />
      <Blog />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
