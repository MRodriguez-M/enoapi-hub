# Contributing to Eno API Hub

First off, thank you for considering contributing to **Eno API Hub**! 🎉 

Our goal is to make third-party APIs approachable and understandable for every developer, from complete beginners building their first side project to seasoned engineers at hackathons.

This guide will help you get started quickly and smoothly.

---

## 🧭 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please be welcoming, respectful, and constructive in all interactions.

---

## 🎯 Ways to Contribute

You don't have to be a senior developer to contribute! Here are several ways you can help:

1. **Add a New API**: Curate a public API you love and write helpful "API Translator" notes for it.
2. **Improve Translations**: Make existing API explanations even clearer or add creative "Build With" ideas.
3. **Fix Bugs**: Find edge cases in search, state handling, or UI responsiveness.
4. **Enhance UI & Accessibility**: Improve contrast, keyboard navigation, or animations.
5. **Add Tests**: Write unit tests for utility functions and custom hooks.

---

## 💻 Local Development Setup

### 1. Fork and Clone

1. Fork the repository on GitHub: [https://github.com/AlphaIsYour/03-enoapi-hub](https://github.com/AlphaIsYour/03-enoapi-hub)
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/03-enoapi-hub.git
   cd 03-enoapi-hub
   ```
3. Set the upstream remote:
   ```bash
   git remote add upstream https://github.com/AlphaIsYour/03-enoapi-hub.git
   ```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌿 Git & Branching Workflow

1. Always branch off the latest `master` branch:
   ```bash
   git checkout master
   git pull upstream master
   git checkout -b <branch-type>/<short-description>
   ```

2. **Branch naming conventions:**
   - `feat/` — New feature or UI component (e.g., `feat/search-debounce`)
   - `data/` — Adding or updating API entries (e.g., `data/add-pokeapi`)
   - `fix/` — Bug fixes (e.g., `fix/favorites-persistence`)
   - `docs/` — Documentation updates (e.g., `docs/readme-clarification`)
   - `test/` — Adding or improving tests (e.g., `test/utils-unit-tests`)

---

## 📝 How to Add a New API Entry

Adding APIs is one of the best ways to contribute! Follow these guidelines:

1. Open `src/data/apis.ts`.
2. Add a new object adhering to the `ApiEntry` interface:

```typescript
{
  id: 'unique-slug-identifier', // e.g. 'open-weather'
  name: 'OpenWeatherMap',
  description: 'A brief 1-2 sentence overview of the API.',
  longDescription: 'Detailed explanation of what the API provides and its core features.',
  category: 'weather', // must match an id from src/data/categories.ts
  tags: ['weather', 'forecast', 'climate', 'geolocation'],
  auth: 'api-key', // 'none' | 'api-key' | 'oauth2' | 'bearer' | 'basic'
  pricing: 'freemium', // 'free' | 'freemium' | 'paid'
  https: true,
  cors: 'yes', // 'yes' | 'no' | 'unknown'
  docsUrl: 'https://openweathermap.org/api',
  website: 'https://openweathermap.org',
  difficulty: 'easy', // 'easy' | 'moderate' | 'advanced'
  useCases: [
    'Building weather widget for personal dashboards',
    'Outfit recommendation app based on rain forecast',
  ],
  sampleRequest: {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid={YOUR_API_KEY}',
  },
  sampleResponse: {
    status: 200,
    body: {
      weather: [{ main: 'Clear', description: 'clear sky' }],
      main: { temp: 301.2, humidity: 65 },
    },
  },
  // 🌟 The core differentiator of Eno API Hub:
  apiTranslator: {
    whatItDoes: 'Gives you real-time weather and forecast data for any city on Earth.',
    dataReturned: 'Temperature, humidity, wind speed, weather conditions (sunny/rainy), and cloudiness.',
    buildWith: [
      'An umbrella reminder bot that pings you on Telegram if it is going to rain.',
      'A travel planning app that warns you about bad weather.',
    ],
    whenNotToUse: 'Do not use this for minute-by-minute radar tracking for aviation without a paid enterprise plan.',
    authExplained: 'Requires signing up for a free account to receive an API Key, passed as the "appid" query parameter.',
    scenarios: [
      'User types a city name -> App calls this API -> Renders current temperature and rain icon.',
    ],
  },
}
```

### Quality Checklist for New APIs:
- [ ] The API is actively maintained and publicly accessible.
- [ ] The `category` exists in `src/data/categories.ts`.
- [ ] The `apiTranslator` section contains clear, beginner-friendly explanations.
- [ ] No personal API keys or secrets are committed in sample requests!

---

## 🔍 Pre-Commit Verification

Before submitting a Pull Request, ensure that all checks pass:

```bash
# 1. Type check
npx tsc --noEmit

# 2. Lint check
npm run lint

# 3. Production build test
npm run build
```

---

## 🚀 Submitting a Pull Request (PR)

1. Commit your changes with clear, descriptive commit messages (e.g., `feat: add OpenWeatherMap to weather category`).
2. Push your branch to your fork:
   ```bash
   git push origin <branch-type>/<short-description>
   ```
3. Open a Pull Request against the `master` branch of `AlphaIsYour/03-enoapi-hub`.
4. Fill out the PR template with context, screenshots (if UI changes are made), and verification steps.

---

## ❓ Need Help?

If you have questions, encounter problems while setting up, or want to discuss a new idea before coding, please feel free to:
- Open an **Issue** describing what you're trying to do.
- Join discussions or ask for guidance directly on your Pull Request.

We are here to help you succeed in making your contribution! 🚀
