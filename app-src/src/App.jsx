import { useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/AppShell.jsx";
import { Arbitration } from "./pages/Arbitration.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { FundsSecurity } from "./pages/FundsSecurity.jsx";
import { GoalBuilder } from "./pages/GoalBuilder.jsx";
import { PrivacyProfile } from "./pages/PrivacyProfile.jsx";
import { ObjectiveTracking } from "./pages/ObjectiveTracking.jsx";
import { PitchDeck } from "./pages/PitchDeck.jsx";

const pages = {
  dashboard: Dashboard,
  create: GoalBuilder,
  tracking: ObjectiveTracking,
  funds: FundsSecurity,
  arbitration: Arbitration,
  privacy: PrivacyProfile,
  pitch: PitchDeck,
};

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return pages[hash] ? hash : "dashboard";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [isIframeMode, setIsIframeMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detect if inside an iframe or query contains iframe=true
    const inIframe = window.self !== window.top || window.location.search.includes("iframe=true");
    setIsIframeMode(inIframe);

    if (inIframe) {
      document.body.classList.add("iframe-mode");
    } else {
      document.body.classList.remove("iframe-mode");
    }

    // Detect screen width
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("iframe-mode");
    };
  }, []);

  // Hash syncing and state updates
  useEffect(() => {
    const onHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);

      // Sync hash to parent window if inside the phone frame iframe
      if (window.self !== window.top) {
        try {
          if (window.top.location.hash !== window.location.hash) {
            window.top.location.hash = window.location.hash;
          }
        } catch (e) {
          // Cross-origin safe fallback
        }
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Sync parent hash down to iframe
  useEffect(() => {
    if (isDesktop && !isIframeMode) {
      const onParentHashChange = () => {
        const iframe = document.querySelector(".phone-iframe");
        if (iframe) {
          try {
            if (iframe.contentWindow.location.hash !== window.location.hash) {
              iframe.contentWindow.location.hash = window.location.hash;
            }
          } catch (e) {
            // Ignore
          }
        }
      };
      window.addEventListener("hashchange", onParentHashChange);
      return () => window.removeEventListener("hashchange", onParentHashChange);
    }
  }, [isDesktop, isIframeMode]);

  const Page = useMemo(() => pages[currentPage] ?? Dashboard, [currentPage]);

  function navigate(pageId) {
    window.location.hash = pageId;
    setCurrentPage(pageId);
  }

  // If on desktop and not inside the iframe mockup, render the Phone Mockup Frame
  if (isDesktop && !isIframeMode) {
    const iframeUrl = `${window.location.pathname}?iframe=true${window.location.hash}`;
    return (
      <div className="desktop-preview-container">
        <div className="desktop-preview-info">
          <div className="brand-logo-preview">
            <img src="assets/logo-ptc-icon.png" alt="Logo PTC" style={{ width: "60px", height: "60px", borderRadius: "12px" }} />
          </div>
          <h1>PAY TO CHANGE</h1>
          <h2>Prototype Applicatif Mobile</h2>
          <p>
            Découvrez notre prototype applicatif en conditions réelles de rendu mobile. Cette interface met en œuvre la finance comportementale pour vous inciter à tenir vos objectifs.
          </p>
          <div className="preview-features">
            <div className="preview-feature-item">
              <i className="fa-solid fa-mobile-screen"></i>
              <span>Rendu Mobile-First immersif</span>
            </div>
            <div className="preview-feature-item">
              <i className="fa-solid fa-arrows-rotate"></i>
              <span>Synchronisation en temps réel</span>
            </div>
            <div className="preview-feature-item">
              <i className="fa-solid fa-user-shield"></i>
              <span>Consentement RGPD &amp; Sécurité</span>
            </div>
          </div>
          
          <a href="../index.html" className="btn-back-ateliers">
            <i className="fa-solid fa-arrow-left"></i> Retour aux Ateliers
          </a>
        </div>
        
        <div className="phone-device-frame">
          <div className="phone-notch"></div>
          <div className="phone-status-bar">
            <span className="status-bar-time">21:00</span>
            <div className="status-icons">
              <i className="fa-solid fa-wifi" style={{ fontSize: "11px" }}></i>
              <i className="fa-solid fa-signal" style={{ fontSize: "11px", marginLeft: "4px" }}></i>
              <i className="fa-solid fa-battery-three-quarters" style={{ fontSize: "13px", marginLeft: "4px" }}></i>
            </div>
          </div>
          <div className="phone-screen-container">
            <iframe 
              src={iframeUrl} 
              title="PTC App Mobile Prototype" 
              className="phone-iframe"
            />
          </div>
          <div className="phone-home-indicator"></div>
        </div>
      </div>
    );
  }

  // Normal Mobile Rendering or inside Iframe
  return (
    <AppShell currentPage={currentPage} onNavigate={navigate}>
      <Page onNavigate={navigate} />
    </AppShell>
  );
}
