# Specification

## Summary
**Goal:** Replace the site logo with the latest uploaded PATIL Construction 3D logo.

**Planned changes:**
- Create a new square, tightly-cropped logo PNG from `patil construction 3d jpeg new-7.jpg` by removing the wall/mockup background and exporting a transparent `512x512` asset to `/frontend/public/assets/generated/patil-logo-3d-new7.dim_512x512.png`.
- Update the website header and footer logo references to use `/assets/generated/patil-logo-3d-new7.dim_512x512.png` instead of `/assets/generated/patil-logo-3d-new5.dim_512x512.png`, preserving current sizing behavior.

**User-visible outcome:** The header and footer display the updated PATIL Construction 3D logo across mobile and desktop without clipping.
