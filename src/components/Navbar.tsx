import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 transform-origin-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">NW</p>
        </Link>
        <nav className="hidden md:flex text-lg gap-7 font-medium">
          <Link href="/about" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/about') ? 'text-blue-500' : 'text-black'}`}>About</Link>
          <Link href="/projects" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/projects') ? 'text-blue-500' : 'text-black'}`}>Projects</Link>
        </nav>
        <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden shadow-md rounded-lg mt-2 mx-4">
          <nav className="flex flex-col text-lg gap-4 font-medium p-4">
            <Link href="/about" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/about') ? 'text-blue-500' : 'text-black'}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/projects" className={`transition-colors duration-300 hover:text-blue-500 ${isActive('/projects') ? 'text-blue-500' : 'text-black'}`} onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
