import { loadProducts } from "@/lib/load_products";
import { product } from "@/pages";
import { GetServerSideProps } from "next";
import {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

export type User = {
  username: string;
  userId: number;
  token: string;
};

type ProductContextType = {
  productData: product[];
  userData: User;
};

const AppContext = createContext<ProductContextType | undefined>(undefined);

//------ SSR --------
// export const getServerSideProps = (async () => {
//   const productData = await loadProducts();
//   // console.log(productData);

//   return { props: { productData } };
// }) satisfies GetServerSideProps<{ productData: product }>;

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [productData, setProductData] = useState<product[]>([]);
  const [userData, setUserData] = useState<User | any>(null);

  const fetchProducts = async () => {
    const data: product[] = await loadProducts();
    setProductData(data);
  };

  const fetchUserById = async (id: number) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`);
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json(); // actual object
      console.log(data); // 🔹 actual user object
      setUserData(data); // sets state correctly
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    const userInfo = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
    userInfo?.userId ? fetchUserById(userInfo.userId) : fetchUserById(1);
  }, []);

  return (
    <AppContext.Provider value={{ productData, userData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useProducts must be used within ProductProvider");
  return context;
};

export default ContextProvider;
