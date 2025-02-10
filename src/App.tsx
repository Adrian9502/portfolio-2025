import Landing from "./App/Landing";
import About from "./App/About";
import "./index.css";
import Header from "./App/Header";
import Skills from "./App/Skills";
import StarryBackground from "./components/StarryBackground";
import { Monitor } from "lucide-react";
function App() {
  return (
    <main className="bg-texture bg-slate-950">
      <Header />
      <Landing />
      <StarryBackground>
        <About />
        <Skills />
      </StarryBackground>
    </main>
  );
}

export default App;
