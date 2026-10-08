'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#work', label: 'WORK' },
  { href: '#stack', label: 'STACK' },
  { href: '#research', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 font-mono text-sm">
        <a href="#top" className="text-paper hover:text-teal transition-colors">
          <span className="text-indigo">~/</span>dhinesh
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="tracking-widest text-fog transition-colors hover:text-magenta"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-paper md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-ink px-6 pb-4 font-mono text-sm md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-fog hover:text-teal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
