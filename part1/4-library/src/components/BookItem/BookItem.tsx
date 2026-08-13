import { useState, type ReactNode } from "react"

import styles from "./BookItem.module.css"
import { type BookType } from "../../constants/mockData";

import { FaHeart } from "react-icons/fa";

type Props={
  data:BookType,
  onLike:(like:boolean,data:BookType,id:string)=>void
}

const BookItem = ({data,onLike}:Props):ReactNode => {

  const {image,author,language,title,country,year,id}=data;

  const [like,setLike]=useState(false);

  const handleLikeButtonClick=()=>{
    setLike((prev)=> !prev);
    onLike(like,data,id);
  }
 
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
        <FaHeart color={like ? "red" : "black"}/>
       </button>
      </div>
    </div>
  )
}
export default BookItem