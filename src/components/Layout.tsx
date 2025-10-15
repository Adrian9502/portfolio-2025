import { useLocation } from "react-router-dom";
import "../index.css";
import Header from "../App/Header";
import StarryBackground from "../components/StarryBackground";
import LandingAndFooterGlow from "../components/LandingAndFooterGlow";
import { BrowserView } from "react-device-detect";
import { GlowMouse } from "../components/GlowMouse";
import { ROUTES } from "../../utils/routes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isProjectsPage = location.pathname === ROUTES.PROJECTS;
  const isCertificationsPage = location.pathname === ROUTES.CERTIFICATIONS;
  const isNotFoundPage = location.pathname === ROUTES.NOTFOUND;
  return (
    <main className="bg-dark relative">
      <BrowserView>
        <GlowMouse />
      </BrowserView>

      <StarryBackground>
        <LandingAndFooterGlow />
        {!isProjectsPage && !isCertificationsPage && !isNotFoundPage && (
          <Header />
        )}
        {children}
      </StarryBackground>
    </main>
  );
};

export default Layout;
