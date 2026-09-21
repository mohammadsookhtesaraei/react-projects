import { useEffect, useState, type ReactNode } from "react";

import { type IBook } from "../../types/books-interface";
import axios from "axios";
import { getProduct } from "../../services/productService";
import ProductsList from "./components/ProductsList/ProductsList";

const Products = (): ReactNode => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await getProduct();
        setBooks(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message);
        } else {
          console.log("unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);
  return <ProductsList books={books} loading={isLoading} error={error}/>
};

export default Products;
