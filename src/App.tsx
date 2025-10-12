import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

function AppContent() {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  return (
    <main className="bg-dark">
      <StarryBackground>
        {!isProjectsPage && <Header />}
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
