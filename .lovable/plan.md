# Dream Clean comparison and location update

## Changes
- Keep only the existing Kitchen and Bathroom cards in “Before & After,” preserving its current layout and interactions.
- Add a lightweight “Location / Service Area” section immediately before the final contact call-to-action.
- Use a reusable `mapcn-marker-tooltip` MapLibre component with one marker for Dream Clean in New Braunfels, TX.
- Style the section with the existing rose and soft-pink design tokens, including a clear tooltip for the company name and city.
- Leave the Reels and every other existing section unchanged.

## Technical details
- Add `maplibre-gl` only; `lucide-react` is already installed.
- Load MapLibre only in the browser to preserve server rendering.
- Use OpenStreetMap raster tiles inside MapLibre, avoiding new credentials or backend services.
- Verify desktop and mobile layouts, marker tooltip visibility, overflow, and the current build status.
