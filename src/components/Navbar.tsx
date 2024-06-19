import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="header">
      <Link href='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">NW</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link href="/about"className={isActive('/about') ? 'text-blue-500' : 'text-black'}>About
        </Link>
        <Link href="/projects"className={isActive('/projects') ? 'text-blue-500' : 'text-black'}>Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
