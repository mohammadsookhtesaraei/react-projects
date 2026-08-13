import { useState, type ReactNode } from "react";

import { type BookType } from "../../constants/mockData";

import BookItem from "../BookItem/BookItem";

import styles from "./List.module.css";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";

type Props = {
  display: BookType[];
};

const List = ({ display }: Props): ReactNode => {
  const [liked, setLiked] = useState<BookType[]>([]);
  console.log(liked);

  const handleLikeBookButtonClick = (like:boolean, data:BookType, id:string) => {
    if (!like) {
      setLiked((prev) => [...prev, data]);
    } else {
      setLiked((prev) => prev.filter((item) => item.id !== id));
    }
  };


  return (
    <div className={styles.list}>
    <div className={styles.items}>
        {display.map((item) => (
        <BookItem
          key={item.id}
          data={item}
          onLike={handleLikeBookButtonClick}
        />
      ))}
    </div>
      <div className={styles.fav}>
        {liked.length === 0 ? (<p>empty list</p>) : (
          <FavoriteBooks liked={liked}/>
        )}
      </div>
    </div>
  );
};
export default List;
