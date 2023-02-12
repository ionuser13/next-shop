import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import { quicksand } from './font';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider className={quicksand.variable} value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
