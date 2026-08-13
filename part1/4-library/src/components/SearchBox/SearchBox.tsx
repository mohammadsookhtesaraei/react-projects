import type { ReactNode } from "react"


import styles from "./SearchBox.module.css"

// type
type Props = {
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick:()=>void
};


const SearchBox = ({search,onSearchChange,onSearchClick}:Props):ReactNode => {

  const handleSearchChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    onSearchChange(event);
  };

  return (
    <div className={styles.search}>
     <input type="text" name="search" value={search} onChange={handleSearchChange} placeholder="search" />
     <button onClick={onSearchClick}>search</button>
    </div>
  )
}
export default SearchBox