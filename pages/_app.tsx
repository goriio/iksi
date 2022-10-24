import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

const app = {
  title: 'iksi | url shortener',
  description: '🔗 Free custom url shortener',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{app.title}</title>
        <meta name="description" content={app.description} />

        <meta property="og:title" content={app.title} />
        <meta property="og:description" content={app.description} />
        <meta property="og:image" content="/og-image.png" />

        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
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
