import { Newspaper, Briefcase, Wallet } from 'lucide-react';

const categories = [
  {
    icon: Newspaper,
    name: 'Media & Content Revenue',
    desc: 'Insight, attention, and credibility, monetized.',
    items: [
      'Advertising and sponsorships',
      'Premium content and analyst reports',
      'Memberships and subscriptions',
    ],
  },
  {
    icon: Briefcase,
    name: 'Work & Marketplace Revenue',
    desc: 'Connecting people to the work that matches them.',
    items: [
      'Work transaction fees',
      'Employer subscriptions',
      'Featured profiles and promoted listings',
    ],
  },
  {
    icon: Wallet,
    name: 'Payment & Business Infrastructure Revenue',
    desc: 'The financial and operational backbone.',
    items: [
      'Payment management and settlement fees',
      'B2B packages and enterprise plans',
      'Consulting, events, and partnerships',
    ],
  },
];

export default function BusinessModel() {
  return (
    <section className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Business Model</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Three revenue engines. One ecosystem.
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">
            ChainLabs generates revenue across three connected categories —
            each strong on its own, stronger together.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
          {categories.map(({ icon: Icon, name, desc, items }, i) => (
            <article
              key={name}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-brand-500/[0.05]"
            >
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-slate-500">
                0{i + 1}
              </span>
              <div className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/30">
                <Icon className="h-5 w-5 text-brand-300" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
              <ul className="mt-5 space-y-2.5">
                {items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
