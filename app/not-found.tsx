import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="font-mono text-sm text-teal">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-paper">
        $ command not found
      </h1>
      <p className="mt-3 max-w-sm text-fog">
        This route doesn't exist. Try heading back to the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-indigo bg-indigo/10 px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-indigo/20"
      >
        cd ~/home
      </Link>
    </main>
  );
}
