'use client';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b border-zinc-500 h-14 items-center px-2 mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      {links.map((link) => (
        <Link
          className={classnames({
            'hover:text-zinc-900': link.href === currentPath,
            'text-zinc-500': link.href !== currentPath,
            'transition-colors': true,
          })}
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
