// components/ui/SiteBackground.tsx
// One fixed background for the whole site: the home page photo with the same
// dark overlay the home page uses. Styling lives in app/globals.css (".site-bg__*").

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="site-bg pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <div className="site-bg__photo absolute inset-0" />
      <div className="site-bg__shade absolute inset-0" />
    </div>
  );
}
