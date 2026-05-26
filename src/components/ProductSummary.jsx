import { FileText, Briefcase, Users, CreditCard } from 'lucide-react';

const items = [
  {
    icon: FileText,
    name: 'ChainBrief',
    desc: 'Connects readers with reliable, noise-reduced information.',
  },
  {
    icon: Briefcase,
    name: 'ChainWork',
    desc: 'Connects employers with workers, freelancers, and talent.',
  },
  {
    icon: Users,
    name: 'ChainMeet',
    desc: 'Helps people meet and build professional relationships.',
  },
  {
    icon: CreditCard,
    name: 'ChainPay',
    desc: 'Connects payment networks and settlement flows faster.',
  },
];

export default function ProductSummary() {
  return (
    <section className="relative -mt-4 pb-16 sm:pb-24">
      <div className="container-x">
        <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-brand-500/[0.06]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-500/30">
                  <Icon className="h-4 w-4 text-brand-300" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
