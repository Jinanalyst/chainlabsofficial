import { AlertCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  'Digital information is fragmented across feeds, channels, and apps.',
  'Talent discovery is inefficient and based on surface signals.',
  'Work and payments live in disconnected tools.',
  'Online communities often lack trust, structure, and continuity.',
];

const solutions = [
  'A single value network connecting information, credibility, work, payment, and networking.',
  'Reputation built in ChainBrief becomes leverage in ChainWork and ChainMeet.',
  'Payments and settlements flow natively through ChainPay.',
  'Communities and collaborations compound across every product.',
];

export default function Why() {
  return (
    <section className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Why ChainLabs</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            The digital stack is broken. We're rebuilding it as one chain.
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-7 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300 ring-1 ring-rose-500/30">
              <AlertCircle className="h-3.5 w-3.5" /> The Problem
            </div>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-rose-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-7 ring-1 ring-brand-500/20 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300 ring-1 ring-brand-500/30">
              <CheckCircle2 className="h-3.5 w-3.5" /> The ChainLabs Solution
            </div>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
