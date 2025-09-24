# BoAbCo People Management Application

A React + TypeScript front end for managing community members, businesses, campaigns, and service providers at BoAbCo. The experience emphasises Indigenous-inspired branding, responsive layouts, and data-rich feature areas.

## Phase 1 Refactor Highlights
- URL-driven navigation powered by React Router with a shared application shell (`AppLayout`) that keeps the header and tab navigation in sync with the active route.
- Mock authentication shell (`/login`) backed by a lightweight session context so future API clients can swap in real token handling without touching the UI layer.
- Header account controls that surface the signed-in user (mocked for now) and expose a sign-out shortcut.
- Husky + lint-staged pre-commit workflow plus project-level lint/typecheck scripts for predictable quality gates.
- Architecture documentation captured in `docs/architecture.md` to guide future phases of the refactor.

## Design System Notes
The interface retains BoAbCo’s earthy palette and typographic hierarchy:
- **Color Scheme**: Warm oranges, browns, and gold accents with soft neutrals for surfaces.
- **Typography**: Primary UI copy uses Segoe UI while supporting headings may leverage Georgia for contrast.
- **Components**: Layout primitives favour rounded corners, subtle drop shadows, and plentiful white space.

## Project Structure
```
boabco-v2/
├── public/
├── src/
│   ├── app/
│   │   └── store.ts
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx / LoginPage.css
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── SessionProvider.tsx
│   │   ├── common/
│   │   │   └── ComingSoon.tsx / ComingSoon.css
│   │   └── layout/
│   │       └── AppLayout.tsx / AppLayout.css
│   ├── features/
│   │   ├── people/
│   │   ├── people-bby/
│   │   ├── business/
│   │   ├── campaigns/
│   │   ├── referrals/
│   │   └── service-providers/
│   ├── mocks/
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── docs/
│   └── architecture.md
├── .husky/
├── package.json
└── README.md
```
Feature modules will migrate into `src/components/` over time as part of the refactor roadmap.

## Getting Started
### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Running the App
```bash
npm start
```
App is served at `http://localhost:3000`. The first visit redirects to `/login`; use the demo credentials to authenticate against the mock session provider.

### Demo Sign-in
- Email: `demo@boabco.com`
- Password: `demo1234`
- Development builds expose an `Autofill demo credentials` button to quickly populate the form.

### Type Checking, Linting, and Tests
```bash
npm run lint        # ESLint across all TypeScript sources (warnings fail the run)
npm run typecheck   # TypeScript compiler in --noEmit mode
npm test            # Jest in watch mode
npm run test:ci     # Jest single run with coverage (CI-friendly)
```

Husky installs automatically after `npm install` (via the `prepare` script). The pre-commit hook runs `lint-staged` on staged `.ts/.tsx` files and a full `npm run typecheck`. Opt out by removing `.husky/pre-commit` if needed for local experiments.

## Feature Overview
- **People & People BBY**: Rich profile management with tabs for personal info, work history, qualifications, recommendations, notes, and profile summary.
- **Business / Campaigns / Referrals / Service Providers**: Feature surfaces prepared for data integration via Redux Toolkit and future API clients.
- **Jobs / Training / Analytics**: Placeholder routes that communicate upcoming functionality while preserving navigation consistency.

## Additional Resources
- `docs/architecture.md` — architecture decisions introduced during Phase 1.
- `src/styles/layout.css` — shared design tokens and responsive layout helpers.
- `src/mocks/` & `src/services/` — mock APIs and service abstractions leveraged by the Redux store.

Future phases will consolidate domain slices, harden form flows, and expand the automated test suite in line with the refactor roadmap.
