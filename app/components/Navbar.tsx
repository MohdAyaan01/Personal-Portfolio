import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center text-[#edece8] mix-blend-difference">
      <Link href="/" className="font-bold text-xl tracking-widest uppercase">
        Mohd Ayaan
      </Link>
      <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
        <Link href="#experience" className="hover:text-[#ff7a33] transition-colors">Experience</Link>
        <Link href="#projects" className="hover:text-[#ff7a33] transition-colors">Projects</Link>
        <Link href="#contact" className="hover:text-[#ff7a33] transition-colors">Contact</Link>
        <button className="p-2 border border-white/20 hover:border-white/60 transition-colors ml-4 rounded-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </div>
    </nav>
  );
}