import { type ReactNode } from "react";

// styles
import styles from "./List.module.css";

// components
import BookItem from "../BookItem/BookItem";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";

// type import
import { type BookType } from "../../types/books-interface";

// type
type Props = {
  display: BookType[];
  liked: BookType[];
  onLiked: (like: boolean, data: BookType, id: string) => void;
};

const List = ({ display, liked, onLiked }: Props): ReactNode => {
  return (
    <div className={styles.list}>
      {/* list rendering */}
      <div className={styles.items}>
        {display.map((item) => (
          <BookItem key={item.id} data={item} onLike={onLiked} />
        ))}
      </div>

      {/* show fav book component */}
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
