import {
  FileText,
  Briefcase,
  CreditCard,
  Users,
  ArrowUpRight,
} from 'lucide-react';

const products = [
  {
    icon: FileText,
    name: 'ChainBrief',
    tagline: 'Insight & Community Platform',
    desc: 'Discover brief insights, share perspectives, and grow as a trusted creator or analyst. ChainBrief is where credible information is created and signal rises above noise.',
    features: [
      'Daily briefs & analyst posts',
      'Reputation & credibility signals',
      'Community discussion and curation',
      'Creator growth tools',
    ],
    href: 'https://chainbrief.kr',
    live: true,
  },
  {
    icon: Briefcase,
    name: 'ChainWork',
    tagline: 'Digital Work Marketplace',
    desc: 'A modern marketplace connecting companies and startups with freelancers, creators, researchers, marketers, designers, developers, and operators.',
    features: [
      'One-time tasks & projects',
      'Monthly retainers',
      'Long-term partnerships',
      'AI-assisted matching',
    ],
    href: 'https://chainwork.chainbrief.kr',
    live: true,
  },
  {
    icon: CreditCard,
    name: 'ChainPay',
    tagline: 'Payment & Settlement System',
    desc: 'The financial backbone of the ChainLabs ecosystem — managing payment requests, status, platform fees, invoices, receipts, and admin approvals.',
    features: [
      'Payment requests & approvals',
      'Settlement history & invoices',
      'Platform fee management',
      'Transparent receipts',
    ],
    href: 'https://chainwork.chainbrief.kr/#/pay',
    live: true,
  },
  {
    icon: Users,
    name: 'ChainMeet',
    tagline: 'Networking & Collaboration Platform',
    desc: 'Where experts, founders, creators, companies, and communities meet — through online events, paid consultations, and partnership opportunities.',
    features: [
      '1:1 expert consultations',
      'Online events & meetups',
      'Partnership matching',
      'Communities and circles',
    ],
    live: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Products</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Four products. One value network.
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">
            Each ChainLabs product is a stand-alone platform — and a node in a
            larger ecosystem. Use one. Use all four. They get better together.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ icon: Icon, name, tagline, desc, features, href, live, index }) {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <article
      onPointerMove={handleMove}
      className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-card sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(47,123,255,0.12), transparent 60%)',
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/30">
              <Icon className="h-5 w-5 text-brand-300" />
            </div>
            <span className="font-display text-xs font-semibold tracking-[0.18em] text-slate-500">
              0{index}
            </span>
          </div>
          {live ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          ) : (
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-slate-400 ring-1 ring-line-strong">
              In development
            </span>
          )}
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold">{name}</h3>
        <p className="mt-1 text-sm text-brand-300">{tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{desc}</p>

        <ul className="mt-5 grid grid-cols-2 gap-2">
          {features.map((f) => (
            <li
              key={f}
              className="rounded-lg border border-line bg-white/[0.02] px-3 py-2 text-xs text-slate-300"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
            >
              Learn more <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
