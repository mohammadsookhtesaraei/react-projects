import { useState, useEffect, type ReactNode } from "react";

import styles from "./HomePage.module.css";

import { type BookType } from "../../types/books-interface";

import SearchBox from "../../components/SearchBox/SearchBox";
import List from "../../components/List/List";
import { getAllbooks } from "../../services/bookServices";
import { updateBooks } from "../../services/bookServices";

const HomePage = (): ReactNode => {

  const [search, setSearch] = useState<string>("");

  const [data,setData]=useState<BookType[]>([]);
  const [display, setDisplay] = useState<BookType[]>([]);
  

  const [liked, setLiked] = useState<BookType[]>([]);



  useEffect(() => {
    const getData = async () => {
      const books=await getAllbooks()
      try {
      // @ts-ignore
        setData(books);
      // @ts-ignore

        setDisplay(books);

      // @ts-ignore
        setLiked(books.filter((book)=>book.like))
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);



    const handleLikeBookButtonClick = async (
    like: boolean,
    data: BookType,
    id: string,
  ) => {
    if (like) {
      const newData = { ...data, like: like };
      setLiked((prev) => [...prev, newData]);
      await updateBooks(id, newData);
    } else {
      setLiked((prev) => prev.filter((item) => item.id !== id));
      const newData = { ...data, like: false };
      await updateBooks(id, newData);
    }
  };

  const handleSearchChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearch(event.target.value);
  };

  const handleSearchButtonClick = (): void => {
    if (!search) {
      setDisplay(data);
      return;
    }

    const newBooks = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    setDisplay(newBooks);
  };

  return (
    <div className={styles.home}>
      <SearchBox
        search={search}
        onSearchChange={handleSearchChangeInput}
        onSearchClick={handleSearchButtonClick}
      />
      <List
        display={display}
        liked={liked}
        onLiked={handleLikeBookButtonClick}
      />
    </div>
  );
};
export default HomePage;
