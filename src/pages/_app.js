import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import { Quicksand as Quick } from '@next/font/google';
import Header from '@components/Header';
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
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
