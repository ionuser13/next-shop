import ProductList from '@containers/ProductList';
import { Quicksand } from '@next/font/google';
const quick = Quicksand({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={quick.className}>
      <ProductList />
    </div>
  );
}
