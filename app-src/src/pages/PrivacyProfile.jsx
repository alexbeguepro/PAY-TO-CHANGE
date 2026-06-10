import { Download, HeartPulse, LockKeyhole, Power, ShieldCheck, UserRound } from "lucide-react";
import { PageHeader } from "../components/PageHeader.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { healthPermissions, user } from "../data/mockData.js";

export function PrivacyProfile() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Profil et donnees"
        title="Donner le controle sans casser l'experience"
        description="PTC doit rester strict: consentements separes, donnees minimales, export, suppression et permissions de sante comprehensibles."
        actions={
          <>
            <button className="button button--secondary" type="button">
              <Download size={17} aria-hidden="true" />
              Exporter
            </button>
            <button className="button button--danger" type="button">
              <Power size={17} aria-hidden="true" />
              Supprimer
            </button>
          </>
        }
      />

      <section className="profile-layout">
        <article className="panel profile-card">
          <div className="avatar-large">
            <UserRound size={34} aria-hidden="true" />
          </div>
          <h2>{user.name}</h2>
          <p>{user.plan}</p>
          <div className="profile-status">
            <StatusBadge tone="success">KYC {user.kyc}</StatusBadge>
            <StatusBadge tone="info">{user.timezone}</StatusBadge>
          </div>
        </article>

        <article className="panel">
          <span className="section-label">Consentements</span>
          <div className="consent-table">
            <div>
              <ShieldCheck size={18} aria-hidden="true" />
              <strong>CGU v2026.06</strong>
              <StatusBadge tone="success">Accepte</StatusBadge>
            </div>
            <div>
              <LockKeyhole size={18} aria-hidden="true" />
              <strong>Politique de confidentialite</strong>
              <StatusBadge tone="success">Accepte</StatusBadge>
            </div>
            <div>
              <HeartPulse size={18} aria-hidden="true" />
              <strong>Donnees d'activite</strong>
              <StatusBadge tone="success">Specifique</StatusBadge>
            </div>
          </div>
        </article>
      </section>

      <section className="content-grid content-grid--wide-left">
        <article className="panel">
          <div className="panel-header">
            <div>
              <span className="section-label">Permissions sante</span>
              <h3>{user.healthSource}</h3>
            </div>
            <StatusBadge tone="success">Connecte</StatusBadge>
          </div>
          <div className="permission-list">
            {healthPermissions.map((permission) => (
              <div className="permission-item" key={permission.label}>
                <div>
                  <strong>{permission.label}</strong>
                  <span>{permission.purpose}</span>
                </div>
                <button
                  className={permission.enabled ? "toggle toggle--on" : "toggle"}
                  type="button"
                  aria-label={`${permission.label}: ${permission.enabled ? "active" : "inactive"}`}
                >
                  <span></span>
                </button>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="section-label">Controle utilisateur</span>
          <div className="rule-list">
            <div>
              <strong>Exporter les donnees</strong>
              <span>Profil, consentements, defis, transactions referencees et arbitrages.</span>
            </div>
            <div>
              <strong>Revoquer la sante</strong>
              <span>Les defis actifs demandent une source valide avant de continuer.</span>
            </div>
            <div>
              <strong>Supprimer le compte</strong>
              <span>Conservation limitee aux obligations legales et traces financieres.</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
