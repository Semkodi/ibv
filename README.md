# ⚡ IBV Engelhardt – Industrieberatung & Vertrieb

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

Webplattform für **IBV Engelhardt**, einen Industrievertrieb für **Ferritkerne, Spulen, Drosseln und Übertrager** aus Kassel. Kunden können den Produktkatalog durchsuchen und Produkte direkt in einen Anfragekorb legen.

🌐 **Live-Demo:** https://semkodi.github.io/ibv/

Entwickelt von **Semir Borogovac** als praxisnahes Webprojekt für einen realen Auftraggeber.

## 🖼️ Projektvorschau

<!-- TODO: Screenshot einfügen: screenshots/startseite.png -->

## 📖 Projektübersicht

IBV Engelhardt unterstützt Entwickler, Einkäufer und Unternehmen in ganz Deutschland mit praxisnahen Lösungen rund um induktive Bauteile. Die Website bündelt Produktinformationen, beantwortet häufige technische und beschaffungsbezogene Fragen und macht Anfragen unkompliziert: Produkte auswählen, in den Anfragekorb legen, absenden.

## ✨ Features

- 🏠 Startseite mit Unternehmens- und Leistungsübersicht
- 📦 Produktkatalog (Ferritkerne, Spulen, Drosseln, Übertrager)
- 🛒 Anfragekorb – Produkte sammeln und als Anfrage senden
- ❓ FAQ zu Produkten, Einsatzbereichen und Service
- 🔐 Admin-Login
- ⚖️ Impressum & Datenschutz
- 📱 Responsives Design mit animiertem Mesh-Hintergrund

## 🛠 Tech-Stack

| Bereich | Technologie |
|----------|------------|
| Frontend | React 19 |
| Sprache | TypeScript |
| Routing | React Router 7 |
| State | React Context (Anfragekorb) |
| Icons | Lucide React |
| Build Tool | Vite |
| Deployment | GitHub Pages |

## 🏗️ Projektstruktur

```text
src/
├── components/      # Navbar, Footer, UI-Komponenten
├── context/         # Globaler State (Anfragekorb)
├── pages/
│   ├── Home.tsx
│   ├── ProductsPage.tsx   # Produktkatalog
│   ├── CartPage.tsx       # Anfragekorb (/anfrage)
│   ├── AdminLogin.tsx
│   ├── Impressum.tsx
│   └── Datenschutz.tsx
├── App.tsx          # Routing
└── main.tsx
```

## ⚡ Herausforderungen

Ein Anfrage-Workflow ohne klassischen Shop: Statt Checkout und Bezahlung sammeln Kunden Produkte in einem Anfragekorb, der als unverbindliche Anfrage an den Vertrieb geht. Der Korb-State wird zentral über React Context verwaltet.

## 🚀 Lokale Entwicklung

```bash
git clone https://github.com/Semkodi/ibv.git
cd ibv
npm install
npm run dev
```

## 👨‍💻 Entwickler

**Semir Borogovac** – Umschulung zum Fachinformatiker für Anwendungsentwicklung (FIAE)
