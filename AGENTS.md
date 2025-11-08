# Repository Guidelines

## Project Structure & Module Organization
Keep feature logic under `src/components/`, pairing each `.tsx` component with a matching `.css` stylesheet (for example, `src/components/PeopleTab.tsx` and `PeopleTab.css`). Shared entry points live in `src/App.tsx` and `src/index.tsx`, while testing utilities sit in `src/setupTests.ts` and `src/reportWebVitals.ts`. Static assets resolve from `public/`, and production bundles output to `build/` after a release build. Update `tsconfig.json` if you introduce new path aliases or compiler options.

## Build, Test, and Development Commands
Install dependencies with `npm install` the first time you clone. Use `npm start` for the local development server with fast refresh. Run `npm test` to execute the Jest + React Testing Library suite in watch mode, and `npm run build` to generate an optimized bundle for deployment. Avoid using `react-scripts eject` unless you have sign-off from maintainers.

## Coding Style & Naming Conventions
Write React components as typed functional components and export them via PascalCase filenames (`ServiceProviders.tsx`). Prefer 2-space indentation and keep TypeScript `interface` declarations close to their consuming components. Co-locate feature-specific styles in plain CSS files, using BEM-like class names to avoid collisions. Rely on the default Create React App ESLint rules; run `npx eslint src --ext ts,tsx` before submitting significant changes.

## Testing Guidelines
Author tests alongside implementation files using the `*.test.tsx` suffix (see `src/App.test.tsx`). Target user-visible behaviour via React Testing Library queries rather than implementation details. Maintain or raise coverage by mirroring new component states in tests, and document any gaps in the pull request. Snapshot tests are acceptable only when UI churn is minimal.

## Commit & Pull Request Guidelines
Git metadata is not bundled in this workspace, but upstream commits follow concise, imperative summaries (e.g., `feat: add referral detail view`). Keep body text focused on motivation and include breaking-change notes when needed. Pull requests must link the related work item, explain the functional change, list testing evidence, and attach screenshots for UI updates. Request review from a product owner before merging to main.


## Testing edits
