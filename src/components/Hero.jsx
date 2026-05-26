import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const chain = ['ChainBrief', 'ChainWork', 'ChainPay', 'ChainMeet'];
  return (
    <section id="top" className="relative pb-20 pt-24 sm:pt-32">
      <div className="container-x">
        <div className="reveal max-w-4xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line-strong bg-brand-500/10 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" />
            An AI-powered platform studio
          </span>

          <h1 className="mt-7 font-display text-[44px] leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            Connecting <span className="grad-text">Information</span>,<br />
            <span className="grad-text">Work</span>, and{' '}
            <span className="grad-text">Value</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            ChainLabs builds AI-powered digital platforms that connect insights,
            talent, payments, and communities into one connected ecosystem.
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
