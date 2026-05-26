const phases = [
  {
    phase: 'Phase 1',
    name: 'ChainBrief',
    desc: 'Launch the insight & community platform. Build the foundation of credible information and creator trust.',
    status: 'live',
  },
  {
    phase: 'Phase 2',
    name: 'ChainWork',
    desc: 'Open the digital work marketplace at chainwork.chainbrief.kr — turning credibility into real, paid opportunities.',
    status: 'live',
  },
  {
    phase: 'Phase 3',
    name: 'ChainPay',
    desc: 'Ship the payment & settlement layer at chainwork.chainbrief.kr/#/pay — managing transactions, invoices, and platform fees natively.',
    status: 'live',
  },
  {
    phase: 'Phase 4',
    name: 'ChainMeet',
    desc: 'Roll out the networking & collaboration platform. Turn one-time work into long-term relationships.',
    status: 'next',
  },
  {
    phase: 'Phase 5',
    name: 'Integrated ChainLabs Ecosystem',
    desc: 'Connect all four products into a single AI-powered value network — shared identity, reputation, and economics.',
    status: 'planned',
  },
];

const statusStyles = {
  live: 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30',
  next: 'bg-brand-500/15 text-brand-300 ring-brand-500/30',
  planned: 'bg-white/5 text-slate-400 ring-line-strong',
};
const statusLabels = { live: 'Live', next: 'Building now', planned: 'Planned' };

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Roadmap</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Building the chain, one link at a time.
          </h2>
        </div>

        <ol className="reveal relative mt-14 space-y-4">
          <span className="absolute left-[26px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-line-strong to-transparent sm:block" />
          {phases.map((p, i) => (
            <li
              key={p.name}
              className="glass group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-line-strong sm:flex-row sm:items-center sm:pl-20"
            >
              <span className="absolute left-5 top-6 hidden h-[14px] w-[14px] rounded-full bg-brand-500 ring-4 ring-brand-500/20 sm:block" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {p.phase}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ${statusStyles[p.status]}`}
                  >
                    {statusLabels[p.status]}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
              <span className="font-display text-3xl font-bold text-white/10 sm:text-5xl">
                0{i + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
