import { ApiEntry } from './types';

export const apis: ApiEntry[] = [
  {
    id: 'pokeapi',
    name: 'PokéAPI',
    description: 'A comprehensive RESTful Pokémon API containing data on all Pokémon, moves, abilities, and games.',
    longDescription:
      'PokéAPI provides clean, structured JSON data for all things Pokémon: stats, evolution chains, types, sprites, moves, and game versions. Perfect for learning frontend development and building hobby projects.',
    category: 'education',
    tags: ['pokemon', 'gaming', 'anime', 'fun', 'learning'],
    auth: 'none',
    pricing: 'free',
    https: true,
    cors: 'yes',
    docsUrl: 'https://pokeapi.co/docs/v2',
    website: 'https://pokeapi.co',
    difficulty: 'easy',
    useCases: [
      'Building a Pokédex web or mobile app',
      'Creating interactive battle damage calculators',
      'Learning API fetching and async state handling in modern frameworks',
    ],
    sampleRequest: {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
    },
    sampleResponse: {
      status: 200,
      body: {
        id: 25,
        name: 'pikachu',
        base_experience: 112,
        height: 4,
        weight: 60,
        types: [{ slot: 1, type: { name: 'electric' } }],
      },
    },
    apiTranslator: {
      whatItDoes: 'Gives you all the details about any Pokémon: its name, stats, abilities, sprite images, and evolutionary family.',
      dataReturned: 'JSON object with Pokémon attributes, nested lists of moves, abilities, type matchups, and official artwork image URLs.',
      buildWith: [
        'A full-featured Pokédex app with search, type filters, and sound effects.',
        'A "Who is that Pokémon?" guessing quiz game for Discord bots or web apps.',
      ],
      whenNotToUse: 'Do not use this for commercial Nintendo-licensed products without checking copyright guidelines.',
      authExplained: 'No authentication needed! You can fetch directly from your frontend browser or backend without any API key.',
      scenarios: [
        'User searches "Charizard" -> App sends GET request -> Displays sprite image, base HP, attack stat, and type badges.',
      ],
    },
  },
  {
    id: 'open-weather',
    name: 'OpenWeatherMap',
    description: 'Current weather data, minute-by-minute forecasts, and historical climate observations worldwide.',
    longDescription:
      'OpenWeatherMap provides real-time atmospheric data for over 200,000 cities worldwide, including temperature, humidity, wind speeds, UV index, and weather condition icons.',
    category: 'weather',
    tags: ['weather', 'forecast', 'climate', 'temperature', 'geolocation'],
    auth: 'api-key',
    pricing: 'freemium',
    https: true,
    cors: 'yes',
    docsUrl: 'https://openweathermap.org/api',
    website: 'https://openweathermap.org',
    difficulty: 'easy',
    useCases: [
      'Personal dashboard weather widgets',
      'Automated morning routine notifications based on rain prediction',
      'Outdoor event planning assistants',
    ],
    sampleRequest: {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=Jakarta&units=metric&appid={YOUR_API_KEY}',
    },
    sampleResponse: {
      status: 200,
      body: {
        name: 'Jakarta',
        main: { temp: 31.4, humidity: 72, feels_like: 36.8 },
        weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      },
    },
    apiTranslator: {
      whatItDoes: 'Tells your application the current weather conditions, temperatures, and future forecasts for any city or coordinate.',
      dataReturned: 'Current Celsius/Fahrenheit degrees, humidity percentage, weather condition descriptions, and icon codes for UI display.',
      buildWith: [
        'An "Umbrella Reminder" Telegram bot that alerts you at 7 AM if rain is expected in your city.',
        'Dynamic website themes that change background wallpaper based on local weather (e.g. raining animation when rainy).',
      ],
      whenNotToUse: 'Do not use the free tier for high-frequency polling (limit is 60 calls/minute; caching is recommended).',
      authExplained: 'Requires signing up for a free account. Pass your assigned key as the "appid" query parameter in every request.',
      scenarios: [
        'User grants browser location permission -> App fetches coordinates -> Displays local temperature and weather icon.',
      ],
    },
  },
  {
    id: 'coingecko',
    name: 'CoinGecko API',
    description: 'Live crypto prices, market cap, trading volume, historical chart trends, and exchange listings.',
    longDescription:
      'CoinGecko provides cryptocurrency market data tracking thousands of tokens, Bitcoin/Ethereum prices, market dominance, NFT floor prices, and liquidity across centralized and decentralized exchanges.',
    category: 'crypto',
    tags: ['crypto', 'bitcoin', 'finance', 'market', 'web3'],
    auth: 'none',
    pricing: 'freemium',
    https: true,
    cors: 'yes',
    docsUrl: 'https://docs.coingecko.com/reference/introduction',
    website: 'https://www.coingecko.com',
    difficulty: 'easy',
    useCases: [
      'Cryptocurrency portfolio tracker and alert widgets',
      'Live ticker banners for trading blogs and communities',
      'Historical price chart analytics',
    ],
    sampleRequest: {
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,idr',
    },
    sampleResponse: {
      status: 200,
      body: {
        bitcoin: { usd: 68500, idr: 1096000000 },
        ethereum: { usd: 3450, idr: 55200000 },
      },
    },
    apiTranslator: {
      whatItDoes: 'Gives live and historical prices for Bitcoin, Ethereum, and thousands of other altcoins in USD, IDR, EUR, etc.',
      dataReturned: 'Token prices, 24-hour volume, percentage price change, market caps, and historical candlestick data.',
      buildWith: [
        'A menubar ticker or smartwatch complication showing the current price of Bitcoin.',
        'A dollar-cost averaging (DCA) crypto profit simulator.',
      ],
      whenNotToUse: 'Do not use the public demo endpoints for high-frequency algorithmic trading bots due to rate limits (10-30 req/min).',
      authExplained: 'Public endpoints do not require an API key for basic usage. A Demo API Key header can be added for higher limits.',
      scenarios: [
        'Dashboard mounts -> App requests Bitcoin price -> Displays green/red delta badge based on 24-hour price change.',
      ],
    },
  },
  {
    id: 'rest-countries',
    name: 'REST Countries',
    description: 'Get information about world countries: capitals, currencies, flags, population, and languages.',
    longDescription:
      'REST Countries is an open-source data service providing detailed geographic, demographic, and political information for all nations, including ISO codes, borders, translations, and SVG flag assets.',
    category: 'geolocation',
    tags: ['countries', 'geography', 'flags', 'currencies', 'maps'],
    auth: 'none',
    pricing: 'free',
    https: true,
    cors: 'yes',
    docsUrl: 'https://gitlab.com/restcountries/restcountries',
    website: 'https://restcountries.com',
    difficulty: 'easy',
    useCases: [
      'Populating country & currency dropdowns in checkout flows',
      'World geography trivia and quiz applications',
      'Travel journal apps with interactive flag display',
    ],
    sampleRequest: {
      method: 'GET',
      url: 'https://restcountries.com/v3.1/name/indonesia',
    },
    sampleResponse: {
      status: 200,
      body: {
        name: { common: 'Indonesia', official: 'Republic of Indonesia' },
        capital: ['Jakarta'],
        region: 'Asia',
        population: 273523621,
        flags: { png: 'https://flagcdn.com/w320/id.png' },
      },
    },
    apiTranslator: {
      whatItDoes: 'Provides encyclopedia-grade data about every country on Earth: flag images, capital cities, population, currencies, and languages.',
      dataReturned: 'Array of country objects with official names, calling codes, borders, coordinates, and SVG/PNG flag image links.',
      buildWith: [
        'A country flag guessing game with multiple-choice questions.',
        'An international shipping calculator that auto-populates country currencies and dialing codes.',
      ],
      whenNotToUse: 'Do not use this for real-time live border tracking or GPS turn-by-turn navigation.',
      authExplained: 'Completely free and open with zero keys or registration needed. Send HTTP GET requests straight away.',
      scenarios: [
        'User selects "Japan" from a travel list -> App shows Tokyo as capital, Yen currency symbol, and the Japanese flag.',
      ],
    },
  },
  {
    id: 'jsonplaceholder',
    name: 'JSONPlaceholder',
    description: 'Free fake REST API for prototyping, mocking, and testing frontend network queries.',
    longDescription:
      'JSONPlaceholder is the most popular mock backend service in the web development ecosystem. It offers pre-populated endpoints for blog posts, comments, albums, photos, todos, and users with full CRUD support.',
    category: 'utilities',
    tags: ['mock', 'testing', 'prototype', 'crud', 'developer-tools'],
    auth: 'none',
    pricing: 'free',
    https: true,
    cors: 'yes',
    docsUrl: 'https://jsonplaceholder.typicode.com',
    website: 'https://jsonplaceholder.typicode.com',
    difficulty: 'easy',
    useCases: [
      'Prototyping React/Next.js frontend UIs before the actual backend is built',
      'Writing automated network tests and unit tests',
      'Teaching REST API fundamentals (GET, POST, PUT, DELETE)',
    ],
    sampleRequest: {
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
    },
    sampleResponse: {
      status: 201,
      body: { id: 101, title: 'foo', body: 'bar', userId: 1 },
    },
    apiTranslator: {
      whatItDoes: 'Acts like a real web backend server with blog posts, users, and comments so you can test your frontend code.',
      dataReturned: 'Mock JSON data matching typical database records (id, title, body, author info, email, avatar).',
      buildWith: [
        'A full CRUD social media feed or blogging app with like/comment UI.',
        'A kanban todo board with drag-and-drop state updates.',
      ],
      whenNotToUse: 'Never use this for production apps that need real data persistence (POST requests return fake IDs and are not permanently saved).',
      authExplained: 'Zero authentication required. Perfect for immediate zero-config prototyping.',
      scenarios: [
        'Building a UI prototype -> Call /posts -> Render beautiful list cards without needing to set up a database.',
      ],
    },
  },
  {
    id: 'resend',
    name: 'Resend API',
    description: 'Modern email API for developers to send transactional emails using React email templates.',
    longDescription:
      'Resend simplifies sending transactional emails from web applications. It provides high deliverability, domain verification, webhooks, and direct integration with React Email components.',
    category: 'communication',
    tags: ['email', 'transactional', 'notifications', 'react-email', 'saas'],
    auth: 'bearer',
    pricing: 'freemium',
    https: true,
    cors: 'no',
    docsUrl: 'https://resend.com/docs',
    website: 'https://resend.com',
    difficulty: 'moderate',
    useCases: [
      'Sending welcome emails upon user registration',
      'Password reset and magic login link emails',
      'E-commerce order receipts and shipping confirmation',
    ],
    sampleRequest: {
      method: 'POST',
      url: 'https://api.resend.com/emails',
      headers: {
        Authorization: 'Bearer re_123456789',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'user@example.com',
        subject: 'Welcome to our App!',
        html: '<p>Thanks for signing up!</p>',
      }),
    },
    sampleResponse: {
      status: 200,
      body: { id: '49a3999c-0ce1-4ea6-ab68-afcd6dc2e794' },
    },
    apiTranslator: {
      whatItDoes: 'Delivers emails from your code to users inbox reliably (welcome messages, receipt invoices, OTP codes).',
      dataReturned: 'A response object with an email tracking ID to check delivery, bounce, or open status.',
      buildWith: [
        'A SaaS user onboarding workflow sending custom welcome emails.',
        'A newsletter broadcast service with markdown templates.',
      ],
      whenNotToUse: 'Do not call this directly from client-side browser JavaScript; call it from backend/server actions to keep your API key secret.',
      authExplained: 'Requires Bearer Token authentication. Generate an API Key in the Resend dashboard and pass it in the Authorization header.',
      scenarios: [
        'User clicks "Sign Up" -> Next.js Server Action calls Resend -> User receives verification email within 2 seconds.',
      ],
    },
  },
  {
    id: 'huggingface-inference',
    name: 'Hugging Face Inference API',
    description: 'Instant AI model inference for text generation, translation, image classification, and summarization.',
    longDescription:
      'Hugging Face Serverless Inference API allows developers to run thousands of open-source AI and machine learning models (LLMs, Whisper, Stable Diffusion) without managing GPU infrastructure.',
    category: 'ai',
    tags: ['ai', 'machine-learning', 'llm', 'nlp', 'vision', 'open-source'],
    auth: 'bearer',
    pricing: 'freemium',
    https: true,
    cors: 'yes',
    docsUrl: 'https://huggingface.co/docs/api-inference',
    website: 'https://huggingface.co',
    difficulty: 'moderate',
    useCases: [
      'Adding AI text summarization to a notes application',
      'Language translation and sentiment analysis for customer reviews',
      'Image captioning and classification',
    ],
    sampleRequest: {
      method: 'POST',
      url: 'https://api-inference.huggingface.co/models/gpt2',
      headers: { Authorization: 'Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
      body: JSON.stringify({ inputs: 'The future of open-source artificial intelligence is' }),
    },
    sampleResponse: {
      status: 200,
      body: [{ generated_text: 'The future of open-source artificial intelligence is bright and collaborative...' }],
    },
    apiTranslator: {
      whatItDoes: 'Lets you run state-of-the-art open source AI models for text, audio, and images without owning an expensive GPU.',
      dataReturned: 'AI-generated text completions, classification scores, embedding arrays, or binary image outputs depending on the model.',
      buildWith: [
        'A customer feedback sentiment analyzer that flags unhappy reviews in real-time.',
        'An AI writing assistant that autocompletes sentences in a blog editor.',
      ],
      whenNotToUse: 'Do not expect sub-second latency on free serverless endpoints when models are "cold-starting" (sleeping).',
      authExplained: 'Create a free Hugging Face account, generate a User Access Token, and include it as a Bearer token in the request header.',
      scenarios: [
        'User submits a customer review -> App sends review text to sentiment model -> Displays positive or negative sentiment badge.',
      ],
    },
  },
  {
    id: 'qrserver',
    name: 'QR Code Generator API',
    description: 'Instant dynamic QR code generation as PNG, SVG, or EPS image formats via simple URL queries.',
    longDescription:
      'GoQR / QRServer generates customizable QR code images on the fly. You can specify data payloads, size dimensions, margin spacing, and image formats directly in standard image URLs.',
    category: 'utilities',
    tags: ['qr-code', 'generator', 'images', 'utilities', 'tools'],
    auth: 'none',
    pricing: 'free',
    https: true,
    cors: 'yes',
    docsUrl: 'https://goqr.me/api/doc/create-qr-code/',
    website: 'https://goqr.me/api/',
    difficulty: 'easy',
    useCases: [
      'Displaying QR codes for instant mobile payment scanning',
      'Event ticket badge generation with check-in QR codes',
      'WiFi network sharing QR code generators',
    ],
    sampleRequest: {
      method: 'GET',
      url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/AlphaIsYour/03-enoapi-hub',
    },
    sampleResponse: {
      status: 200,
      body: { format: 'image/png', size: '150x150', description: 'Raw binary PNG image stream' },
    },
    apiTranslator: {
      whatItDoes: 'Turns any text, URL, phone number, or WiFi credential into a scannable QR code image instantly.',
      dataReturned: 'A direct PNG or SVG image that can be placed straight into an <img> src tag.',
      buildWith: [
        'A "Share to Phone" button on a desktop website that pops up a QR code.',
        'A digital business card generator for events.',
      ],
      whenNotToUse: 'Do not use for confidential banking tokens without encryption, as data is passed directly in the URL string.',
      authExplained: 'No API key, signup, or authorization headers required. Just construct the image URL.',
      scenarios: [
        'User enters their portfolio link -> App embeds <img src="https://api.qrserver.com/v1/create-qr-code/?data=..." /> -> Shows instant QR code.',
      ],
    },
  },
];
