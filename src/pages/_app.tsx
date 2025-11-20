import Layout from "@/components/Layout";
import { loadProducts } from "@/lib/load_products";
import "@/styles/globals.css";
import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";
import { product } from ".";
import ContextProvider from "@/context/AppContext";


export default function App({ Component, pageProps }: AppProps) {
  const { productData, ...rest } = pageProps;
  
  return (
    // <ContextProvider productData={productData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </ContextProvider>
  );
}
