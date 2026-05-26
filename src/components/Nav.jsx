import Logo from './Logo.jsx';

const links = [
  { href: '#about', label: 'About' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#products', label: 'Products' },
  { href: '#roadmap', label: 'Roadmap' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line backdrop-blur-xl bg-ink-900/60">
      <div className="container-x flex items-center justify-between py-4">
        <a href="#top" className="group flex items-center">
          <Logo size={30} />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-line-strong px-4 py-2 text-sm text-white transition-colors hover:border-brand-500 hover:bg-brand-500/10"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-line-strong px-4 py-2 text-sm text-white md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
