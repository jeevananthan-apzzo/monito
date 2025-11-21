import { loadProducts } from "@/lib/load_products";
import { product } from "@/pages";
import { GetServerSideProps } from "next";
import { createContext, ReactNode, use, useContext } from "react";

type ProductContextType = {
  productData: product[];
};

const AppContext = createContext<ProductContextType | undefined>(undefined);

//------ SSR --------
export const getServerSideProps = (async () => {
  const productData = await loadProducts(); 
  // console.log(productData);

  return { props: { productData } };
}) satisfies GetServerSideProps<{ productData: product }>;

const ContextProvider = ({
  children,
  productData,
}: {
  children: ReactNode;
  productData: product[];
}) => {

  return (
    <AppContext.Provider value={{ productData }}>{children}</AppContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useProducts must be used within ProductProvider");
  return context;
};

export default ContextProvider;
