import {
  Sparkles,
  ShieldCheck,
  Briefcase,
  CreditCard,
  Users,
  ArrowRight,
  RotateCw,
} from 'lucide-react';

const stages = [
  { icon: Sparkles, label: 'Information' },
  { icon: ShieldCheck, label: 'Trust' },
  { icon: Briefcase, label: 'Work' },
  { icon: CreditCard, label: 'Payment' },
  { icon: Users, label: 'Relationship' },
];

const transitions = [
  {
    from: 'Information',
    to: 'Trust',
    body: 'ChainBrief turns reliable, noise-reduced information into credibility you can stand behind.',
  },
  {
    from: 'Trust',
    to: 'Work',
    body: 'Credibility unlocks real opportunities — ChainWork matches trusted talent with the right work.',
  },
  {
    from: 'Work',
    to: 'Payment',
    body: 'Completed work flows into ChainPay — invoices, settlements, and payouts handled in one place.',
  },
  {
    from: 'Payment',
    to: 'Relationship',
    body: 'Every successful payment becomes a long-term relationship through ChainMeet — and the loop begins again.',
  },
];

export default function Loop() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">The ChainLabs Loop</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            <span className="grad-text">Information</span> becomes{' '}
            <span className="grad-text">relationship</span>. Then it begins
            again.
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">
            ChainLabs turns information into trust, trust into work
            opportunities, work into payment, and payment into long-term
            relationships — a single loop that compounds every time it runs.
          </p>
        </div>

        <div className="reveal mt-14">
          <div className="glass-strong rounded-3xl p-6 sm:p-10">
            {/* Stage row */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-2">
              {stages.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="group flex flex-col items-center gap-2">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/[0.08] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-500/60 group-hover:bg-brand-500/15 sm:h-20 sm:w-20">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-50 blur-xl"
                        style={{
                          background:
                            'radial-gradient(circle, rgba(47,123,255,0.45), transparent 65%)',
                        }}
                      />
                      <s.icon className="relative h-6 w-6 text-brand-200 sm:h-7 sm:w-7" />
                    </div>
                    <span className="font-display text-xs font-semibold tracking-wide text-white sm:text-sm">
                      {s.label}
                    </span>
                  </div>
                  {i < stages.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 flex-none text-brand-400/70 sm:block" />
                  )}
                </div>
              ))}

              {/* Loop-back indicator */}
              <div className="hidden items-center gap-2 pl-3 sm:flex">
                <span className="h-px w-6 bg-gradient-to-r from-brand-400/60 to-transparent" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/[0.08] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-300">
                  <RotateCw className="h-3 w-3" /> Loop
                </span>
              </div>
            </div>

            {/* Transition cards */}
            <ul className="mt-10 grid gap-3 md:grid-cols-2">
              {transitions.map((t) => (
                <li
                  key={`${t.from}-${t.to}`}
                  className="group rounded-2xl border border-line bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-500/[0.05]"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                    <span>{t.from}</span>
                    <ArrowRight className="h-3 w-3" />
                    <span>{t.to}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {t.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
