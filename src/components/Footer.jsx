import Logo from './Logo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 text-sm text-slate-500 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Logo height={44} />
          <span>© {year}</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://chainbrief.kr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            ChainBrief
          </a>
          <a href="#products" className="hover:text-white">ChainWork</a>
          <a href="#products" className="hover:text-white">ChainPay</a>
          <a href="#products" className="hover:text-white">ChainMeet</a>
          <a href="mailto:hello@chainlabs.kr" className="hover:text-white">
            hello@chainlabs.kr
          </a>
        </nav>
      </div>
    </footer>
  );
}
