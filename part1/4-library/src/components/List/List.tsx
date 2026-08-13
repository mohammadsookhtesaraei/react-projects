import type { ReactNode } from "react";

import { type BookType } from "../../constants/mockData";
import BookItem from "../BookItem/BookItem";

type Props = {
  display: BookType[];
};

const List = ({ display }: Props): ReactNode => {
  return (
    <div>
      {display.map((item) => (
        <BookItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default List;
