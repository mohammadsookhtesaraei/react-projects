import { useState, type ReactNode } from "react";

import styles from "./HomePage.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";

const HomePage = (): ReactNode => {

  const [search,setSearch]=useState("");
  
  const handleSearchChangeInput=(event:React.ChangeEvent<HTMLInputElement>) :void=>{
  setSearch(event.target.value);
  };



  return (
   <div className={styles.home}>
    <SearchBox search={search} onSearchChange={handleSearchChangeInput} />
  </div>
  )
};
export default HomePage;
