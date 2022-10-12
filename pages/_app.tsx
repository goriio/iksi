import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid place-items-center max-w-lg mx-auto p-4 h-screen">
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#262626',
            color: '#e5e7eb',
          },
        }}
      />
    </div>
  );
}
