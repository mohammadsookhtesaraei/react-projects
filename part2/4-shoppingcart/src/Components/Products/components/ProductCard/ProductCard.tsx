import type { ReactNode } from "react"
import type { IBook } from "../../../../types/books-interface";
import AddToCart from "../../../ui/AddToCart/AddToCart";

type ProductCardProps={
  book:IBook
};

 const ProductCard = ({book}:ProductCardProps):ReactNode => {
  const {image,price,title}=book;
  return (
    <div className="p-2 w-12/12 sm:w-6/12 md:w-4/12">
      <div className="border flex border-gray-300/30 rounded-md shadow-md  overflow-hidden" >
        <img className="w-25 block  object-cover" src={image} alt={title} />
        <div className="p-4 w-full flex flex-col justify-between">
         <h2>{title}</h2>
         <p>{price}</p>
         <AddToCart book={book}/>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
