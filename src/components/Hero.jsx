import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const chain = ['ChainBrief', 'ChainWork', 'ChainPay', 'ChainMeet'];
  return (
    <section id="top" className="relative pb-20 pt-24 sm:pt-32">
      <div className="container-x">
        <div className="reveal max-w-4xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line-strong bg-brand-500/10 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" />
            An integrated platform company
          </span>

          <h1 className="mt-7 font-display text-[40px] leading-[1.06] font-bold sm:text-6xl lg:text-[68px]">
            ChainLabs connects{' '}
            <span className="grad-text">information</span>,{' '}
            <span className="grad-text">work</span>,{' '}
            <span className="grad-text">relationships</span>, and{' '}
            <span className="grad-text">payments</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            ChainLabs builds integrated platforms that help people discover
            reliable information, find business opportunities, build trusted
            relationships, and move payments faster — all in one connected
            ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ecosystem" className="btn-primary">
              Explore Ecosystem <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="btn-ghost">
              View Products
            </a>
          </div>
        </div>

        <div className="reveal mt-20">
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              {chain.map((name, i) => (
                <div key={name} className="flex items-center gap-2 flex-1 min-w-[140px]">
                  <div className="flex-1 rounded-xl border border-line-strong bg-brand-500/10 px-4 py-3 text-center font-display text-sm font-semibold text-white sm:text-base">
                    {name}
                  </div>
                  {i < chain.length - 1 && (
                    <div className="hidden h-px w-6 bg-gradient-to-r from-transparent via-line-strong to-transparent sm:block" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
              One connected value network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
