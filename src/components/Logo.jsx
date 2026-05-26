export default function Logo({ height = 28, className = '' }) {
  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-2xl opacity-60 blur-xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(47,123,255,0.35), transparent 70%)',
        }}
      />
      <img
        src="/chainlabs-logo.png"
        alt="ChainLabs"
        style={{
          height,
          width: 'auto',
          filter: 'invert(1) hue-rotate(180deg) brightness(1.08) contrast(1.02)',
        }}
        className="relative select-none transition-transform duration-300 hover:scale-[1.03]"
        draggable="false"
      />
    </span>
  );
}
