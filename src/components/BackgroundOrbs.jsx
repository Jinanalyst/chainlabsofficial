export default function BackgroundOrbs() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span
          className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, #2F7BFF 0%, transparent 70%)' }}
        />
        <span
          className="absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, #7FA8FF 0%, transparent 70%)',
            animationDelay: '-6s',
          }}
        />
        <span
          className="absolute -bottom-64 left-1/3 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, #1B3FAA 0%, transparent 70%)',
            animationDelay: '-12s',
          }}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid" />
    </>
  );
}
