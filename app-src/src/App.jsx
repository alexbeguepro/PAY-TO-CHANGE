import { useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/AppShell.jsx";
import { Arbitration } from "./pages/Arbitration.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { FundsSecurity } from "./pages/FundsSecurity.jsx";
import { GoalBuilder } from "./pages/GoalBuilder.jsx";
import { PrivacyProfile } from "./pages/PrivacyProfile.jsx";
import { ObjectiveTracking } from "./pages/ObjectiveTracking.jsx";

const pages = {
  dashboard: Dashboard,
  create: GoalBuilder,
  tracking: ObjectiveTracking,
  funds: FundsSecurity,
  arbitration: Arbitration,
  privacy: PrivacyProfile,
};

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return pages[hash] ? hash : "dashboard";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getInitialPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const Page = useMemo(() => pages[currentPage] ?? Dashboard, [currentPage]);

  function navigate(pageId) {
    window.location.hash = pageId;
    setCurrentPage(pageId);
  }

  return (
    <AppShell currentPage={currentPage} onNavigate={navigate}>
      <Page onNavigate={navigate} />
    </AppShell>
  );
}
