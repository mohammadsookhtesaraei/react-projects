import type { ReactNode } from "react"

import { useProducts } from "../../hooks/useProducts";
import ProductLists from "./components/ProductLists/ProductLists";


type ProductPageProps={};

 const ProductPage = ({}:ProductPageProps):ReactNode => {

  const {data,isPending}=useProducts();


  if(!data || data.length === 0) return []
  
  if(isPending) {
    return <p>loading...products page</p>
  }

  
  return (
    <div className="container mx-auto px-4 my-2">
     <ProductLists products={data}/>
    </div>
  );
}

export default ProductPage;
