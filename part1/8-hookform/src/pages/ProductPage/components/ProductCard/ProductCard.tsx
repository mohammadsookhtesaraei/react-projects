import type { ReactNode } from "react"
import type { IProduct } from "../../../../types/products-interface";

type ProductCardProps=IProduct&{};

 const ProductCard = ({id,title,images,category}:ProductCardProps):ReactNode => {
  return (
    <div className="">
      <img  alt="" />
    </div>
  );
}

export default ProductCard;
