import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import { Quicksand as Quick } from '@next/font/google';
import Header from '@components/Header';
import Script from 'next/script';
import '@styles/globals.css';

const quicksand = Quick({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-quick',
});
export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider className={quicksand.variable} value={initialState}>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-29BHL1S01N');`}
      </Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-29BHL1S01N"></Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
