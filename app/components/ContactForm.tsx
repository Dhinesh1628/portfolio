'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-teal/40 bg-teal/5 p-6 text-center font-mono text-sm text-teal">
        ✓ message sent — I'll reply within a day or two.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md space-y-4 text-left">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-fog">
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          className="w-full rounded-md border border-line bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition-colors focus:border-indigo"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-fog">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full rounded-md border border-line bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition-colors focus:border-indigo"
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-fog">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="w-full resize-none rounded-md border border-line bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition-colors focus:border-indigo"
          placeholder="Let's talk about..."
        />
      </div>

      {status === 'error' && (
        <p className="font-mono text-xs text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-md border border-indigo bg-indigo/10 px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-indigo/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'sending...' : 'send message'}
      </button>
    </form>
  );
}
