import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}
