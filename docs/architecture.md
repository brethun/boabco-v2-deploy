# Frontend Architecture Overview

This document captures the current architecture decisions for the BoAbCo V2 frontend. It tracks the shared layout, routing model, authentication shell, and developer tooling introduced during the refactor.

## Application Shell
- **Shared layout** lives in `src/components/layout/AppLayout.tsx`. It renders the global header, primary navigation, and account controls while exposing a React Router `<Outlet />` for feature content.
- **Styling** for layout primitives is colocated in `AppLayout.css`, reusing the brand design tokens defined in `App.css` and `src/styles/layout.css`.
- **Coming soon placeholders** live under `src/components/common/` to keep in-progress feature routes navigable with consistent messaging.

## Routing Model
- `BrowserRouter` is initialised in `src/index.tsx`; route configuration resides in `src/App.tsx`.
- Top-level feature routes map to the existing feature modules (e.g. `/people`, `/business`, `/referrals`). Navigation state derives from the URL rather than local component state.
- Unknown routes redirect to `/people`. Additional route segments can be nested beneath the existing layout without layout changes.

## Authentication Shell
- `SessionProvider` (`src/components/auth/SessionProvider.tsx`) owns mock session state with a persisted token stored in `localStorage` for parity with future API work.
- `ProtectedRoute` (`src/components/auth/ProtectedRoute.tsx`) guards the application shell; unauthenticated visitors are redirected to `/login` with deep-link support via `location.state`.
- `LoginPage` (`src/components/auth/LoginPage.tsx`) provides the mocked sign-in form with a dedicated demo credential experience.
- Demo credentials (`demo@boabco.com` / `demo1234`) are validated inside the session provider; development builds expose an autofill shortcut for convenience.
- The layout surfaces the active user (or a placeholder) in the header and exposes a sign-out shortcut that clears the mock session.

## Tooling & Quality Gates
- New npm scripts:
  - `npm run lint` — runs ESLint across all TypeScript sources with warnings treated as failures.
  - `npm run typecheck` — runs `tsc --noEmit` for static analysis without writing build artefacts.
  - `npm run test:ci` — executes the Jest suite once with coverage output, suitable for CI pipelines.
  - `npm run prepare` — installs Husky hooks after `npm install`.
- Husky pre-commit hook (`.husky/pre-commit`) executes `lint-staged` on staged `.ts/.tsx` files and performs a full `npm run typecheck` as a second gate.
- `lint-staged` is configured in `package.json` to run ESLint only on files about to be committed, keeping the feedback loop quick while the type-check ensures project-wide safety.

## Follow-up
- Extend `lint-staged` with CSS linting once `stylelint` (or an equivalent) is introduced.
- Wire additional domain routes by colocating feature modules under `src/features` or migrating into `src/components` as part of future consolidation work.
- Replace the mock session client with the real authentication flow when backend contracts are available.
