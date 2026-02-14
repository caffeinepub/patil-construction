# Specification

## Summary
**Goal:** Deploy the current PATIL Construction website to production successfully.

**Planned changes:**
- Run a production build and fix any build-time blockers (TypeScript compile errors, missing imports, invalid paths).
- Verify all referenced static assets resolve correctly at runtime (including `/assets/generated/*`) and fix any broken references as needed.
- Ensure the deployed site renders core sections (Header, Hero, Services, About, Contact, Footer) without runtime errors.

**User-visible outcome:** The live production site deploys successfully and loads the main sections without build/runtime errors or missing-asset 404s.
