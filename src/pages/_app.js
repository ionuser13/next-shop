import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Script from 'next/script';
import { quicksand } from '../fonts/font';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <main className={quicksand.className}>
      <AppContext.Provider value={initialState}>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-29BHL1S01N');`}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-29BHL1S01N"></Script>
        <Component {...pageProps} />
      </AppContext.Provider>
    </main>
  );
}
