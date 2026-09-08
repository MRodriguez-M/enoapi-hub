<div align="center">

# 🌐 Eno API Hub

**The Developer-Friendly Directory with Built-in "API Translator"**

Discover, understand, and integrate public APIs without getting lost in technical jargon.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![CI](https://github.com/AlphaIsYour/03-enoapi-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/AlphaIsYour/03-enoapi-hub/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

---

## 💡 What is Eno API Hub?

Public APIs are the building blocks of modern web applications. However, traditional API lists are often just tables of links, and official API documentation is frequently dense, assuming prior architectural experience.

**Eno API Hub** solves this problem by pairing a curated directory of public APIs with an **"API Translator"** for each entry:
- 🎯 **What it actually does** in plain, simple English (or Indonesian).
- 📦 **What data it returns** so you know if it fits your project before writing code.
- 🛠️ **Project ideas ("Build With")** to spark creativity for hackathons and side projects.
- ⚠️ **When NOT to use it** to save you from architectural pitfalls.
- 🔑 **Authentication demystified** (No Auth, API Key, Bearer Token, OAuth2).

---

## ✨ Features

- **🧠 API Translator**: Human-readable explanations tailored for beginners and indie hackers.
- **⚡ Instant Filter & Search**: Filter by category, pricing (Free / Freemium / Paid), authentication method, and difficulty level.
- **📑 Code & Response Samples**: Realistic sample requests and responses for quick testing.
- **⭐ Local Bookmarks**: Save your favorite APIs with instant browser persistence (no account required).
- **🎨 Modern Dark/Light Theme**: Built with Tailwind CSS v4 and designed for developers.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Logic**: [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- **Node.js**: v20.x or later
- **npm** (v10+) or **pnpm** / **bun**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlphaIsYour/03-enoapi-hub.git
   cd 03-enoapi-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verification Commands

```bash
# Check TypeScript types
npx tsc --noEmit

# Run linter
npm run lint

# Run production build
npm run build
```

---

## 🗺️ Project Roadmap

- [x] Core schema & types definition (`types.ts`, `categories.ts`)
- [x] Custom state hooks (`useSearch.ts`, `useFavorites.ts` with `useSyncExternalStore`)
- [ ] Initial curated API dataset (`src/data/apis.ts`)
- [ ] Responsive UI components (Navbar, Hero, FilterBar, ApiCard grid)
- [ ] Interactive API Translator modal with copyable code snippets
- [ ] Automated testing suite (Vitest) & GitHub Actions CI
- [ ] Community-submitted APIs workflow

---

## 🤝 Contributing

Contributions are warmly welcomed! Whether you want to:
- 📝 **Add a new API** with translator notes to our catalog
- 🐛 **Report or fix a bug**
- 🎨 **Improve UI/UX and accessibility**
- 📖 **Enhance documentation**

Please read our **[Contributing Guide (CONTRIBUTING.md)](CONTRIBUTING.md)** to get started.

Check out open issues with the [`good first issue`](https://github.com/AlphaIsYour/03-enoapi-hub/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) label for beginner-friendly tasks!

---

## 👥 Contributors

Thank you to everyone who helps make Eno API Hub better for developers!

*(Contributors will be recognized here as community PRs are merged.)*

---

## ☕ Support

If you find **Eno API Hub** useful for your projects or learning journey, you can optionally support its ongoing development and curation:

<a href="https://buymeacoffee.com/enoalph" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="42" />
</a>

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
