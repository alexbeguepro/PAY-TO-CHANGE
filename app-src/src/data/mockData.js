export const user = {
  name: "Camille Martin",
  plan: "Beta confiance",
  kyc: "Verifie",
  healthSource: "Health Connect",
  timezone: "Europe/Paris",
};

export const principles = [
  {
    title: "Consentement explicite",
    text: "Aucune donnee d'activite n'est lue sans finalite claire et accord separe.",
  },
  {
    title: "Argent tracable",
    text: "La caution reste referencee chez le partenaire financier, avec statut lisible.",
  },
  {
    title: "Arbitrage explicable",
    text: "Chaque decision repose sur des preuves, une regle versionnee et un historique.",
  },
  {
    title: "Echec utile",
    text: "L'objectif manque n'est pas une punition: il declenche une epargne longue.",
  },
];

export const activeChallenge = {
  id: "ch_2026_04",
  title: "Routine 8 000 pas",
  type: "Pas quotidiens",
  status: "Actif",
  progress: 73,
  target: 8000,
  currentAverage: 7480,
  deposit: 120,
  currency: "EUR",
  startDate: "01 juin 2026",
  endDate: "30 juin 2026",
  remainingDays: 12,
  source: "Health Connect",
  risk: "Faible",
  nextSync: "Aujourd'hui 20:30",
};

export const challenges = [
  activeChallenge,
  {
    id: "ch_2026_03",
    title: "Preparation 10 km",
    type: "Course",
    status: "Reussi",
    progress: 100,
    target: 3,
    currentAverage: 3,
    deposit: 90,
    currency: "EUR",
    startDate: "03 mai 2026",
    endDate: "31 mai 2026",
    remainingDays: 0,
    source: "HealthKit",
    risk: "Clos",
    nextSync: "Termine",
  },
  {
    id: "ch_2026_02",
    title: "Sommeil regulier",
    type: "Routine",
    status: "Epargne",
    progress: 64,
    target: 22,
    currentAverage: 14,
    deposit: 60,
    currency: "EUR",
    startDate: "01 avril 2026",
    endDate: "30 avril 2026",
    remainingDays: 0,
    source: "Saisie verifiee",
    risk: "Clos",
    nextSync: "Termine",
  },
];

export const dailyProgress = [
  { day: "Lun", value: 8120, status: "valid" },
  { day: "Mar", value: 7560, status: "valid" },
  { day: "Mer", value: 9210, status: "valid" },
  { day: "Jeu", value: 6880, status: "warn" },
  { day: "Ven", value: 8340, status: "valid" },
  { day: "Sam", value: 4920, status: "risk" },
  { day: "Dim", value: 7900, status: "pending" },
];

export const transactions = [
  {
    id: "TX-83201",
    label: "Caution verrouillee",
    challenge: "Routine 8 000 pas",
    amount: "120,00 EUR",
    status: "Sequestre partenaire",
    date: "01/06/2026",
  },
  {
    id: "TX-82954",
    label: "Restitution caution",
    challenge: "Preparation 10 km",
    amount: "90,00 EUR",
    status: "Rembourse",
    date: "31/05/2026",
  },
  {
    id: "TX-81328",
    label: "Transfert epargne",
    challenge: "Sommeil regulier",
    amount: "60,00 EUR",
    status: "Epargne longue",
    date: "30/04/2026",
  },
];

export const arbitrationSignals = [
  {
    title: "Coherence temporelle",
    level: "OK",
    score: 96,
    detail: "Les donnees arrivent dans les fenetres attendues.",
  },
  {
    title: "Valeurs extremes",
    level: "OK",
    score: 92,
    detail: "Aucun pic incompatible avec l'historique recent.",
  },
  {
    title: "Source autorisee",
    level: "OK",
    score: 100,
    detail: "Health Connect reste la source active du defi.",
  },
  {
    title: "Trous de donnees",
    level: "A surveiller",
    score: 78,
    detail: "Une journee attend encore la synchronisation finale.",
  },
];

export const healthPermissions = [
  { label: "Pas quotidiens", purpose: "Verifier les objectifs d'activite", enabled: true },
  { label: "Distance", purpose: "Controler les defis course et marche", enabled: true },
  { label: "Sessions sportives", purpose: "Valider les objectifs de frequence", enabled: false },
];

export const goalTemplates = [
  {
    id: "steps",
    name: "Pas quotidiens",
    metric: "pas / jour",
    defaultTarget: 8000,
    recommendedDeposit: 120,
    source: "Health Connect ou HealthKit",
  },
  {
    id: "run",
    name: "Course hebdomadaire",
    metric: "sessions / semaine",
    defaultTarget: 3,
    recommendedDeposit: 90,
    source: "HealthKit, Health Connect",
  },
  {
    id: "habit",
    name: "Routine personnelle",
    metric: "jours valides",
    defaultTarget: 22,
    recommendedDeposit: 60,
    source: "Preuve utilisateur + revue",
  },
];

export const productStatus = [
  { label: "Paiement", value: "Sain", tone: "success" },
  { label: "Synchronisation sante", value: "A jour", tone: "success" },
  { label: "Arbitrage", value: "1 point ouvert", tone: "warning" },
  { label: "Conformite", value: "DPIA en cours", tone: "info" },
];
