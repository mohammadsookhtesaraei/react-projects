import { useState, type PropsWithChildren } from "react";

type Props = PropsWithChildren;
import { SearchContext } from "../context/SearchContext";

const SearchProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SearchContext value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext>
  );
};
export default SearchProvider;
