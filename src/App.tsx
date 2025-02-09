import Landing from "./App/Landing";
import About from "./App/About";
import "./index.css";
import Header from "./App/Header";
import Skills from "./App/Skills";
function App() {
  return (
    <main className="bg-texture bg-slate-950">
      <Header />
      <Landing />
      <About />
      <Skills />
    </main>
  );
}

export default App;
