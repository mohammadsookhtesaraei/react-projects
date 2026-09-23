import { createContext, type Dispatch, type SetStateAction } from "react";



type ContextValue = {
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>
};


export const SearchContext = createContext({} as ContextValue);