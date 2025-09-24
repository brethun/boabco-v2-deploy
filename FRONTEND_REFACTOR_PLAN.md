# Frontend Refactor Plan

## Objective
Deliver a production-ready React frontend that can operate entirely against mocked services today while staying ready to plug into a real API later. The plan focuses on tightening architecture, hardening UX flows, and building confidence via tests and tooling.

## Current Snapshot
- **App Shell**: Single-page layout driven by manual tab state in `App.tsx`. No URL routing or deep-link support.
- **State/Data Layer**: Redux Toolkit store configured with RTK Query and a comprehensive `people` slice. Other feature tabs rely on local component state and static mock arrays.
- **Mock Services**: `mockApiClient` covers people data only; no shared abstraction for other domains. Environment-based API switching not yet wired.
- **UI Components**: Feature components are mostly ad-hoc JSX with minimal reuse, limited accessibility polish, and inconsistent loading/empty states.
- **Testing**: Only CRA starter test remains; no coverage of new slices, components, or mock services.
- **Tooling**: CRA + TypeScript standard config, eslint available but not enforced, no Storybook or visual regression setup. Build artefacts recently removed from Git history.
- **Authentication**: App renders all content without login; no session boundary or token handling exists.

## Key Risks/Gaps
1. **Navigation & Layout**: Missing router, route-based code splitting, and persistent layout primitives (headers, dialogs, toasts) shared across features.
2. **Data Consistency**: Non-people tabs have duplicated mock data and lack Redux integration, leading to divergent state handling once a real API arrives.
3. **Form Reliability**: No schema validation, optimistic update strategies, or dirty-state handling; edits fire saves on every change.
4. **Mock / Live Parity**: No toggles to switch between mock services and real APIs, nor a contract test to ensure future API compatibility.
5. **Testing Debt**: No unit/integration tests for reducers, async thunks, or complex components; no MSW to simulate API calls in tests.
6. **Developer Experience**: Missing lint/test scripts in prepush, no documentation on feature conventions, and no Storybook/design-system baseline.
7. **Accessibility & Performance**: Several console warnings (e.g. Radix Dialog usage), uncontrolled focus management, and no metrics on load performance.
8. **Authentication Gap**: No login flow, session persistence, or mock token lifecycle; all API calls assume anonymous access.

## Refactor Roadmap

### Phase 1 – Architecture & Tooling
- Introduce `react-router-dom` with route configs for each top-level tab; keep tab UI in sync with URLs (e.g. `/people`, `/business`).
- Extract shared layout (header, sidebar, app container) into `src/components/layout/` with composition-friendly primitives.
- Establish authentication shell: add `/login` route, `Login` page component, and session context/provider that gates protected routes.
- Add lint/test/typecheck scripts to `package.json` (`npm run lint`, `npm run typecheck`) and wire Husky + lint-staged (opt-in) for pre-commit enforcement.
- Document project conventions (folder structure, naming, state patterns) in `BOABCO_README.md` or new `docs/architecture.md`.

### Phase 2 – Data Layer Consolidation
- Define domain-specific slices/services for Business, Campaigns, Referrals, Service Providers, etc., modeled after `peopleSlice`.
- Create a single mock service module per domain that implements CRUD-like methods; expose them behind an interface so real API clients can replace them later.
- Wire mock JWT issuance/validation utilities so service calls automatically attach `Authorization` headers when a session is active, persist tokens (e.g. `localStorage`), and hydrate session state on app start.
- Wire RTK Query endpoints for read operations where appropriate and use RTK slices for complex forms/state; ensure selectors and types reside under each feature.
- Implement environment toggles: `.env` defaults pointing to mock mode, with the ability to switch to live API via `REACT_APP_USE_MOCKS=false` or similar.
- Add normalization/ID maps if lists grow large to support performant updates.

### Phase 3 – UX & Forms
- Replace per-input `onChange` saves with form states that support dirty tracking, explicit save/cancel actions, and optimistic updates that roll back on failure.
- Introduce zod/yup schemas (or custom validators) for key forms; display inline validation errors and disable saves until valid.
- Standardize loading/empty/error states through shared components (e.g. `<LoadingState />`, `<EmptyState />`, `<ErrorBanner />`).
- Address accessibility gaps: ensure dialog components include `DialogTitle`/`aria-describedby`, establish focus traps, and audit form labels/ARIA attributes.
- Add toast/notification manager at app level with consistent variants.

### Phase 4 – Testing & Quality Gates
- Install `@testing-library/react` (already present) + `@testing-library/react-hooks` or RTK testing utilities; configure MSW to mock network requests consistently.
- Author tests for `peopleSlice` async thunks, mock API client behavior, and UI flows (e.g. selecting a person, saving a section).
- Expand coverage to new domain slices/tests as they are implemented; include regression tests for form save/cancel behavior.
- Set up Storybook (optional but recommended) to exercise complex components and document states.
- Configure CI (GitHub Actions or Vercel) to run lint, typecheck, test before deployment.

### Phase 5 – Deployment Readiness
- Ensure build uses environment variables for API base URLs and feature flags; document deploy steps for Vercel and future environments.
- Provide seed data loaders for mock mode so deployments without an API still present meaningful content.
- Add troubleshooting docs for common deployment issues (asset URLs, email privacy on git pushes, etc.).

## Acceptance Checklist
- [ ] Navigable SPA with URL-based routing and persistent layout.
- [ ] Redux slices and services cover all major domains with mock + swappable API clients.
- [ ] Forms support validation, save/cancel, and optimistic feedback.
- [ ] Mock/live mode toggles and environment docs validated in build pipeline.
- [ ] Testing suite covers reducers, async flows, and critical UI with MSW-backed mocks.
- [ ] Lint/type/test commands enforced via CI; Storybook (or equivalent) documents core components.
- [ ] Accessibility warnings resolved; performance budgets measured for initial load.
- [ ] Authentication flow protects the app with a mocked login, persisted session, and token-aware data layer.

## Follow-Up Considerations
- Evaluate introducing a component library or design tokens for consistent styling.
- Plan migration path to actual API (OpenAPI contract, integration tests) once backend is ready.
- Add analytics/logging scaffolding for future observability needs.
