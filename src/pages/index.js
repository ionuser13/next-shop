import Login from '@pages/login';
import { Quicksand } from '@next/font/google';
import Head from 'next/head';
const quick = Quicksand({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={quick.className}>
      <Head>
        <title>Yard Sale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ecommerce Platform made with Platzi API" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
