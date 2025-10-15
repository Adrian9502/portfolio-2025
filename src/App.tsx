import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AllProjects from "./App/AllProjects";
import AllCertifications from "./App/AllCertifications";
import Pages from "./components/Pages";
import { ROUTES } from "../utils/routes";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Pages />} />
          <Route path="*" element={<NotFound />} />
          <Route path={ROUTES.PROJECTS} element={<AllProjects />} />
          <Route path={ROUTES.CERTIFICATIONS} element={<AllCertifications />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
