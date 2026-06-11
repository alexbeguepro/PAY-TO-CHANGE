import { useState, useEffect } from "react";
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  ShieldAlert, 
  Cpu, 
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { PageHeader } from "../components/PageHeader.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";

export function PitchDeck() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedRole, setSelectedRole] = useState("all");

  const slides = [
    {
      id: "intro",
      title: "PAY TO CHANGE (PTC) — Vision Stratégique",
      subtitle: "Transformer la procrastination en épargne forcée",
      role: "all",
      badge: "Général",
      accent: "var(--blue)",
      content: (
        <div className="slide-grid slide-grid--2col">
          <div className="slide-card slide-card--primary">
            <Sparkles size={32} className="slide-icon-accent" />
            <h3>Le Concept de Finance Comportementale</h3>
            <p>
              PTC n'est pas une application de punition, mais un <strong>catalyseur comportemental</strong>.
              En s'appuyant sur l'aversion à la perte, l'utilisateur engage une caution qui se convertit en <strong>épargne de long terme</strong> s'il échoue.
            </p>
            <div className="concept-tagline">
              « Toutes les excuses ont un prix. »
            </div>
          </div>
          <div className="slide-list-panel">
            <h4>Alignement par Profil Clé</h4>
            <ul className="slide-bullets">
              <li>
                <strong className="text-secondary">Sponsor :</strong> Modèle de commissionnement vertueux et réduction du Churn.
              </li>
              <li>
                <strong className="text-primary">Client :</strong> Expérience mobile fluide, valorisante et sécurisée.
              </li>
              <li>
                <strong className="text-blue">DSI/Tech :</strong> Conformité RGPD, API Tokenisées, et Cybersécurité prioritaire.
              </li>
              <li>
                <strong className="text-gold">Exploitant :</strong> Tracabilité totale, logs d'arbitrage et support facilité.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "sponsor",
      title: "Le Sponsor : Viabilité & ROI Financier",
      subtitle: "Garantir la performance commerciale et le contrôle des coûts",
      role: "sponsor",
      badge: "Sponsor / Finance",
      accent: "var(--green)",
      content: (
        <div className="slide-grid slide-grid--2col">
          <div className="slide-card">
            <TrendingUp size={28} className="text-success" />
            <h3>Rétention Accrue (x3)</h3>
            <p>
              L'engagement financier direct supprime l'abandon passif. L'utilisateur a un intérêt immédiat à interagir quotidiennement, faisant chuter le taux d'attrition (Churn).
            </p>
          </div>
          <div className="slide-card">
            <Users size={28} className="text-success" />
            <h3>Modèle « Échec Utile »</h3>
            <p>
              Les cautions non récupérées sont placées dans un compte d'épargne bloqué chez notre partenaire financier. PTC perçoit une commission sur les encours de gestion de cette épargne de long terme.
            </p>
          </div>
          <div className="slide-full-width">
            <h4>Indicateurs de Pilotage Financier (KPIs) :</h4>
            <div className="slide-metrics-row">
              <div className="slide-metric-box">
                <span className="slide-metric-num">3.5x</span>
                <span className="slide-metric-label">LTV Attendue</span>
              </div>
              <div className="slide-metric-box">
                <span className="slide-metric-num">-40%</span>
                <span className="slide-metric-label">Coût d'Acquisition (CAC)</span>
              </div>
              <div className="slide-metric-box">
                <span className="slide-metric-num">1.2M€</span>
                <span className="slide-metric-label">Objectif TVL Y1</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "client",
      title: "Le Client : Expérience Premium & Nudges",
      subtitle: "Créer un parcours utilisateur fluide, rassurant et motivant",
      role: "client",
      badge: "Client / UX",
      accent: "var(--blue)",
      content: (
        <div className="slide-grid slide-grid--2col">
          <div className="slide-card">
            <Sparkles size={28} className="text-blue" />
            <h3>Interface Dark-Mode Premium</h3>
            <p>
              Design spatial épuré (Plus Jakarta Sans, gradients fluides) pour enlever le côté anxiogène de la finance classique et valoriser chaque progrès.
            </p>
          </div>
          <div className="slide-card">
            <ShieldCheck size={28} className="text-blue" />
            <h3>Zéro Saisie Manuelle</h3>
            <p>
              Synchronisation directe en tâche de fond avec Apple Health & Google Fit. Le client n'a pas à prouver ses efforts manuellement, évitant toute friction.
            </p>
          </div>
          <div className="slide-full-width">
            <div className="info-callout">
              <strong>Pacte de Confiance Client :</strong>
              <p>
                Transparence totale des wallets. La caution n'est jamais perdue, elle est simplement mise de côté pour son avenir (épargne longue). Arbitrage équitable avec période de grâce intégrée.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "dsi",
      title: "La DSI/Tech : Sécurité & Conformité IT",
      subtitle: "Cybersécurité prioritaire, RGPD et architectures API robustes",
      role: "dsi",
      badge: "DSI / IT",
      accent: "var(--red)",
      content: (
        <div className="slide-grid slide-grid--2col">
          <div className="slide-card">
            <Cpu size={28} className="text-danger" />
            <h3>Architecture API Isolée</h3>
            <p>
              Les flux monétaires sont délégués à un partenaire BaaS (Stripe/MangoPay). Aucun stockage de données bancaires en base locale, réduisant la surface d'attaque.
            </p>
          </div>
          <div className="slide-card">
            <ShieldAlert size={28} className="text-danger" />
            <h3>Privacy By Design (RGPD)</h3>
            <p>
              Analyse d'Impact relative à la Protection des Données (AIPD/DPIA). Consentements granulaires, collecte limitée aux seuls résultats d'arbitrage.
            </p>
          </div>
          <div className="slide-full-width">
            <h4>Plan de Recette IT (Priorités de Test) :</h4>
            <div className="recette-timeline">
              <div className="timeline-node">
                <span className="node-num">Prio 1</span>
                <strong>Cybersécurité</strong>
                <span className="node-desc">Audit infra & failles OWASP</span>
              </div>
              <div className="timeline-node">
                <span className="node-num">Prio 2</span>
                <strong>Arbitrage</strong>
                <span className="node-desc">Logique mathématique</span>
              </div>
              <div className="timeline-node">
                <span className="node-num">Prio 3</span>
                <strong>UI & E2E</strong>
                <span className="node-desc">Scripts Playwright</span>
              </div>
              <div className="timeline-node">
                <span className="node-num">Prio 4</span>
                <strong>CRUD DB</strong>
                <span className="node-desc">Cohérence de base</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "exploitant",
      title: "L'Exploitant : Exploitation & RUN",
      subtitle: "Simplifier le support utilisateur et surveiller la plateforme",
      role: "exploitant",
      badge: "Exploitant / Ops",
      accent: "var(--gold)",
      content: (
        <div className="slide-grid slide-grid--2col">
          <div className="slide-card">
            <RotateCcw size={28} className="text-warning" />
            <h3>Console d'Arbitrage Rapide</h3>
            <p>
              Les agents de support peuvent geler une transaction ou forcer un remboursement manuel en 1 clic en cas de litige ou problème matériel.
            </p>
          </div>
          <div className="slide-card">
            <CheckCircle2 size={28} className="text-warning" />
            <h3>Journal de Preuves Lisible</h3>
            <p>
              Historique complet horodaté et inviolable pour retracer les données de pas lues, l'état de l'API de santé et les décisions prises automatiquement.
            </p>
          </div>
          <div className="slide-full-width">
            <h4>Indicateurs de Run Clés (OCRIs) :</h4>
            <ul className="run-metrics">
              <li>
                <strong>Taux de panne API Santé :</strong> Seuil d'alerte à {`>`} 1.5% d'erreurs d'appel.
              </li>
              <li>
                <strong>Temps de résolution des litiges :</strong> Cible inférieure à 4 heures via console dédiée.
              </li>
              <li>
                <strong>Taux d'arbitrages automatiques validés :</strong> Objectif {`>`} 99.8% sans intervention humaine.
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  // Filter slides based on role selection
  const filteredSlides = slides.filter(slide => selectedRole === "all" || slide.role === selectedRole || slide.role === "all");

  // Keep active index in bounds of filtered list
  const currentFilteredIndex = filteredSlides.findIndex(slide => slide.id === slides[activeSlide].id);
  const correctedIndex = currentFilteredIndex !== -1 ? currentFilteredIndex : 0;

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, selectedRole]);

  const navigateNext = () => {
    const nextFiltered = (correctedIndex + 1) % filteredSlides.length;
    const originalIndex = slides.findIndex(slide => slide.id === filteredSlides[nextFiltered].id);
    setActiveSlide(originalIndex);
  };

  const navigatePrev = () => {
    const prevFiltered = (correctedIndex - 1 + filteredSlides.length) % filteredSlides.length;
    const originalIndex = slides.findIndex(slide => slide.id === filteredSlides[prevFiltered].id);
    setActiveSlide(originalIndex);
  };

  const selectRoleFilter = (role) => {
    setSelectedRole(role);
    // Focus first slide matching or intro
    const matched = slides.findIndex(slide => slide.role === role);
    setActiveSlide(matched !== -1 ? matched : 0);
  };

  const currentSlideData = slides[activeSlide];

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Présentation interactive"
        title="Pitch Stratégique PTC"
        description="Diaporama interactif ciblant les 4 profils clés (Sponsor, Client, DSI/Tech, Exploitant). Sélectionnez un profil pour filtrer les arguments."
        actions={
          <div className="role-filters-group">
            <button 
              className={`filter-pill ${selectedRole === "all" ? "filter-pill--active" : ""}`}
              onClick={() => selectRoleFilter("all")}
            >
              Vue Globale
            </button>
            <button 
              className={`filter-pill ${selectedRole === "sponsor" ? "filter-pill--active text-success" : ""}`}
              onClick={() => selectRoleFilter("sponsor")}
            >
              Sponsor
            </button>
            <button 
              className={`filter-pill ${selectedRole === "client" ? "filter-pill--active text-blue" : ""}`}
              onClick={() => selectRoleFilter("client")}
            >
              Client
            </button>
            <button 
              className={`filter-pill ${selectedRole === "dsi" ? "filter-pill--active text-danger" : ""}`}
              onClick={() => selectRoleFilter("dsi")}
            >
              DSI / Tech
            </button>
            <button 
              className={`filter-pill ${selectedRole === "exploitant" ? "filter-pill--active text-warning" : ""}`}
              onClick={() => selectRoleFilter("exploitant")}
            >
              Exploitant
            </button>
          </div>
        }
      />

      <div className="slide-deck-container">
        {/* Slide Display Area */}
        <div 
          className="slide-viewport" 
          style={{ "--accent-color": currentSlideData.accent }}
        >
          <div className="slide-header">
            <div className="slide-badge-row">
              <StatusBadge tone={
                currentSlideData.role === "sponsor" ? "success" : 
                currentSlideData.role === "client" ? "info" : 
                currentSlideData.role === "dsi" ? "danger" : 
                currentSlideData.role === "exploitant" ? "warning" : "default"
              }>
                {currentSlideData.badge}
              </StatusBadge>
              <span className="slide-counter">
                Slide {correctedIndex + 1} / {filteredSlides.length}
              </span>
            </div>
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
          </div>

          <div className="slide-body-content">
            {currentSlideData.content}
          </div>
        </div>

        {/* Slide Controls */}
        <div className="slide-controls">
          <button 
            className="slide-btn"
            onClick={navigatePrev}
            aria-label="Diapositive précédente"
          >
            <ChevronLeft size={22} />
            <span>Précédent</span>
          </button>

          <div className="slide-dots">
            {filteredSlides.map((slide, idx) => {
              const isActive = slide.id === currentSlideData.id;
              return (
                <button
                  key={slide.id}
                  className={`slide-dot ${isActive ? "slide-dot--active" : ""}`}
                  onClick={() => {
                    const originalIdx = slides.findIndex(s => s.id === slide.id);
                    setActiveSlide(originalIdx);
                  }}
                  aria-label={`Aller à la diapositive ${idx + 1}`}
                />
              );
            })}
          </div>

          <button 
            className="slide-btn"
            onClick={navigateNext}
            aria-label="Diapositive suivante"
          >
            <span>Suivant</span>
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
      
      {/* Help Callout */}
      <div className="presentation-help">
        <p>
          <i className="fa-solid fa-keyboard" style={{ marginRight: "8px" }}></i>
          Astuce : Utilisez les touches <strong>flèche gauche</strong> et <strong>flèche droite</strong> de votre clavier pour naviguer dans la présentation.
        </p>
      </div>
    </div>
  );
}
