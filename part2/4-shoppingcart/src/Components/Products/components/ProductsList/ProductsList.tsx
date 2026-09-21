import type { ReactNode } from "react"
import type { IBook } from "../../../../types/books-interface";
import ProductCard from "../ProductCard/ProductCard";

type ProductsListProps={
  books:IBook[]
};

 const ProductsList = ({books}:ProductsListProps):ReactNode => {
  return (
    <div className="py-16 px-8">
     <h1 className="text-3xl text-green-500 decoration-1  underline underline-offset-8 my-6 text-center">کتاب ها</h1>
     <div className="flex flex-wrap justify-center">
      {books.map((book)=>(
        <ProductCard key={book.id} book={book}/>
      ))}
     </div>
    </div>
  );
}

export default ProductsList;
