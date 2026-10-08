'use client';

import { motion } from 'framer-motion';
import { research, experience, certifications, education } from '../data/content';
import { SectionHeading } from './Projects';

export default function Research() {
  return (
    <section id="research" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="03 / my career & experience" title="Beyond shipping features" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr,1fr]">
          {/* Timeline */}
          <div className="relative space-y-8 border-l border-line pl-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-magenta-glow bg-ink" />
                {i === 0 && (
                  <span className="mb-1 inline-block rounded-full bg-magenta/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-magenta-glow">
                    Now
                  </span>
                )}
                <p className="font-mono text-xs text-teal">{e.period}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-paper">{e.role}</h3>
                <p className="font-mono text-xs text-indigo">{e.org}</p>
                <p className="mt-2 text-sm text-fog">{e.description}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: experience.length * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo bg-ink" />
              <p className="font-mono text-xs text-teal">{education.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-paper">
                {education.degree}
              </h3>
              <p className="font-mono text-xs text-indigo">{education.institution}</p>
              <p className="mt-2 text-sm text-fog">CGPA: {education.cgpa}</p>
            </motion.div>
          </div>

          {/* Side panel: research + certifications */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-xl border border-line bg-panel/60 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-teal">Research</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-paper">
                {research.title}
              </h3>
              <p className="mt-3 text-sm text-fog">{research.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-xl border border-line bg-panel/60 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-teal">
                Certifications
              </p>
              <ul className="mt-3 space-y-2.5">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-paper/85">
                    <span className="mt-0.5 text-teal">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
