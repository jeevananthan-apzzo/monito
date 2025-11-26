// lib/fetchProducts.ts
import { product } from "@/pages";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { loadProductById, loadProducts } from "./load_products";

export type ProductProps = { productData: product[] };
export type ProductDetailProps = {
  productDetail: product;
  allProducts: product[];
};

export const getProductServerSideProps: GetServerSideProps<
  ProductProps
> = async () => {
  const productDataRaw = await loadProducts();

  const productData = Array.isArray(productDataRaw)
    ? productDataRaw
    : productDataRaw && typeof productDataRaw === "object"
    ? Object.values(productDataRaw)
    : [];

  return { props: { productData } };
};

// ---------- getStaticPaths (SAFER VERSION) ----------
export const getProductStaticPaths: GetStaticPaths = async () => {
  const productsRaw = await loadProducts();

  const products = Array.isArray(productsRaw)
    ? productsRaw
    : productsRaw && typeof productsRaw === "object"
    ? Object.values(productsRaw)
    : [];

  if (!Array.isArray(productsRaw)) {
    console.warn(
      "⚠ loadProducts() did NOT return an array in getStaticPaths. " +
        "Actual value:",
      productsRaw
    );
  }

  return {
    paths: products.map((p: product) => ({
      params: { product_id: String(p.id) },
    })),
    fallback: "blocking",
  };
};

// ---------- getStaticProps (SAFER VERSION) ----------
export const getProductDetailStaticProps: GetStaticProps<
  ProductDetailProps
> = async (context) => {
  const id = context.params?.product_id;

  const productDetail = await loadProductById(Number(id));

  const allProductsRaw = await loadProducts();
  const allProducts = Array.isArray(allProductsRaw)
    ? allProductsRaw
    : allProductsRaw && typeof allProductsRaw === "object"
    ? Object.values(allProductsRaw)
    : [];

  if (!Array.isArray(allProductsRaw)) {
    console.warn(
      "⚠ loadProducts() did NOT return an array in getStaticProps. " +
        "Actual value:",
      allProductsRaw
    );
  }

  return {
    props: { productDetail, allProducts },
    revalidate: 60,
    fallback: "blocking"
  };
};
