'use client';

import { motion } from 'framer-motion';
import { skills } from '../data/content';
import { SectionHeading } from './Projects';

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="stack" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02 / toolbox" title="What I build with" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-lg border border-line bg-panel/50 p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-indigo">
                {category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-ink px-2.5 py-1 font-mono text-xs text-paper/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
