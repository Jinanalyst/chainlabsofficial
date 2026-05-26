import {
  Megaphone,
  Crown,
  IdCard,
  Receipt,
  Building2,
  Wallet,
  Package,
  Mic,
  Star,
} from 'lucide-react';

const items = [
  { icon: Megaphone, label: 'Advertising' },
  { icon: Crown, label: 'Premium content' },
  { icon: IdCard, label: 'Memberships' },
  { icon: Receipt, label: 'Work transaction fees' },
  { icon: Building2, label: 'Employer subscriptions' },
  { icon: Wallet, label: 'Payment management fees' },
  { icon: Package, label: 'B2B packages' },
  { icon: Mic, label: 'Consulting & events' },
  { icon: Star, label: 'Featured profiles & listings' },
];

export default function BusinessModel() {
  return (
    <section className="py-28 sm:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Business Model</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            A diversified, ecosystem-wide revenue model.
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">
            Each ChainLabs product generates revenue on its own — and unlocks
            new revenue lines when connected to the rest of the ecosystem.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass group flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-500/[0.06]"
            >
              <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-500/30">
                <Icon className="h-4 w-4 text-brand-300" />
              </span>
              <span className="text-sm font-medium text-slate-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
