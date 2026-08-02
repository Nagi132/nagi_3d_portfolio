import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-md border border-sky-100/70 bg-sky-50/25 px-3 py-3 shadow-[0_18px_55px_-48px_rgba(17,24,22,0.55)] backdrop-blur-xl sm:px-4">
        <Link href='/' className="group flex h-10 w-10 items-center justify-center rounded-md border border-sky-100/70 bg-white/35 font-semibold text-[#111816] transition duration-200 hover:-translate-y-0.5 hover:bg-sky-50/55">
          <p className="tracking-normal">NW</p>
        </Link>
        <nav aria-label="Primary navigation" className="flex min-w-0 items-center gap-0.5 text-xs font-medium text-[#2f403b] sm:gap-2 sm:text-sm">
          <Link href="/about" className={`rounded-md px-2 py-2 transition-colors duration-200 hover:bg-sky-50/45 hover:text-[#111816] sm:px-3 ${isActive('/about') ? 'bg-sky-100/45 text-[#111816]' : ''}`}>About</Link>
          <Link href="/projects" className={`rounded-md px-2 py-2 transition-colors duration-200 hover:bg-sky-50/45 hover:text-[#111816] sm:px-3 ${isActive('/projects') ? 'bg-sky-100/45 text-[#111816]' : ''}`}>Projects</Link>
          <Link href="/contact" className={`rounded-md px-2 py-2 transition-colors duration-200 hover:bg-sky-50/45 hover:text-[#111816] sm:px-3 ${isActive('/contact') ? 'bg-sky-100/45 text-[#111816]' : ''}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
