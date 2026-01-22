# Procrastination Ebook Landing Page

## Overview

This is a sales landing page for an ebook called "Practical Ways To Defeat Procrastination in 2026: A Productivity Guide For Graduate Students". The application is a full-stack TypeScript project with a React frontend and Express backend, designed to convert visitors into leads and direct them to an external checkout page (ebook.gaiusjimedits.com via Payhip integration).

The page features a result-focused hook, five compelling reasons to download the free ebook, a countdown timer for scarcity, testimonials, and dual CTA buttons (positive and negative) to drive conversions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for entrance animations and smooth interactions
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Build**: esbuild bundles server code to CommonJS for production

### Project Structure
```
client/           # React frontend
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared between frontend and backend
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Decisions

1. **Monorepo Structure**: Frontend and backend share TypeScript types and validation schemas through the `shared/` directory, ensuring type safety across the stack.

2. **Component Library**: Uses shadcn/ui with Radix primitives for accessible, customizable components. Components are copied into the codebase (not installed as dependencies) for full control.

3. **Database Schema**: Simple leads table for capturing email signups and CTA click tracking. Schema defined with Drizzle and validated with drizzle-zod.

4. **External CTA**: Primary conversion happens on external Payhip platform (ebook.gaiusjimedits.com). The Payhip script is loaded in index.html for potential embedded checkout.

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and queries
- **connect-pg-simple**: Session storage (available but not currently used)

### Third-Party Services
- **Payhip**: External ebook sales platform, script loaded for checkout integration
- **Google Fonts**: DM Sans and Playfair Display for typography

### Key npm Packages
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animations
- `lucide-react`: Icon library
- `zod`: Runtime validation
- `wouter`: Client-side routing
- Full shadcn/ui component suite via Radix primitives

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string