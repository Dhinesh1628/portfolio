'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/content';

export default function Hero() {
  const [glowOn, setGlowOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGlowOn(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 sm:pl-24"
    >
      <div className="absolute inset-0 bg-grid bg-grid pointer-events-none opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        {/* Left: identity */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-magenta-glow"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-2 font-display text-4xl font-semibold leading-[1.05] text-paper sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 font-display text-xl text-fog sm:text-2xl"
          >
            An <span className="text-gradient font-semibold">AI-Engineer</span> &{' '}
            <span className="text-gradient font-semibold">Full-Stack Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-5 max-w-md text-fog"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="rounded-md border border-magenta bg-magenta/10 px-5 py-3 font-mono text-sm text-paper transition-colors hover:bg-magenta/20"
            >
              view work →
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-3 font-mono text-sm text-fog transition-colors hover:border-magenta-glow hover:text-magenta-glow"
            >
              get in touch
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-paper">{s.value}</div>
                <div className="font-mono text-xs text-fog">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: glowing avatar */}
        <div className="relative mx-auto flex h-[360px] w-[300px] items-center justify-center sm:h-[440px] sm:w-[360px]">
          <div
            className={`absolute h-64 w-64 rounded-full bg-magenta/30 blur-[80px] transition-opacity duration-1000 ${
              glowOn ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <svg
              viewBox="0 0 240 280"
              className="relative h-72 w-64 sm:h-80 sm:w-72"
              aria-label="Illustrated avatar of Dhinesh Kandukuri"
            >
              <defs>
                <radialGradient id="rim" cx="50%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#2a2f3d" />
                  <stop offset="100%" stopColor="#10131a" />
                </radialGradient>
                <linearGradient id="edge" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E879F9" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              {/* shoulders */}
              <path
                d="M30 280 C30 210 70 190 120 190 C170 190 210 210 210 280 Z"
                fill="url(#rim)"
                stroke="url(#edge)"
                strokeWidth="2"
              />
              {/* neck */}
              <rect x="100" y="160" width="40" height="40" fill="url(#rim)" />
              {/* head */}
              <ellipse cx="120" cy="120" rx="62" ry="68" fill="url(#rim)" stroke="url(#edge)" strokeWidth="2.5" />
              {/* ears */}
              <ellipse cx="58" cy="124" rx="10" ry="16" fill="url(#rim)" stroke="url(#edge)" strokeWidth="1.5" />
              <ellipse cx="182" cy="124" rx="10" ry="16" fill="url(#rim)" stroke="url(#edge)" strokeWidth="1.5" />
              {/* hair */}
              <path
                d="M62 96 C62 56 90 38 120 38 C150 38 178 56 178 96 C178 80 160 70 120 70 C80 70 62 80 62 96 Z"
                fill="#15171f"
                stroke="url(#edge)"
                strokeWidth="2"
              />
              {/* eyes */}
              <circle cx="98" cy="120" r="5" fill="#E8EAED" />
              <circle cx="142" cy="120" r="5" fill="#E8EAED" />
              {/* eyebrows */}
              <rect x="86" y="106" width="22" height="3.5" rx="1.5" fill="#94A3B8" />
              <rect x="132" y="106" width="22" height="3.5" rx="1.5" fill="#94A3B8" />
              {/* smile */}
              <path d="M104 142 Q120 152 136 142" stroke="#94A3B8" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>

            <motion.span
              animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-10 h-3 w-3 rounded-full bg-magenta-glow shadow-[0_0_16px_4px_rgba(232,121,249,0.6)]"
            />
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-4 bottom-16 h-2 w-2 rounded-full bg-indigo shadow-[0_0_14px_4px_rgba(99,102,241,0.6)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
