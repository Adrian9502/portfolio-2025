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
    <main className="bg-dark relative">
      <StarryBackground>
        {/* glow */}
        <div className="absolute left-2 lg:left-24 top-0 lg:top-20 -translate-x-1/2 transform rounded-full border-[150px] border-b-neon-purple/80 border-l-neon-blue/80 border-r-neon-purple/80 border-t-neon-cyan/60 blur-[240px]" />
        <div className="absolute right-2 lg:top-20 lg:-translate-x-32  transform rounded-full border-[200px] xl:border-[150px] xl:border-b-neon-purple/80 xl:border-l-neon-blue/80 xl:border-r-neon-purple/80 xl:border-t-neon-cyan/50 blur-[240px] " />
        {/*  */}
        <div className="absolute right-12 lg:right-14 bottom-0 lg:bottom-20 -translate-x-1/2 transform rounded-full border-[150px] border-b-neon-purple/80 border-l-neon-blue/80 border-r-neon-purple/80 border-t-neon-cyan/60 blur-[240px]" />
        <div className="absolute left-12 lg:bottom-10 lg:-translate-x-32  transform rounded-full border-[200px] xl:border-[150px] xl:border-b-neon-purple/80 xl:border-l-neon-blue/80 xl:border-r-neon-purple/80 xl:border-t-neon-cyan/50 blur-[240px]" />
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
