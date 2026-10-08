'use client';

import { motion } from 'framer-motion';
import { profile } from '../data/content';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-line bg-panel/60 p-10 text-center sm:p-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal">04 / contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Let's build something.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-fog">
            Open to SDE and Generative AI internship roles. Reach out and I'll get back within a
            day or two.
          </p>

          <ContactForm />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-line pt-6 font-mono text-xs text-fog">
            <span>or reach me directly:</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-paper underline-offset-4 hover:text-teal hover:underline"
            >
              {profile.email}
            </a>
            <span>·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal hover:underline underline-offset-4"
            >
              github ↗
            </a>
            <span>·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal hover:underline underline-offset-4"
            >
              linkedin ↗
            </a>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center gap-2 border-t border-line pt-8 text-center font-mono text-xs text-fog sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </footer>
      </div>
    </section>
  );
}
