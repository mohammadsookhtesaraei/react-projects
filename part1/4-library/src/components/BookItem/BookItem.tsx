import { useEffect, useState, type ReactNode } from "react"

import styles from "./BookItem.module.css"
import { type BookType } from "../../types/books-interface";

import { FaHeart } from "react-icons/fa";

type Props={
  data:BookType,
  onLike:(like:boolean,data:BookType,id:string)=>void
}

const BookItem = ({data,onLike}:Props):ReactNode => {

  const {image,author,language,title,country,year,id,like}=data;
//  since my mockData is constant - like in first mount does not work for persist data if we change liked state
  const [liked,setLiked]=useState<boolean>(like);


  const handleLikeButtonClick=()=>{

   const newLiked=!liked;

    setLiked(newLiked);
    onLike(newLiked,data,id);
  };





 
  return (
    <div className={styles.book}>
      <div>
        <img src={image} alt="img" />
      </div>
      <div className={styles.content}>
       <h2>{title}</h2>
       <p>{author}</p>
       <p>{language}</p>
       <p>{country} - {year}</p>
      </div>
      <div className={styles.action}>
       <button onClick={handleLikeButtonClick}>
        <FaHeart color={liked ? "red" : "gray"}/>
       </button>
      </div>
    </div>
  )
}
export default BookItem