export default function Logo({ size = 32, withWordmark = true, className = '' }) {
  return (
    <span className={`relative inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative inline-flex flex-none items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-60 blur-lg"
          style={{
            background:
              'radial-gradient(circle, rgba(47,123,255,0.55), transparent 65%)',
          }}
        />
        <img
          src="/chainlabs-mark.svg"
          alt=""
          width={size}
          height={size}
          className="relative select-none"
          draggable="false"
        />
      </span>
      {withWordmark && (
        <span className="font-display text-[18px] font-bold leading-none tracking-tight text-white">
          Chain<span className="text-brand-300">Labs</span>
        </span>
      )}
    </span>
  );
}
