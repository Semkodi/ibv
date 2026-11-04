# ⚡ IBV Engelhardt – Industrieberatung & Vertrieb

[![Live Demo](https://img.shields.io/badge/Live%20Demo-semkodi.github.io%2Fibv-ff9a3c?style=for-the-badge&logo=google-chrome&logoColor=white)](https://semkodi.github.io/ibv/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Developer](https://img.shields.io/badge/Entwickler-Semir%20Borogovac-27c93f?style=for-the-badge)](https://semirborogovac.de)

> Moderne Webplattform & interaktiver B2B-Produktkatalog für **IBV Engelhardt** (Industrievertrieb für Ferritkerne, Spulen, Drosseln und induktive Bauelemente aus Kassel). Kunden können technische Spezifikationen filtern und Bauteile direkt in einem interaktiven Anfragekorb bündeln.

---

## 🌐 Live-Anwendung & Links

- **Live-Demo:** [https://semkodi.github.io/ibv/](https://semkodi.github.io/ibv/)
- **Entwickler-Portfolio:** [https://semirborogovac.de](https://semirborogovac.de)

---

## 📖 Projektübersicht

IBV Engelhardt berät Ingenieure, Entwickler und Einkäufer in der Elektronik- und Automobilindustrie. Die Webanwendung ersetzt traditionelle PDF-Kataloge durch eine dynamische Benutzeroberfläche:

1. **Strukturierter Katalog:** Übersichtliche Kategorisierung (Ferritkerne, Drosseln, SMD-Spulen, Übertrager).
2. **Interaktiver B2B-Anfragekorb:** Kein klassischer E-Commerce Checkout, sondern ein schlanker Workflow zur Spezifikationsabfrage und Angebotsanforderung.
3. **Zentrales State Management:** Persistenter Anfragekorb über React Context mit Validierung.
4. **Technischer Support:** Integrierter FAQ-Bereich für Datenblätter, Kernmaterialien und Lieferzeiten.

---

## ✨ Features & Funktionen

- 🔍 **Dynamischer Bauteile-Katalog:** Schnelle Suche und Filterung nach Bauteil-Kategorien.
- 🛒 **Anfragekorb-Engine:** Sammeln von Mustern und Serienmengen mit direkter Anfrageübermittlung.
- 📱 **Responsive Design:** 100 % mobil- und tablet-optimierte Darstellung mit animiertem Mesh-Canvas.
- 🔐 **Admin-Bereich:** Authentifizierungs-Mock für Katalog- und Bestandsverwaltung.
- ⚖️ **DSGVO-Konform:** Lokale Assets, semantische HTML5-Struktur und barrierefreie Formulare.

---

## 🛠 Tech-Stack

| Bereich | Technologie | Beschreibung |
| :--- | :--- | :--- |
| **Frontend** | React 19 | Neueste React-Architektur mit performantem Rendering |
| **Typisierung** | TypeScript | Strikte Typensicherheit für Bauteil-DTOs und Formularzustände |
| **Routing** | React Router 7 | Client-seitiges Deep-Linking & SPA-Navigation |
| **State** | React Context API | Globales Zustandsmanagement für den Anfragekorb |
| **Design & UI** | Tailwind CSS & Lucide Icons | Modulares Utility-Styling und konsistente Vektor-Icons |
| **Build Tool** | Vite | Ultra-schnelle HMR und optimierte Produktions-Bundles |
| **Hosting** | GitHub Pages | Automatisierte Bereitstellung |

---

## 🏗️ Projektstruktur

```text
src/
├── components/          # Navbar, Footer, Layout & Modals
├── context/             # Globaler State (CartContext & Typen)
├── pages/
│   ├── Home.tsx         # Leistungs- & Unternehmensübersicht
│   ├── ProductsPage.tsx # Dynamischer Bauteil-Katalog
│   ├── CartPage.tsx     # B2B-Anfragekorb & Formular
│   ├── AdminLogin.tsx   # Login-Maske
│   ├── Impressum.tsx    # Rechtliches
│   └── Datenschutz.tsx  # DSGVO-Konformität
├── App.tsx              # Routen-Konfiguration
└── main.tsx             # Einstiegspunkt
```

---

## 🚀 Lokale Entwicklung

```bash
# 1. Repository klonen
git clone https://github.com/Semkodi/ibv.git
cd ibv

# 2. Abhängigkeiten installieren
npm install

# 3. Entwicklungsserver starten
npm run dev
```

---

## 👨‍💻 Entwickler

**Semir Borogovac**  
*Fachinformatiker für Anwendungsentwicklung (IHK Koblenz, Abschluss Januar 2027)*  
- **Website:** [semirborogovac.de](https://semirborogovac.de)  
- **GitHub:** [@Semkodi](https://github.com/Semkodi)  
