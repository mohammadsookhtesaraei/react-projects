import { useState, useEffect, type ReactNode } from "react";

// styles
import styles from "./HomePage.module.css";

// api function
import { getAllbooks } from "../../services/bookServices";
import { updateBooks } from "../../services/bookServices";

// type import
import { type BookType } from "../../types/books-interface";

// components
import SearchBox from "../../components/SearchBox/SearchBox";
import List from "../../components/List/List";


const HomePage = (): ReactNode => {

  // state -serach
  const [search, setSearch] = useState<string>("");

  // state data and display
  const [data,setData]=useState<BookType[]>([]);
  const [display, setDisplay] = useState<BookType[]>([]);
  
// liked -state -favorite book arr
  const [liked, setLiked] = useState<BookType[]>([]);


// use Effect-show data in first mount
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
  

// search-handler -onChange as callback fn
   const handleSearchChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearch(event.target.value);
  };


  // handle btn -search
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



  // handle liked array
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
