import { ArrowRight, RefreshCcw, ShieldCheck, Target } from "lucide-react";
import { MetricCard } from "../components/MetricCard.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { ProgressRing } from "../components/ProgressRing.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { activeChallenge, principles, productStatus } from "../data/mockData.js";

export function Dashboard({ onNavigate }) {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Pilotage personnel"
        title="Tableau de bord"
        description="Vue operationnelle du defi actif, des risques et des principes de confiance qui structurent PTC."
        actions={
          <>
            <button className="button button--secondary" type="button">
              <RefreshCcw size={17} aria-hidden="true" />
              Synchroniser
            </button>
            <button className="button button--primary" onClick={() => onNavigate("create")} type="button">
              <Target size={17} aria-hidden="true" />
              Nouvel objectif
            </button>
          </>
        }
      />

      <section className="dashboard-grid">
        <article className="hero-card hero-card--product">
          <div className="hero-card__copy">
            <StatusBadge tone="success">Defi actif</StatusBadge>
            <h2>{activeChallenge.title}</h2>
            <p>
              L'engagement est clair: {activeChallenge.target.toLocaleString("fr-FR")} pas par jour,
              caution de {activeChallenge.deposit} EUR, verification par {activeChallenge.source}.
            </p>
            <button className="inline-link" onClick={() => onNavigate("tracking")} type="button">
              Ouvrir le suivi
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          <ProgressRing value={activeChallenge.progress} label="valide" />
        </article>

        <div className="metric-grid">
          <MetricCard label="Moyenne actuelle" value="7 480" detail="pas / jour" tone="info" />
          <MetricCard label="Jours restants" value={activeChallenge.remainingDays} detail="avant arbitrage" />
          <MetricCard label="Caution" value="120 EUR" detail="sequestre partenaire" tone="warning" />
          <MetricCard label="Risque" value={activeChallenge.risk} detail="aucun signal critique" tone="success" />
        </div>
      </section>

      <section className="content-grid content-grid--wide-left">
        <article className="panel">
          <div className="panel-header">
            <div>
              <span className="section-label">Prochaines actions</span>
              <h3>Maintenir la discipline sans bruit inutile</h3>
            </div>
          </div>
          <div className="task-list">
            <div className="task-item task-item--done">
              <ShieldCheck size={18} aria-hidden="true" />
              <div>
                <strong>Consentement donnees sante confirme</strong>
                <span>Version privacy 2026.06 conservee dans l'audit.</span>
              </div>
            </div>
            <div className="task-item">
              <RefreshCcw size={18} aria-hidden="true" />
              <div>
                <strong>Synchronisation du soir</strong>
                <span>Dernier agregat attendu a {activeChallenge.nextSync}.</span>
              </div>
            </div>
            <div className="task-item">
              <Target size={18} aria-hidden="true" />
              <div>
                <strong>Objectif a risque samedi</strong>
                <span>4 920 pas releves, le moteur attend confirmation finale.</span>
              </div>
            </div>
          </div>
        </article>

        <article className="panel">
          <span className="section-label">Etat plateforme</span>
          <div className="status-list">
            {productStatus.map((item) => (
              <div className="status-line" key={item.label}>
                <span>{item.label}</span>
                <StatusBadge tone={item.tone}>{item.value}</StatusBadge>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="principle-grid">
        {principles.map((principle) => (
          <article className="principle-card" key={principle.title}>
            <span></span>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
