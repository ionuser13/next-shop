import ProductList from '@containers/ProductList';
import { Quicksand } from '@next/font/google';
import Head from 'next/head';
const quick = Quicksand({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={quick.className}>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </div>
  );
}
