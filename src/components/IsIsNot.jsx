import { X, Check, Newspaper, Briefcase, CreditCard, Network } from 'lucide-react';

const isNot = [
  { icon: Newspaper, label: 'Just a media site' },
  { icon: Briefcase, label: 'Just a job marketplace' },
  { icon: CreditCard, label: 'Just a payment tool' },
];

const isThis = [
  {
    icon: Network,
    label: 'An integrated ecosystem',
    detail:
      'Information, work, relationships, and payments are connected as one — designed, operated, and improved together.',
  },
];

export default function IsIsNot() {
  return (
    <section className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">What ChainLabs Is / Is Not</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Not one tool. <span className="grad-text">A connected ecosystem.</span>
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">
            ChainLabs is not just a media site, not just a job marketplace, and
            not just a payment tool. It is an integrated ecosystem where
            information, work, relationships, and payments are connected.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-2">
          {/* Is Not */}
          <div className="glass rounded-3xl p-7 sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300 ring-1 ring-rose-500/30">
              <X className="h-3.5 w-3.5" /> ChainLabs Is Not
            </div>
            <ul className="space-y-3">
              {isNot.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
                >
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-rose-500/10 ring-1 ring-rose-500/25">
                    <Icon className="h-4 w-4 text-rose-300" />
                  </span>
                  <span className="line-through decoration-rose-400/50 decoration-2 underline-offset-2">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Is */}
          <div className="glass-strong rounded-3xl p-7 ring-1 ring-brand-500/20 sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300 ring-1 ring-brand-500/30">
              <Check className="h-3.5 w-3.5" /> ChainLabs Is
            </div>
            {isThis.map(({ icon: Icon, label, detail }) => (
              <div key={label}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/30">
                    <Icon className="h-5 w-5 text-brand-300" />
                  </span>
                  <span className="font-display text-lg font-semibold text-white">
                    {label}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {detail}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Information', 'Work', 'Relationships', 'Payments'].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-brand-500/30 bg-brand-500/[0.08] px-3 py-1 text-xs font-medium text-brand-200"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
