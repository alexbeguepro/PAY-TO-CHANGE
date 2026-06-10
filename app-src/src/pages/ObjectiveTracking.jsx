import { Activity, AlertTriangle, CheckCircle2, RefreshCcw } from "lucide-react";
import { MetricCard } from "../components/MetricCard.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { ProgressRing } from "../components/ProgressRing.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { activeChallenge, challenges, dailyProgress } from "../data/mockData.js";

export function ObjectiveTracking() {
  const maxValue = Math.max(...dailyProgress.map((item) => item.value));

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Suivi des objectifs"
        title="Suivre la progression sans perdre la preuve"
        description="L'ecran de suivi montre ce qui est atteint, ce qui manque et ce qui sera utilise dans l'arbitrage final."
        actions={
          <button className="button button--secondary" type="button">
            <RefreshCcw size={17} aria-hidden="true" />
            Forcer la sync
          </button>
        }
      />

      <section className="tracking-hero">
        <article className="panel tracking-summary">
          <div>
            <StatusBadge tone="success">{activeChallenge.status}</StatusBadge>
            <h2>{activeChallenge.title}</h2>
            <p>
              Du {activeChallenge.startDate} au {activeChallenge.endDate}. Source active:
              {" "}{activeChallenge.source}.
            </p>
          </div>
          <ProgressRing value={activeChallenge.progress} label="progression" />
        </article>
        <MetricCard label="Cible" value="8 000" detail="pas / jour" />
        <MetricCard label="Moyenne" value="7 480" detail="pas / jour" tone="info" />
        <MetricCard label="Jours restants" value="12" detail="avant decision" tone="warning" />
      </section>

      <section className="content-grid content-grid--wide-left">
        <article className="panel">
          <div className="panel-header">
            <div>
              <span className="section-label">Activite hebdomadaire</span>
              <h3>Preuve quotidienne retenue</h3>
            </div>
            <StatusBadge tone="info">Agregats minimaux</StatusBadge>
          </div>
          <div className="bar-chart">
            {dailyProgress.map((item) => (
              <div className="bar-column" key={item.day}>
                <div className={`bar-value bar-value--${item.status}`} style={{ height: `${(item.value / maxValue) * 100}%` }}>
                  <span>{item.value.toLocaleString("fr-FR")}</span>
                </div>
                <strong>{item.day}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="section-label">Sante du defi</span>
          <div className="insight-list">
            <div className="insight-item">
              <CheckCircle2 size={18} aria-hidden="true" />
              <div>
                <strong>5 jours valides</strong>
                <span>Objectif quotidien atteint ou coherent.</span>
              </div>
            </div>
            <div className="insight-item insight-item--warning">
              <AlertTriangle size={18} aria-hidden="true" />
              <div>
                <strong>1 jour sous cible</strong>
                <span>Samedi demande une attention avant arbitrage.</span>
              </div>
            </div>
            <div className="insight-item">
              <Activity size={18} aria-hidden="true" />
              <div>
                <strong>1 jour en attente</strong>
                <span>Sync finale prevue ce soir.</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <span className="section-label">Historique objectifs</span>
            <h3>Defis personnels</h3>
          </div>
        </div>
        <div className="data-table">
          <div className="data-row data-row--head">
            <span>Objectif</span>
            <span>Statut</span>
            <span>Progression</span>
            <span>Caution</span>
            <span>Source</span>
          </div>
          {challenges.map((challenge) => (
            <div className="data-row" key={challenge.id}>
              <strong>{challenge.title}</strong>
              <StatusBadge tone={challenge.status === "Reussi" ? "success" : challenge.status === "Epargne" ? "warning" : "info"}>
                {challenge.status}
              </StatusBadge>
              <span>{challenge.progress}%</span>
              <span>{challenge.deposit} {challenge.currency}</span>
              <span>{challenge.source}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
