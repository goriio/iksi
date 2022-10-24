import Link from 'next/link';

export function Footer() {
  return (
    <footer className="absolute bottom-4 text-sm text-gray-400">
      <a
        href="https://github.com/goriio/iksi"
        className="hover:underline hover:text-gray-200"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{' '}
      &middot;{' '}
      <Link href="/docs" className="hover:underline">
        <a className="hover:underline hover:text-gray-200">API Documentation</a>
      </Link>
    </footer>
  );
}
