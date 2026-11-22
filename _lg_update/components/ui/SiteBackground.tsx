// components/ui/SiteBackground.tsx
// One fixed, CSS-only background for the whole site (replaces the nebula photo,
// the 80 JS twinkling stars and the repeated blur blobs on every page).
// All the styling lives in app/globals.css under ".site-bg__*".

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="site-bg pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <div className="site-bg__base absolute inset-0" />
      <div className="site-bg__aurora site-bg__aurora--a" />
      <div className="site-bg__aurora site-bg__aurora--b" />
      <div className="site-bg__grid absolute inset-0" />
      <div className="site-bg__vignette absolute inset-0" />
    </div>
  );
}
