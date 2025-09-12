# Kancra Labs Landing Pages

This is a Next.js project for Kancra Labs landing pages, built with modern web technologies including TypeScript, Tailwind CSS, and the App Router.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Font Optimization**: [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
├── lib/               # Utility functions and configurations
└── types/             # TypeScript type definitions
```

## Development

- Edit pages in `src/app/`
- Add components in `src/components/`
- Global styles are in `src/app/globals.css`
- The page auto-updates as you edit files

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
