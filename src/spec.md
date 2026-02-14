# Specification

## Summary
**Goal:** Retry the build/deployment to resolve the prior configuration/build failure without changing any existing features or UI.

**Planned changes:**
- Fix build/deployment configuration or compilation issues causing the current failure.
- Keep frontend immutable paths unchanged and keep the backend as a single Motoko actor (add `backend/migration.mo` only if required for stable state upgrade).

**User-visible outcome:** The application deploys successfully with no user-facing changes to features, copy, layout, navigation, contact form behavior, theme, or images.
