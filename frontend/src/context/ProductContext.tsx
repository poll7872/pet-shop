import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { getProducts, createProduct, IProduct } from "../api/products";

interface ProductsContextType {
  products: IProduct[];
  fetchProducts: () => Promise<void>;
  addProduct: (product: Omit<IProduct, "_id">) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error obteniendo productos", error);
    }
  }, []); // Sin dependencias porque `getProducts` es estable

  const addProduct = useCallback(async (product: Omit<IProduct, "_id">) => {
    try {
      const newProduct = await createProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (error) {
      console.error("Error al agregar producto", error);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, fetchProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

