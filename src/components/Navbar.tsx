import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <Link
          href="/"
          aria-current={isActive('/') ? 'page' : undefined}
          className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border bg-white/60 text-sm font-semibold text-[#111816] shadow-[0_16px_42px_-28px_rgba(17,24,22,0.7)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/80 sm:h-12 sm:w-12 ${
            isActive('/') ? 'border-sky-300/90' : 'border-white/75'
          }`}
        >
          <span className="tracking-[0.04em]">NW</span>
          {isActive('/') && (
            <span className="absolute bottom-1.5 h-0.5 w-3 rounded-full bg-sky-500" aria-hidden="true" />
          )}
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex min-w-0 items-center rounded-md border border-white/75 bg-white/60 p-1 text-xs font-medium text-[#35443f] shadow-[0_16px_42px_-28px_rgba(17,24,22,0.7)] backdrop-blur-xl sm:text-sm"
        >
          {navLinks.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded px-2.5 py-2 transition-colors duration-200 hover:bg-sky-50/60 hover:text-[#111816] sm:px-4 ${
                  active
                    ? 'text-[#111816] after:absolute after:inset-x-2.5 after:bottom-1 after:h-px after:bg-sky-500 sm:after:inset-x-4'
                    : ''
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
