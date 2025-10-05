import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./App/Landing";
import About from "./App/About";
import Skills from "./App/Skills";
import ProjectsPreview from "./App/ProjectsPreview";
import AllProjects from "./App/AllProjects";
import Certification from "./App/Certification";
import Contact from "./App/Contact";
import "./index.css";
import Header from "./App/Header";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <Router>
      <main className="bg-dark">
        <StarryBackground>
          <Header />
          <Routes>
            {/* Home page with all sections */}
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <About />
                  <Skills />
                  <ProjectsPreview />
                  <Certification />
                  <Contact />
                </>
              }
            />
            {/* Dedicated projects page */}
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </StarryBackground>
      </main>
    </Router>
  );
}

export default App;
