import type { ReactNode } from "react"
import type { IProduct } from "../../../../types/products-interface";
import ProductCard from "../ProductCard/ProductCard";

type ProductListsProps={
  products:IProduct[]
};

 const ProductLists = ({products}:ProductListsProps):ReactNode => {
  return (
    <div className="">
      {products.map((product)=>(
        <ProductCard key={product.id} {...product}/>
      ))}
    </div>
  );
}

export default ProductLists;
