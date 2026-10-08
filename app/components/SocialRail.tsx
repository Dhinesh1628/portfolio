import { profile } from '../data/content';

const icons = [
  { label: 'GitHub', href: profile.github, glyph: 'GH' },
  { label: 'LinkedIn', href: profile.linkedin, glyph: 'in' },
];

export default function SocialRail() {
  return (
    <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 pb-8 sm:flex">
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={icon.label}
          className="font-mono text-xs text-fog transition-colors hover:text-magenta-glow"
        >
          {icon.glyph}
        </a>
      ))}
      <span className="h-16 w-px bg-line" />
    </div>
  );
}
