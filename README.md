# ForestCoin Dashboard

> **ForestCoin** es un dashboard SSR de precios de criptomonedas construido con Next.js 16, TailwindCSS y TypeScript. Usa la API de CoinGecko y revalidación cada 60 segundos para obtener datos frescos. Minimalista, rápido y verde como un bosque.

## Características

- 🌲 **Server-Side Rendering (SSR)** con Next.js 16 App Router
- 🔄 **ISR (Incremental Static Regeneration)** con revalidación cada 60 segundos
- 🎨 **Diseño ForestCoin** con tema verde bosque y tipografía moderna
- 📊 **Datos en tiempo real** desde CoinGecko API
- ⚡ **TypeScript** para type-safety completo
- 🎯 **Tailwind CSS 3** para estilos responsivos

## Tecnologías

- **Next.js 16** - Framework React con SSR
- **TypeScript 5.9** - Type-safety
- **Tailwind CSS 3.4** - Utility-first CSS
- **pnpm** - Gestor de paquetes rápido y eficiente
- **CoinGecko API** - Datos de criptomonedas

## Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Abrir http://localhost:3000 en tu navegador
```

## Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo en http://localhost:3000
pnpm build        # Build de producción
pnpm start        # Iniciar servidor de producción
pnpm lint         # Ejecutar ESLint
```

## Estructura del Proyecto

```
forestcoin-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raíz con metadata
│   │   ├── page.tsx        # Página principal (Server Component)
│   │   └── globals.css     # Estilos globales + Tailwind
│   ├── lib/
│   │   └── coingecko.ts    # Cliente API de CoinGecko
│   └── components/
│       ├── CryptoTable.tsx      # Tabla principal de criptos
│       └── PriceChangeBadge.tsx # Badge de cambio de precio 24h
├── public/                 # Archivos estáticos
├── tailwind.config.ts      # Configuración de Tailwind con tema ForestCoin
└── tsconfig.json          # Configuración de TypeScript
```

## Paleta de Colores ForestCoin

- **Forest Green (Main)**: `#0B4F3F`
- **Leaf Green (Accent)**: `#3BB273`
- **Dark Slate**: `#0F1615`
- **Slate Grey**: `#1E2A29`
- **Mist White**: `#E8F4F0`
- **Positive Green**: `#4ADE80`
- **Negative Red**: `#EF4444`

## Tipografía

- **UI**: Inter - Limpia y moderna
- **Números**: JetBrains Mono - Para precios y valores técnicos

## Cómo Funciona

1. **Server Components**: La página principal (`page.tsx`) es un Server Component async que fetch datos directamente
2. **ISR**: Usa `next: { revalidate: 60 }` en el fetch para cachear y revalidar cada 60 segundos
3. **Sin Estado Cliente**: No usa `useState` ni `useEffect` - todo SSR puro
4. **Manejo de Errores**: Try/catch en el servidor con UI de fallback

## Dependencias Instaladas

Todas las dependencias son oficiales y seguras:

- `next`, `react`, `react-dom` - Framework (Vercel/Meta)
- `typescript`, `@types/*` - Type definitions (Microsoft/DefinitelyTyped)
- `tailwindcss`, `postcss`, `autoprefixer` - Estilos (Tailwind Labs)
- `eslint`, `eslint-config-next` - Linting (Next.js)

## Verificación de Seguridad

Este proyecto fue creado con pnpm usando solo dependencias oficiales verificadas:
- ✅ Next.js oficial de Vercel
- ✅ React oficial de Meta
- ✅ TypeScript oficial de Microsoft
- ✅ Tailwind CSS oficial
- ✅ Sin dependencias de terceros no verificadas

## Licencia

ISC
