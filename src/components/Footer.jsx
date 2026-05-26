import Logo from './Logo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-line py-12">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Logo size={24} />
            <span>© {year}</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://chainbrief.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              ChainBrief
            </a>
            <a
              href="https://chainwork.chainbrief.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              ChainWork
            </a>
            <a
              href="https://chainwork.chainbrief.kr/#/pay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              ChainPay
            </a>
            <a href="#products" className="hover:text-white">
              ChainMeet
            </a>
            <a href="mailto:hello@chainlabs.kr" className="hover:text-white">
              hello@chainlabs.kr
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-line/70 pt-6 text-xs leading-relaxed text-slate-500">
          <p className="font-medium text-slate-400">
            체인 랩스 <span className="text-slate-500">(Chain Labs)</span>
          </p>
          <p className="mt-1">
            <span>대표 장진우</span>
            <span className="mx-2 text-slate-600">·</span>
            <span>사업자등록번호 382-25-02223</span>
          </p>
          <p className="mt-1">
            경기도 성남시 중원구 여수울로 50, 406동 403호
          </p>
        </div>
      </div>
    </footer>
  );
}
