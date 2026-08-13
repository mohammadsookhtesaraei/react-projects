import { type ReactNode } from "react";

import { type BookType } from "../../types/books-interface";

import BookItem from "../BookItem/BookItem";

import styles from "./List.module.css";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";

type Props = {
  display: BookType[];
  liked: BookType[];
  onLiked: (like: boolean, data: BookType, id: string) => void;
};

const List = ({ display, liked, onLiked }: Props): ReactNode => {
  return (
    <div className={styles.list}>
      <div className={styles.items}>
        {display.map((item) => (
          <BookItem key={item.id} data={item} onLike={onLiked} />
        ))}
      </div>
      <div className={styles.fav}>
        {liked.length === 0 ? (
          <p>empty list</p>
        ) : (
          <FavoriteBooks liked={liked} />
        )}
      </div>
    </div>
  );
};
export default List;
