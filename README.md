# ForestCoin Dashboard

> **ForestCoin** is a SSR cryptocurrency prices dashboard built with Next.js 16, TailwindCSS and TypeScript. Uses CoinGecko API and revalidation every 60 seconds to get fresh data. Minimalist, fast and green as a forest.

## Features

- 🌲 **Server-Side Rendering (SSR)** with Next.js 16 App Router
- 🔄 **ISR (Incremental Static Regeneration)** with revalidation every 60 seconds
- 🎨 **ForestCoin Design** with forest green theme and modern typography
- 📊 **Real-time data** from CoinGecko API
- ⚡ **TypeScript** for complete type-safety
- 🎯 **Tailwind CSS 3** for responsive styling

## Technologies

- **Next.js 16** - React Framework with SSR
- **TypeScript 5.9** - Type-safety
- **Tailwind CSS 3.4** - Utility-first CSS
- **pnpm** - Fast and efficient package manager
- **CoinGecko API** - Cryptocurrency data

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

## Available Scripts

```bash
pnpm dev          # Development server at http://localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Project Structure

```
forestcoin-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main page (Server Component)
│   │   └── globals.css     # Global styles + Tailwind
│   ├── lib/
│   │   └── coingecko.ts    # CoinGecko API client
│   └── components/
│       ├── CryptoTable.tsx      # Main crypto table
│       └── PriceChangeBadge.tsx # 24h price change badge
├── public/                 # Static files
├── tailwind.config.ts      # Tailwind configuration with ForestCoin theme
└── tsconfig.json          # TypeScript configuration
```

## ForestCoin Color Palette

- **Forest Green (Main)**: `#0B4F3F`
- **Leaf Green (Accent)**: `#3BB273`
- **Dark Slate**: `#0F1615`
- **Slate Grey**: `#1E2A29`
- **Mist White**: `#E8F4F0`
- **Positive Green**: `#4ADE80`
- **Negative Red**: `#EF4444`

## Typography

- **UI**: Inter - Clean and modern
- **Numbers**: JetBrains Mono - For prices and technical values

## How It Works

1. **Server Components**: The main page (`page.tsx`) is an async Server Component that fetches data directly
2. **ISR**: Uses `next: { revalidate: 60 }` in the fetch to cache and revalidate every 60 seconds
3. **No Client State**: Doesn't use `useState` or `useEffect` - pure SSR
4. **Error Handling**: Try/catch on the server with fallback UI

## Installed Dependencies

All dependencies are official and secure:

- `next`, `react`, `react-dom` - Framework (Vercel/Meta)
- `typescript`, `@types/*` - Type definitions (Microsoft/DefinitelyTyped)
- `tailwindcss`, `postcss`, `autoprefixer` - Styles (Tailwind Labs)
- `eslint`, `eslint-config-next` - Linting (Next.js)

## Security Verification

This project was created with pnpm using only verified official dependencies:

- ✅ Official Next.js from Vercel
- ✅ Official React from Meta
- ✅ Official TypeScript from Microsoft
- ✅ Official Tailwind CSS
- ✅ No unverified third-party dependencies

## License

ISC
