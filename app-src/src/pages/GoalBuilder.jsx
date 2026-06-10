import { CheckCircle2, ChevronRight, LockKeyhole, ShieldCheck, Target } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { goalTemplates } from "../data/mockData.js";

export function GoalBuilder() {
  const [templateId, setTemplateId] = useState("steps");
  const [target, setTarget] = useState(8000);
  const [duration, setDuration] = useState(30);
  const [deposit, setDeposit] = useState(120);
  const template = goalTemplates.find((item) => item.id === templateId) ?? goalTemplates[0];

  const riskLevel = useMemo(() => {
    if (deposit >= 150 || duration > 45) return "Engagement eleve";
    if (deposit >= 80) return "Equilibre";
    return "Doux";
  }, [deposit, duration]);

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Creation d'objectif"
        title="Construire un engagement clair avant paiement"
        description="Chaque parametre est visible avant validation: mesure, source de preuve, caution, consequence et regles d'arbitrage."
        actions={
          <button className="button button--primary" type="button">
            <CheckCircle2 size={17} aria-hidden="true" />
            Enregistrer le brouillon
          </button>
        }
      />

      <section className="builder-layout">
        <div className="builder-main">
          <article className="panel">
            <div className="panel-header">
              <div>
                <span className="section-label">1. Type d'objectif</span>
                <h3>Choisir une preuve compatible avec l'arbitrage</h3>
              </div>
            </div>
            <div className="template-grid">
              {goalTemplates.map((item) => (
                <button
                  className={item.id === templateId ? "template-card template-card--active" : "template-card"}
                  key={item.id}
                  onClick={() => {
                    setTemplateId(item.id);
                    setTarget(item.defaultTarget);
                    setDeposit(item.recommendedDeposit);
                  }}
                  type="button"
                >
                  <Target size={20} aria-hidden="true" />
                  <strong>{item.name}</strong>
                  <span>{item.metric}</span>
                </button>
              ))}
            </div>
          </article>

          <article className="panel">
            <span className="section-label">2. Regles du defi</span>
            <div className="control-grid">
              <label className="control-field">
                <span>Cible</span>
                <strong>{target.toLocaleString("fr-FR")} {template.metric}</strong>
                <input
                  max={template.id === "steps" ? 14000 : 30}
                  min={template.id === "steps" ? 3000 : 1}
                  onChange={(event) => setTarget(Number(event.target.value))}
                  step={template.id === "steps" ? 500 : 1}
                  type="range"
                  value={target}
                />
              </label>
              <label className="control-field">
                <span>Duree</span>
                <strong>{duration} jours</strong>
                <input
                  max="60"
                  min="7"
                  onChange={(event) => setDuration(Number(event.target.value))}
                  step="1"
                  type="range"
                  value={duration}
                />
              </label>
              <label className="control-field">
                <span>Caution</span>
                <strong>{deposit} EUR</strong>
                <input
                  max="250"
                  min="20"
                  onChange={(event) => setDeposit(Number(event.target.value))}
                  step="10"
                  type="range"
                  value={deposit}
                />
              </label>
            </div>
          </article>

          <article className="panel">
            <span className="section-label">3. Consentements necessaires</span>
            <div className="consent-list">
              <div>
                <ShieldCheck size={18} aria-hidden="true" />
                <strong>Lecture des donnees d'activite</strong>
                <span>{template.source}</span>
              </div>
              <div>
                <LockKeyhole size={18} aria-hidden="true" />
                <strong>Creation de caution partenaire</strong>
                <span>Aucune donnee bancaire brute stockee par PTC.</span>
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                <strong>Regle d'echec lisible</strong>
                <span>Transfert vers epargne longue si objectif manque.</span>
              </div>
            </div>
          </article>
        </div>

        <aside className="builder-summary">
          <div className="summary-card">
            <StatusBadge tone="info">{riskLevel}</StatusBadge>
            <h2>{template.name}</h2>
            <dl>
              <div>
                <dt>Cible</dt>
                <dd>{target.toLocaleString("fr-FR")} {template.metric}</dd>
              </div>
              <div>
                <dt>Duree</dt>
                <dd>{duration} jours</dd>
              </div>
              <div>
                <dt>Caution</dt>
                <dd>{deposit} EUR</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>{template.source}</dd>
              </div>
            </dl>
            <div className="outcome-box outcome-box--success">
              <strong>Si reussite</strong>
              <span>Caution restituee automatiquement.</span>
            </div>
            <div className="outcome-box outcome-box--warning">
              <strong>Si echec</strong>
              <span>Montant bloque vers epargne partenaire.</span>
            </div>
            <button className="button button--primary button--full" type="button">
              Valider et passer au paiement
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
