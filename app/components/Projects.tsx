'use client';

import { useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '../data/content';

function TiltCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      className="group rounded-xl border border-line bg-panel/60 p-6 transition-[border-color,transform] duration-200 ease-out hover:border-indigo/60 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-1 font-mono text-xs text-fog">
            {String(index + 1).padStart(2, '0')} / project
          </div>
          <h3 className="font-display text-2xl font-semibold text-paper">{p.name}</h3>
        </div>
        <div className="flex gap-3 font-mono text-xs">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-line px-3 py-1.5 text-fog transition-colors hover:border-teal hover:text-teal"
            >
              source ↗
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-indigo/60 bg-indigo/10 px-3 py-1.5 text-paper transition-colors hover:bg-indigo/20"
            >
              live demo ↗
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-fog">{p.description}</p>

      {p.metric && (
        <p className="mt-3 inline-block rounded-full border border-teal/30 bg-teal/5 px-3 py-1 font-mono text-xs text-teal">
          ↳ {p.metric}
        </p>
      )}

      <ul className="mt-4 space-y-1.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-paper/80">
            <span className="mt-1 text-teal">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-fog"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01 / selected work" title="Things I have shipped" />

        <div className="mt-12 space-y-6" style={{ perspective: '1000px' }}>
          {featured.map((p, i) => (
            <TiltCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {other.map((p) => (
              <div
                key={p.slug}
                className="rounded-lg border border-line bg-panel/40 p-5 transition-colors hover:border-line/80"
              >
                <h4 className="font-display text-lg font-semibold text-paper">{p.name}</h4>
                <p className="mt-2 text-sm text-fog">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-xs text-indigo">
                      #{s.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">{title}</h2>
    </div>
  );
}
