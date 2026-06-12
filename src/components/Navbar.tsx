import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between rounded-md border border-sky-100/70 bg-sky-50/25 px-4 py-3 shadow-[0_18px_55px_-48px_rgba(17,24,22,0.55)] backdrop-blur-xl">
        <Link href='/' className="group flex h-10 w-10 items-center justify-center rounded-md border border-sky-100/70 bg-white/35 font-semibold text-[#111816] transition duration-200 hover:-translate-y-0.5 hover:bg-sky-50/55">
          <p className="tracking-normal">NW</p>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-[#2f403b] sm:gap-2">
          <Link href="/about" className={`rounded-md px-3 py-2 transition-colors duration-200 hover:bg-sky-50/45 hover:text-[#111816] ${isActive('/about') ? 'bg-sky-100/45 text-[#111816]' : ''}`}>About</Link>
          <Link href="/projects" className={`rounded-md px-3 py-2 transition-colors duration-200 hover:bg-sky-50/45 hover:text-[#111816] ${isActive('/projects') ? 'bg-sky-100/45 text-[#111816]' : ''}`}>Projects</Link>
          <Link href="/contact" className={`rounded-md px-3 py-2 transition-colors duration-200 hover:bg-sky-50/45 hover:text-[#111816] ${isActive('/contact') ? 'bg-sky-100/45 text-[#111816]' : ''}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
