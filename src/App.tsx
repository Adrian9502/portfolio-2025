import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AllProjects from "./App/AllProjects";
import AllCertifications from "./App/AllCertifications";
import Pages from "./components/Pages";
import { ROUTES } from "../utils/routes";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

// Performance monitoring context
import PerformanceMonitor from "./components/PerformanceMonitor";
import { PerformanceProvider } from "./context/PerformanceProvider";

function App() {
  return (
    <PerformanceProvider>
      <Router>
        <PerformanceMonitor show={false} position="top-right" />
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Pages />} />
            <Route path="*" element={<NotFound />} />
            <Route path={ROUTES.PROJECTS} element={<AllProjects />} />
            <Route
              path={ROUTES.CERTIFICATIONS}
              element={<AllCertifications />}
            />
          </Routes>
        </Layout>
      </Router>
    </PerformanceProvider>
  );
}

export default App;
