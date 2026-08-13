import { useState, type ReactNode } from "react";

import styles from "./HomePage.module.css";

import { books } from "../../constants/mockData";
import { type BookType } from "../../constants/mockData";

import SearchBox from "../../components/SearchBox/SearchBox";
import List from "../../components/List/List";

const HomePage = (): ReactNode => {
  console.log("home render");
  const [search, setSearch] = useState<string>("");
  const [display, setDisplay] = useState<BookType[]>(books);
  

  const handleSearchChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearch(event.target.value);
  };

  const handleSearchButtonClick = (): void => {
    if (!search) {
      setDisplay(books);
      return;
    }

    const newBooks = display.filter((item) =>
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
      <List display={display} />
    </div>
  );
};
export default HomePage;
