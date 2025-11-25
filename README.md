# Universe - Freelance App

Universe je moderní all-in-one aplikace pro freelancery, která kombinuje správu úkolů, sledování času a fakturaci v jednom elegantním rozhraní.

🌐 **Live Demo**: [https://liqnerd.github.io/Universe_AG/](https://liqnerd.github.io/Universe_AG/)

## 📋 O Projektu

Universe je navržen tak, aby freelancerům usnadnil správu jejich podnikání. Spojuje řízení projektů, timetracking a fakturaci do jedné intuitivní aplikace, takže už nikdy neztratíte žádné zúčtovatelné hodiny.

### Klíčové Funkce

- ✅ **Správa úkolů** - Organizujte své projekty a úkoly
- ⏱️ **Sledování času** - Automatické trackování pracovní doby s offline podporou
- 💰 **Fakturace** - Jednoduché vytváření a správa faktur
- 📊 **Export dat** - PDF, CSV a XLSX formáty pro účetní
- 🔒 **Accountant Mode** - Bezpečný read-only přístup pro účetní
- 📱 **Offline režim** - Kritické funkce fungují i bez internetu
- 🔄 **Smart Sync** - Automatická synchronizace po obnovení připojení

## 🛠️ Technologie

### Frontend Stack

- **[React 19.2.0](https://react.dev/)** - Moderní UI knihovna s podporou React Compiler
- **[Vite 7.2.2](https://vitejs.dev/)** - Rychlý build nástroj a dev server
- **[Tailwind CSS 4.1.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12.23.24](https://www.framer.com/motion/)** - Pokročilé animace a transitions

### UI & Vizuální Efekty

- **[Lucide React](https://lucide.dev/)** - Moderní ikonová knihovna
- **[OGL](https://github.com/oframe/ogl)** - Lehká WebGL knihovna pro 3D efekty
- **Custom Design System** - Vlastní barevná paleta s neon efekty
  - Primary: `#d2f558` (Accent Green)
  - Background: `#1d1d1e` (Dark)
  - Surface: `#2a2a2b`

### Komunikace & Integrace

- **[EmailJS](https://www.emailjs.com/)** - Serverless email služba pro waitlist

### Development Tools

- **[ESLint 9.39.1](https://eslint.org/)** - Linting a code quality
- **[PostCSS](https://postcss.org/)** - CSS transformace a optimalizace
- **[Babel Plugin React Compiler](https://react.dev/learn/react-compiler)** - Automatická optimalizace komponent

## 📁 Struktura Projektu

```
Universe_AG/
├── public/
│   ├── universe-logo.svg          # Favicon (zelené "U" logo)
│   └── .nojekyll                   # GitHub Pages config
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── animated-hero.jsx   # Hero sekce s emailJS formulářem
│   │   │   ├── dashboard-animation.jsx # Interaktivní dashboard preview
│   │   │   └── ScrollReveal.jsx    # Scroll animace
│   │   ├── FAQ.jsx                 # Často kladené otázky
│   │   ├── Features.jsx            # Přehled funkcí
│   │   ├── Footer.jsx              # Patička s waitlist formem
│   │   ├── Hero.jsx                # Hlavní hero komponenta
│   │   ├── HowItWorks.jsx          # Jak to funguje sekce
│   │   └── Navbar.jsx              # Navigační lišta s tubelight efektem
│   ├── lib/
│   │   └── utils.js                # Utility funkce (cn)
│   ├── App.jsx                     # Hlavní komponenta aplikace
│   ├── App.css                     # Globální styly
│   └── main.jsx                    # Entry point
├── index.html                      # HTML šablona
├── tailwind.config.js              # Tailwind konfigurace
├── vite.config.js                  # Vite konfigurace
└── package.json                    # Dependencies
```

## 🚀 Instalace a Spuštění

### Předpoklady

- Node.js (verze 18 nebo vyšší)
- npm nebo yarn

### Lokální Vývoj

```bash
# Naklonování repozitáře
git clone https://github.com/liqnerd/Universe_AG.git
cd Universe_AG

# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev
```

Aplikace poběží na `http://localhost:5173`

### Build pro Produkci

```bash
# Build aplikace
npm run build

# Preview produkční build
npm run preview
```

## 🌐 Deployment

Projekt je automaticky deployován na GitHub Pages pomocí `gh-pages`.

```bash
# Deploy na GitHub Pages
npm run deploy
```

### Deployment Proces

1. `npm run predeploy` - Automaticky spustí build
2. `npm run build` - Vytvoří produkční build do složky `dist/`
3. `gh-pages -d dist` - Nahraje obsah na `gh-pages` branch

**Homepage URL**: `https://liqnerd.github.io/Universe_AG`

## 🎨 Design System

### Barvy

```javascript
colors: {
  background: '#1d1d1e',
  accent: '#d2f558',           // Hlavní zelená
  'accent-hover': '#c3e645',
  text: '#ffffff',
  surface: '#2a2a2b',
  'surface-hover': '#333334',
}
```

### Stíny

```javascript
boxShadow: {
  'neon': '0 0 20px rgba(210, 245, 88, 0.4)',
  'neon-hover': '0 0 30px rgba(210, 245, 88, 0.6)',
}
```

### Animace

- Tubelight navbar s aktivním tab efektem
- Scroll-triggered reveal animace
- Rotující hero nadpisy
- Dashboard karty s hover efekty
- Progress bar s glow efektem

## 📧 EmailJS Konfigurace

Pro funkční waitlist je potřeba nastavit EmailJS:

1. Vytvořte účet na [EmailJS](https://www.emailjs.com/)
2. Nastavte email service
3. Vytvořte email template s těmito parametry:
   - `user_email` - Email uživatele
   - `to_email` - Cílový email
   - `message` - Zpráva
4. Aktualizujte credentials v `src/components/ui/animated-hero.jsx` a `src/components/Footer.jsx`

## 📝 FAQ Content Management

FAQ sekce je definována v `src/components/FAQ.jsx` jako pole objektů:

```javascript
const faqs = [
  {
    question: "Váš dotaz",
    answer: "Vaše odpověď"
  }
]
```

## 🔧 Customizace

### Změna Barev

Upravte `tailwind.config.js`:

```javascript
extend: {
  colors: {
    accent: '#your-color',
    background: '#your-background',
  }
}
```

### Přidání Nové Komponenty

1. Vytvořte komponentu v `src/components/`
2. Importujte do `App.jsx`
3. Použijte design system třídy z Tailwind

## 📊 Performance

- ⚡ Vite pro rychlý HMR (Hot Module Replacement)
- 🎯 Code splitting
- 📦 Optimalizovaný bundle (~422 KB JS, ~33 KB CSS)
- 🖼️ SVG icons místo fontů
- 🔄 React Compiler pro automatickou optimalizaci

## 🐛 Známé Problémy

- Favicon může vyžadovat hard refresh (Ctrl+F5) kvůli browser cache
- EmailJS vyžaduje veřejný API klíč (bezpečné pro frontend)

## 📄 Licence

Tento projekt je soukromý a slouží jako demo aplikace.

## 👥 Autoři

- **Lucie Hegerová** 

## 🙏 Poděkování

- Design inspirace: Moderní SaaS landing pages
- Icons: [Lucide](https://lucide.dev/)
- Fonts: Plus Jakarta Sans (Google Fonts)
- Hosting: GitHub Pages

---

**Vytvořeno s ❤️ pro freelancery**
