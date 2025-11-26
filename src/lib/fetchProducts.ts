// lib/fetchProducts.ts
import { product } from "@/pages";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { loadProductById, loadProducts } from "./load_products";

export type ProductProps = { productData: product[] };
export type ProductDetailProps = { productDetail: product, allProducts: product[] };

export const getProductServerSideProps: GetServerSideProps<
  ProductProps
> = async () => {
  const productData = await loadProducts();
  return { props: { productData } };
};

// / ---------- Reusable: getStaticPaths for product detail ----------
export const getProductStaticPaths: GetStaticPaths = async () => {
  const products = await loadProducts();

  return {
    paths: products.map((p: product) => ({
      params: { product_id: String(p.id) },
    })),
    fallback: false, // or 'blocking'
  };
};

// ---------- Reusable: getStaticProps for product detail ----------
export const getProductDetailStaticProps: GetStaticProps<
  ProductDetailProps
> = async (context) => {
  const id = context.params?.product_id;

  const productDetail = await loadProductById(Number(id));
  const allProducts = await loadProducts();

  return {
    props: { productDetail, allProducts }, revalidate: 60,
  };
};
