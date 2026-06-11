import { Landmark, LockKeyhole, ReceiptText, ShieldCheck, WalletCards } from "lucide-react";
import { MetricCard } from "../components/MetricCard.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { transactions } from "../data/mockData.js";

export function FundsSecurity() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Caution et securite"
        title="Rendre chaque mouvement financier lisible"
        description="PTC ne presente jamais la caution comme un solde interne: chaque montant est reference par statut, partenaire et destination."
        actions={
          <button className="button button--primary" type="button">
            <ReceiptText size={17} aria-hidden="true" />
            Exporter le releve
          </button>
        }
      />

      <section className="finance-grid">
        <article className="panel finance-visual">
          <div className="finance-lock">
            <LockKeyhole size={42} aria-hidden="true" />
          </div>
          <h2>120 EUR</h2>
          <p>Caution active referencee chez le partenaire financier.</p>
          <div className="finance-flow">
            <div>
              <WalletCards size={18} aria-hidden="true" />
              <span>Pay-in confirme</span>
            </div>
            <div>
              <Landmark size={18} aria-hidden="true" />
              <span>Wallet sequestre</span>
            </div>
            <div>
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Decision auditee</span>
            </div>
          </div>
        </article>

        <div className="metric-grid metric-grid--finance">
          <MetricCard label="Statut KYC" value="Verifie" detail="delegue au partenaire" tone="success" />
          <MetricCard label="Caution active" value="120 EUR" detail="routine 8 000 pas" tone="warning" />
          <MetricCard label="Restitue" value="90 EUR" detail="objectif precedent" tone="success" />
          <MetricCard label="Epargne" value="60 EUR" detail="echec transforme" tone="info" />
        </div>
      </section>

      <section className="content-grid content-grid--wide-right">
        <article className="panel">
          <span className="section-label">Regles de confiance</span>
          <div className="rule-list">
            <div>
              <strong>Pas de detention directe</strong>
              <span>PTC orchestre les etats mais ne conserve pas les fonds.</span>
            </div>
            <div>
              <strong>Idempotence obligatoire</strong>
              <span>Chaque pay-in, refund ou transfert possede une cle unique.</span>
            </div>
            <div>
              <strong>Consequence explicite</strong>
              <span>L'utilisateur confirme la regle d'echec avant paiement.</span>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <span className="section-label">Transactions</span>
              <h3>Historique financier</h3>
            </div>
            <StatusBadge tone="success">Sandbox saine</StatusBadge>
          </div>
          <div className="data-table data-table--transactions">
            <div className="data-row data-row--head">
              <span>Reference</span>
              <span>Operation</span>
              <span>Montant</span>
              <span>Statut</span>
            </div>
            {transactions.map((transaction) => {
              const statusLabels = {
                "Sequestre partenaire": "Séquestre",
                "Rembourse": "Remboursé",
                "Epargne longue": "Épargne",
              };
              return (
                <div className="data-row" key={transaction.id}>
                  <span>{transaction.id}</span>
                  <strong>{transaction.label}</strong>
                  <span>{transaction.amount}</span>
                  <StatusBadge tone={transaction.status === "Rembourse" ? "success" : transaction.status === "Epargne longue" ? "info" : "warning"}>
                    {statusLabels[transaction.status] ?? transaction.status}
                  </StatusBadge>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
