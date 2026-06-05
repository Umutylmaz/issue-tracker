import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  return (
    <nav className="flex space-x-6 border-b border-zinc-500 h-14 items-center px-2 mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      {links.map((link) => (
        <Link
          className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
