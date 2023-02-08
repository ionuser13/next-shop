import ProductList from '@containers/ProductList';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <ProductList />
   </>
  );
}
