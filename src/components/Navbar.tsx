import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 hover:rotate-3 hover:shadow-cyan-500/50 duration-300 ease-in-out">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">NW</p>
        </Link>
        <nav className="flex text-lg gap-4 md:gap-7 font-medium">
          <Link href="/about" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/about') ? 'text-blue-500' : 'text-black'}`}>About</Link>
          <Link href="/projects" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/projects') ? 'text-blue-500' : 'text-black'}`}>Projects</Link>
          <Link href="/contact" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/contact') ? 'text-blue-500' : 'text-black'}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
