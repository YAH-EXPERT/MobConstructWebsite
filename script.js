// ----------------- I18N content (fr/en/mg) -----------------
const I18N = {
  fr: {
    brand: "MADAGASCAR DESIGNER",
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.pavage": "Pavage",
    "hero.title": "MADAGASCAR DESIGNER : Bâtir l'avenir, ensemble.",
    "hero.subtitle":
      "L'alliance de l'ingénierie, de l'architecture et des services pour des projets sans compromis.",
    "cta.explore": "Découvrir Nos Expertises",
    "cta.quote": "Demander un devis",
    "cta.contact": "Contact",
    "paving.title": "L'Art du Sol Extérieur : Notre Maîtrise en Pavage",
    "excellence.title": "L'Excellence MOB : Ingénierie & Services",
    "excellence.subtitle":
      "De la modélisation BIM à la finition de votre cour, nous gérons votre projet de A à Z.",
    "cta.title": "Notre Expertise à votre service",
    "cta.desc":
      "De la première esquisse à la réception des travaux, MADAGASCAR DESIGNER est votre partenaire unique.",
    "contact.title": "Contactez MADAGASCAR DESIGNER",
    "contact.subtitle":
      "Nous sommes prêts à transformer votre vision en réalité.",
    "contact.placeholder":
      "Section formulaire à insérer — Tél / Email / Adresse",
    "box.0.title": "Innovation",
    "box.0.desc": "Méthodes & tech modernes",
    "box.1.title": "Qualité",
    "box.1.desc": "Contrôles & garanties",
    "box.2.title": "Durabilité",
    "box.2.desc": "Matériaux responsables",
    "box.3.title": "Performance",
    "box.3.desc": "Respect des délais"
  },
  en: {
    brand: "MADAGASCAR DESIGNER",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.pavage": "Paving",
    "hero.title": "MADAGASCAR DESIGNER: Building the future, together.",
    "hero.subtitle":
      "The alliance of engineering, architecture and services for projects without compromise.",
    "cta.explore": "Discover our expertise",
    "cta.quote": "Request a quote",
    "cta.contact": "Contact",
    "paving.title": "Outdoor Flooring Art: Our Paving Mastery",
    "excellence.title": "MOB Excellence: Engineering & Services",
    "excellence.subtitle":
      "From BIM modeling to finishing your yard, we manage your project end-to-end.",
    "cta.title": "Our Expertise at Your Service",
    "cta.desc":
      "From the first sketch to handover, MADAGASCAR DESIGNER is your single partner.",
    "contact.title": "Contact MADAGASCAR DESIGNER",
    "contact.subtitle": "We're ready to turn your vision into reality.",
    "contact.placeholder": "Contact form coming — Phone / Email / Address",
    "box.0.title": "Innovation",
    "box.0.desc": "Modern methods & tech",
    "box.1.title": "Quality",
    "box.1.desc": "Checks & warranties",
    "box.2.title": "Sustainability",
    "box.2.desc": "Responsible materials",
    "box.3.title": "Performance",
    "box.3.desc": "On-time delivery"
  },
  mg: {
    brand: "MADAGASCAR DESIGNER",
    "nav.home": "Fandraisana",
    "nav.services": "Serivisy",
    "nav.pavage": "Pavage",
    "hero.title": "MADAGASCAR DESIGNER: Manorina ny ho avy miaraka.",
    "hero.subtitle":
      "Fifangaroan'ny injeniera, ara-rafitra sy serivisy ho an'ny tetikasa tsy misy fampitsaharana.",
    "cta.explore": "Jereo ny fahaizantsika",
    "cta.quote": "Mangataha teny",
    "cta.contact": "Mifandraisa",
    "paving.title": "Haikanto ny Rano ivelany: Fahaiza-manaonay amin'ny Pavage",
    "excellence.title": "MOB Excellence: Injeniera & Serivisy",
    "excellence.subtitle":
      "Avy amin'ny modely BIM ka hatramin'ny famaranana, miandraikitra ny tetikasa manontolo izahay.",
    "cta.title": "Ny fahaiza-manaonay ho anao",
    "cta.desc":
      "Manomboka amin'ny sary voalohany hatramin'ny fandraisana, MADAGASCAR DESIGNER no mpiara-miasa anao.",
    "contact.title": "Mifandraisa amin'ny MADAGASCAR DESIGNER",
    "contact.subtitle": "Vonona izahay hamadika ny hevitrao ho zava-misy.",
    "contact.placeholder":
      "Fizarana famenoana ho ampidirina — Telefaonina / Mailaka / Adiresy",
    "box.0.title": "Fampandrosoana",
    "box.0.desc": "Fomba & fampiasa maoderina",
    "box.1.title": "Kalitao",
    "box.1.desc": "Fanamarinana & antoka",
    "box.2.title": "Faharetana",
    "box.2.desc": "Fitaovana azo antoka",
    "box.3.title": "Fahombiazan'asa",
    "box.3.desc": "Fanaterana ara-potoana"
  }
};

// ----------------- Theme & language init -----------------
const STORAGE_THEME = "mob_theme";
const STORAGE_LANG = "mob_lang";

// default: dark theme for gold aesthetic
const defaultTheme = localStorage.getItem(STORAGE_THEME) || "dark";
const defaultLang = localStorage.getItem(STORAGE_LANG) || "fr";

document.documentElement.setAttribute("data-theme", defaultTheme);
setThemeToggleUI(defaultTheme);
setLangUI(defaultLang);
applyTranslations(defaultLang);

// ----------------- Theme toggle -----------------
document.getElementById("themeToggle")?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(STORAGE_THEME, next);
  setThemeToggleUI(next);
});
function setThemeToggleUI(theme) {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  // show moon when dark, sun when light (handled in CSS)
}

// ----------------- Language buttons -----------------
document.querySelectorAll(".lang-btn").forEach((b) => {
  b.addEventListener("click", () => {
    const lang = b.dataset.lang;
    applyTranslations(lang);
    setLangUI(lang);
    localStorage.setItem(STORAGE_LANG, lang);
  });
});
function setLangUI(lang) {
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

// ----------------- Apply translations -----------------
function applyTranslations(lang) {
  const dict = I18N[lang] || I18N["fr"];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

// ----------------- Render service cards (data + tilt) -----------------
const services = [
  {
    id: 0,
    keyTitle: "svc.0.title",
    keyDesc: "svc.0.desc",
    iconClass: "holographic-icon",
    type: "vr"
  },
  {
    id: 1,
    keyTitle: "svc.1.title",
    keyDesc: "svc.1.desc",
    iconClass: "holographic-icon",
    type: "plan"
  },
  {
    id: 2,
    keyTitle: "svc.2.title",
    keyDesc: "svc.2.desc",
    iconClass: "holographic-icon",
    type: "building"
  },
  {
    id: 3,
    keyTitle: "svc.3.title",
    keyDesc: "svc.3.desc",
    iconClass: "holographic-icon",
    type: "calendar"
  }
];

// provide localized service texts in I18N for convenience
I18N.fr["svc.0.title"] = "Modélisation BIM & VTM";
I18N.fr["svc.0.desc"] =
  "BIM pour une construction sans erreur. VTM pour immersion 3D.";
I18N.fr["svc.1.title"] = "Études Techniques & Plans";
I18N.fr["svc.1.desc"] = "Plans 2D/3D détaillés et dessins d'exécution.";
I18N.fr["svc.2.title"] = "Travaux Extérieurs & Pavage";
I18N.fr["svc.2.desc"] = "Pavage, autobloquant et finitions extérieures.";
I18N.fr["svc.3.title"] = "Gestion de Projet Totale";
I18N.fr["svc.3.desc"] =
  "Suivi chantier, coordination métiers et livraison clé-en-main.";
I18N.en["svc.0.title"] = "BIM Modeling & VTM";
I18N.en["svc.0.desc"] =
  "BIM for error-free construction. VTM for 3D immersion.";
I18N.en["svc.1.title"] = "Technical Studies & Plans";
I18N.en["svc.1.desc"] = "Detailed 2D/3D plans and execution drawings.";
I18N.en["svc.2.title"] = "Outdoor Works & Paving";
I18N.en["svc.2.desc"] = "Paving, interlocking stones and exterior finishes.";
I18N.en["svc.3.title"] = "Turnkey Project Management";
I18N.en["svc.3.desc"] = "Site supervision and turnkey delivery.";
I18N.mg["svc.0.title"] = "Modely BIM & VTM";
I18N.mg["svc.0.desc"] = "BIM ho an'ny fananganana tsy misy hadisoana.";
I18N.mg["svc.1.title"] = "Fianarana Teknika & Drafitra";
I18N.mg["svc.1.desc"] = "Drafitra 2D/3D feno sy sary fanatanterahana.";
I18N.mg["svc.2.title"] = "Asa ivelany & Pavage";
I18N.mg["svc.2.desc"] = "Pavage, autobloquant ary famaranana ivelany.";
I18N.mg["svc.3.title"] = "Fitantanana tetikasa feno";
I18N.mg["svc.3.desc"] = "Fanaraha-maso ny tetikasa sy fanaterana.";

function renderServiceCards(lang) {
  const container = document.getElementById("service-cards");
  if (!container) return;
  container.innerHTML = "";
  services.forEach((s) => {
    const title = I18N[lang][s.keyTitle] || I18N["fr"][s.keyTitle];
    const desc = I18N[lang][s.keyDesc] || I18N["fr"][s.keyDesc];
    const card = document.createElement("article");
    card.className = "mob-card";
    card.innerHTML = `
      <div class="holographic-icon" data-type="${s.type}">
        <div class="icon-3d">${renderIconSVG(s.type)}</div>
      </div>
      <h3>${title}</h3>
      <p>${desc}</p>
    `;
    attachTilt(card);
    container.appendChild(card);
  });
}
function renderIconSVG(type) {
  // Inline simple SVG markup (gold) to be crisp at any scale. Realistic-looking but performant.
  switch (type) {
    case "vr":
      return `<svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="40" height="20" rx="6" fill="none" stroke="${encodeURIComponent(
          "#FFD700"
        )}" stroke-width="2"/>
        <rect x="11" y="18" width="8" height="10" rx="2" fill="${encodeURIComponent(
          "#FFD700"
        )}" />
      </svg>`;
    case "plan":
      return `<svg width="44" height="44" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10 L42 20 L30 30 L6 20 Z" fill="none" stroke="${encodeURIComponent(
          "#FFD700"
        )}" stroke-width="2"/>
        <path d="M30 30 L42 36" stroke="${encodeURIComponent(
          "#FFD700"
        )}" stroke-width="2"/>
      </svg>`;
    case "building":
      return `<svg width="44" height="44" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="28" height="36" rx="2" fill="none" stroke="${encodeURIComponent(
          "#FFD700"
        )}" stroke-width="2"/>
        <rect x="14" y="12" width="4" height="6" fill="${encodeURIComponent(
          "#FFD700"
        )}"/>
        <rect x="22" y="12" width="4" height="6" fill="${encodeURIComponent(
          "#FFD700"
        )}"/>
        <rect x="30" y="12" width="4" height="6" fill="${encodeURIComponent(
          "#FFD700"
        )}"/>
      </svg>`;
    case "calendar":
      return `<svg width="44" height="44" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="3" fill="none" stroke="${encodeURIComponent(
          "#FFD700"
        )}" stroke-width="2"/>
        <rect x="12" y="6" width="6" height="6" fill="${encodeURIComponent(
          "#FFD700"
        )}" />
        <rect x="30" y="6" width="6" height="6" fill="${encodeURIComponent(
          "#FFD700"
        )}" />
      </svg>`;
    default:
      return "";
  }
}

// ----------------- Expertise marquee rendering -----------------
const expertiseData = [
  {
    titleKey: "svc.2.title",
    keywords: ["Précision", "Durabilité", "Esthétique"]
  },
  { titleKey: "svc.0.title", keywords: ["BIM", "VTM", "Immersion"] },
  { titleKey: "svc.1.title", keywords: ["Conception", "Plan", "Optimisation"] },
  { titleKey: "svc.3.title", keywords: ["Projet", "Délai", "Conforme"] }
];
function renderExpertise(lang) {
  const track = document.getElementById("expertise-track");
  if (!track) return;
  track.innerHTML = "";
  const cards = [...expertiseData, ...expertiseData]; // duplicate loop
  cards.forEach((item) => {
    const title = I18N[lang][item.titleKey] || item.titleKey;
    const kw = item.keywords.join(" • ");
    const el = document.createElement("div");
    el.className = "expertise-card";
    el.innerHTML = `<strong style="color:var(--gold)">${title}</strong><div style="color:var(--muted);margin-top:6px">${kw}</div>`;
    track.appendChild(el);
  });
}

// ----------------- Card tilt (3D) -----------------
function attachTilt(card) {
  // Only attach when device supports pointer fine
  if (window.matchMedia("(pointer: coarse)").matches) return;
  let rect, width, height;
  card.addEventListener("mousemove", (e) => {
    rect = card.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dx = (e.clientX - rect.left) / width - 0.5; // -0.5..0.5
    const dy = (e.clientY - rect.top) / height - 0.5;
    const tiltX = -dy * 8; // max degrees
    const tiltY = dx * 8;
    const scale = 1.02 + Math.min(Math.abs(dx), Math.abs(dy)) * 0.02;
    card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0) scale(${scale})`;
    card.style.boxShadow = `${-tiltY}px ${tiltX}px 40px rgba(0,0,0,0.18)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.boxShadow = "";
  });
  card.addEventListener("mouseenter", () => {
    card.style.transition =
      "transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms";
  });
}

// ----------------- Initialize UI -----------------
function init() {
  // initial render
  const lang = localStorage.getItem(STORAGE_LANG) || defaultLang;
  renderServiceCards(lang);
  renderExpertise(lang);

  // marquee pause on hover
  document.querySelectorAll(".expertise-track").forEach((track) => {
    track.addEventListener(
      "mouseenter",
      () => (track.style.animationPlayState = "paused")
    );
    track.addEventListener(
      "mouseleave",
      () => (track.style.animationPlayState = "running")
    );
  });

  // mobile menu button basic toggle (improvable)
  const mobileBtn = document.getElementById("mobileMenuBtn");
  mobileBtn?.addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    if (nav) nav.classList.toggle("open"); // style 'open' can be managed by CSS if desired
  });

  // reduce motion respect (stop continuous loops if user prefers reduced motion)
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("svg, .icon-3d, .logo-holo").forEach((el) => {
      el.style.animation = "none";
    });
  }
}
init();

// ----------------- small performance tips printed in console (developer friendly) -----------------
console.log(
  "MADAGASCAR DESIGNER UI loaded — theme:",
  localStorage.getItem(STORAGE_THEME) || defaultTheme,
  "lang:",
  localStorage.getItem(STORAGE_LANG) || defaultLang
);
