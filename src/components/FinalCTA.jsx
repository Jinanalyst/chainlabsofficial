import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="container-x">
        <div className="reveal glass-strong relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-12 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(800px circle at 50% 0%, rgba(47,123,255,0.22), transparent 60%)',
            }}
          />
          <div className="relative">
            <p className="eyebrow">Join the network</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
              From <span className="grad-text">information</span> to{' '}
              <span className="grad-text">opportunity</span>.<br />
              From <span className="grad-text">work</span> to{' '}
              <span className="grad-text">value</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400 sm:text-lg">
              ChainLabs is connecting the next generation of digital work,
              insight, and collaboration. We'd love to build it with you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@chainlabs.kr" className="btn-primary">
                Explore ChainLabs <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://chainbrief.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                See ChainBrief live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
