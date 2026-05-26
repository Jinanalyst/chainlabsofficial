import { FileText, Briefcase, CreditCard, Users, ArrowRight } from 'lucide-react';

const flow = [
  {
    icon: FileText,
    name: 'ChainBrief',
    role: 'Information & Trust',
    desc: 'Insights and credibility are created.',
  },
  {
    icon: Briefcase,
    name: 'ChainWork',
    role: 'Opportunity',
    desc: 'Trust turns into real work.',
  },
  {
    icon: CreditCard,
    name: 'ChainPay',
    role: 'Revenue',
    desc: 'Payments and settlements complete the loop.',
  },
  {
    icon: Users,
    name: 'ChainMeet',
    role: 'Collaboration',
    desc: 'Long-term relationships compound.',
  },
];

const story = [
  'Information becomes insight.',
  'Insight builds trust.',
  'Trust creates work opportunities.',
  'Work creates revenue.',
  'Revenue supports long-term collaboration.',
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">The Ecosystem</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            One connected flow, from <span className="grad-text">insight</span>{' '}
            to <span className="grad-text">collaboration</span>.
          </h2>
        </div>

        <div className="reveal mt-14">
          <div className="glass-strong relative rounded-3xl p-6 sm:p-10">
            <div className="grid gap-4 md:grid-cols-4 md:gap-2">
              {flow.map((step, i) => (
                <div key={step.name} className="flex items-stretch gap-2">
                  <div className="group relative flex-1 rounded-2xl border border-line bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-brand-500/[0.06]">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-500/30">
                      <step.icon className="h-4.5 w-4.5 text-brand-300" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {step.role}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="hidden items-center justify-center md:flex">
                      <ArrowRight className="h-4 w-4 text-brand-400/70" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {story.map((line, i) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] p-4"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/15 text-[11px] font-semibold text-brand-300 ring-1 ring-brand-500/30">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-300">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
