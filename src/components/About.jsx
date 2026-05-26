import { Layers, Network, Boxes } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'A platform studio',
    body: 'We design and operate connected products under one brand — each one solving a clear part of the digital work and information stack.',
  },
  {
    icon: Network,
    title: 'Connected by design',
    body: 'Every ChainLabs product is built to interoperate. Information feeds opportunity. Work flows into payments. Relationships compound across the network.',
  },
  {
    icon: Boxes,
    title: 'AI-native infrastructure',
    body: 'Discovery, matching, summarization, and trust signals are powered by modern AI models, so creators and operators can move faster with less friction.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">About ChainLabs</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            One integrated platform company. One business ecosystem.
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">
            ChainLabs is an integrated platform company that connects
            information, work, relationships, and payments into one practical
            business ecosystem — built so every interaction adds to a single,
            shared value network.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/30">
                <Icon className="h-5 w-5 text-brand-300" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
