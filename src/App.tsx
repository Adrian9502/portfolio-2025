import Landing from "./App/Landing";
import About from "./App/About";
import Skills from "./App/Skills";
import Projects from "./App/Projects";
import Certification from "./App/Certification";
import Contact from "./App/Contact";
import "./index.css";
import Header from "./App/Header";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <main className="bg-dark">
      <StarryBackground>
        <Header />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Certification />
        <Contact />
      </StarryBackground>
    </main>
  );
}

export default App;
