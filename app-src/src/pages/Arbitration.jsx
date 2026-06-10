import { AlertTriangle, CheckCircle2, FileSearch, Scale, ShieldAlert } from "lucide-react";
import { PageHeader } from "../components/PageHeader.jsx";
import { ProgressRing } from "../components/ProgressRing.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { arbitrationSignals } from "../data/mockData.js";

export function Arbitration() {
  const globalScore = Math.round(
    arbitrationSignals.reduce((total, item) => total + item.score, 0) / arbitrationSignals.length,
  );

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Arbitrage"
        title="Expliquer la decision avant de bouger l'argent"
        description="La page d'arbitrage rend visible la logique de validation, les signaux anti-fraude et les cas qui doivent passer en revue manuelle."
        actions={
          <button className="button button--secondary" type="button">
            <FileSearch size={17} aria-hidden="true" />
            Voir le journal
          </button>
        }
      />

      <section className="arbitration-layout">
        <article className="panel decision-panel">
          <StatusBadge tone="success">Decision probable: reussite</StatusBadge>
          <h2>Le defi est valide a 73%</h2>
          <p>
            La decision finale reste suspendue a la synchronisation du dernier jour. Aucun
            signal ne justifie un gel automatique de la caution.
          </p>
          <div className="decision-score">
            <ProgressRing value={globalScore} label="confiance" />
            <div>
              <strong>Politique d'arbitrage v0.4</strong>
              <span>Regle: moyenne journaliere au moins egale a 8 000 pas, grace de 1 jour, source Health Connect.</span>
            </div>
          </div>
        </article>

        <article className="panel review-panel">
          <span className="section-label">Sorties possibles</span>
          <div className="review-paths">
            <div>
              <CheckCircle2 size={18} aria-hidden="true" />
              <strong>Succes</strong>
              <span>Refund automatique de la caution.</span>
            </div>
            <div>
              <AlertTriangle size={18} aria-hidden="true" />
              <strong>Echec</strong>
              <span>Transfert vers epargne partenaire.</span>
            </div>
            <div>
              <ShieldAlert size={18} aria-hidden="true" />
              <strong>Revue manuelle</strong>
              <span>Gel temporaire si preuve insuffisante.</span>
            </div>
          </div>
        </article>
      </section>

      <section className="signal-grid">
        {arbitrationSignals.map((signal) => (
          <article className="signal-card" key={signal.title}>
            <div className="signal-card__top">
              <Scale size={18} aria-hidden="true" />
              <StatusBadge tone={signal.level === "OK" ? "success" : "warning"}>{signal.level}</StatusBadge>
            </div>
            <h3>{signal.title}</h3>
            <div className="signal-meter">
              <span style={{ width: `${signal.score}%` }}></span>
            </div>
            <strong>{signal.score}/100</strong>
            <p>{signal.detail}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <span className="section-label">Preuves retenues</span>
            <h3>Journal lisible pour utilisateur et support</h3>
          </div>
        </div>
        <div className="evidence-timeline">
          <div>
            <span>01</span>
            <strong>Consentement sante actif</strong>
            <p>Autorisation de lecture limitee aux pas quotidiens.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Agregats journaliers calcules</strong>
            <p>Pas de donnees fines conservees hors besoin d'arbitrage.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Controle anti-fraude</strong>
            <p>Verification valeurs extremes, source et timing de synchronisation.</p>
          </div>
          <div>
            <span>04</span>
            <strong>Action financiere</strong>
            <p>Refund ou transfert uniquement apres decision finale journalisee.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
