import {
  Activity,
  Bell,
  Database,
  HeartPulse,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Target,
  UserRound,
  WalletCards,
  ArrowLeft,
} from "lucide-react";
import { user } from "../data/mockData.js";

const navigation = [
  { id: "dashboard", label: "Tableau de bord", icon: Activity },
  { id: "create", label: "Creer un objectif", icon: Target },
  { id: "tracking", label: "Suivi objectifs", icon: HeartPulse },
  { id: "funds", label: "Caution & securite", icon: WalletCards },
  { id: "arbitration", label: "Arbitrage", icon: Scale },
];

const mobileLabels = {
  dashboard: "Bord",
  create: "Créer",
  tracking: "Suivi",
  funds: "Fonds",
  arbitration: "Arbitrage",
  privacy: "Profil",
};

export function AppShell({ currentPage, onNavigate, children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Navigation PTC">
        <div className="brand-panel">
          <img src="assets/logo-ptc-icon.png" alt="" />
          <div>
            <strong>PTC</strong>
            <span>Pay To Change</span>
          </div>
        </div>

        <nav className="main-nav">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.id === currentPage;
            return (
              <button
                className={active ? "nav-item nav-item--active" : "nav-item"}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                type="button"
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div style={{ height: "1px", background: "var(--border)", margin: "8px 0" }}></div>

          <a
            href="../index.html"
            className="nav-item"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Retour Ateliers</span>
          </a>
        </nav>

        <div className="trust-panel">
          <div className="trust-icon">
            <ShieldCheck size={20} aria-hidden="true" />
          </div>
          <strong>Mode production</strong>
          <p>Interface pensee pour consentement, audit et flux financiers delegues.</p>
        </div>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <a
            href="../index.html"
            className="mobile-back-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Retour</span>
          </a>
          <div className="product-context">
            <LockKeyhole size={18} aria-hidden="true" />
            <span>Fonds references chez partenaire financier</span>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Notifications">
              <Bell size={18} aria-hidden="true" />
              <span></span>
            </button>
            <button className="sync-pill" type="button">
              <Database size={16} aria-hidden="true" />
              Sync sandbox
            </button>
            <div className="user-chip">
              <span>{user.name.charAt(0)}</span>
              <div>
                <strong>{user.name}</strong>
                <small>{user.plan}</small>
              </div>
            </div>
          </div>
        </header>

        <main className="page-surface">{children}</main>

        <nav className="mobile-nav" aria-label="Navigation Mobile PTC">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.id === currentPage;
            return (
              <button
                className={active ? "mobile-nav-item mobile-nav-item--active" : "mobile-nav-item"}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                type="button"
              >
                <Icon size={18} aria-hidden="true" />
                <span>{mobileLabels[item.id]}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
