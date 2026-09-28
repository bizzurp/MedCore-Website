// Lightweight inline icon set (stroke-based, rounded) so the marketing site
// carries no external icon dependency. Consistent 1.75 stroke width per design.md.

const paths = {
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3" />
      <path d="M21 9v4h-4a2 2 0 0 1 0-4h4z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 15l3-4 3 3 4-6" />
    </>
  ),
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 5-4 2 2-5 4-2z" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></>,
  gift: (
    <>
      <path d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8z" />
      <path d="M3 7h18v4H3zM12 7V20M12 7S9 3 7 5s5 2 5 2M12 7s3-4 5-2-5 2-5 2" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4M8 13h8M8 17h5" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5l2 2" />
      <path d="M20 12a8 8 0 0 1-14 5l-2-2" />
      <path d="M18 4v5h-5M6 20v-5h5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />
    </>
  ),
  bolt: <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  scale: (
    <>
      <path d="M12 3v18M7 21h10M6 7h12M6 7l-3 6a3 3 0 0 0 6 0L6 7zM18 7l-3 6a3 3 0 0 0 6 0l-3-6z" />
    </>
  ),
  hospital: (
    <>
      <path d="M4 21V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v15" />
      <path d="M3 21h18M12 8v6M9 11h6M10 21v-4h4v4" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
}

export function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.75 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.check}
    </svg>
  )
}

export default Icon
