/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const updateSearchQuery = (query) => {
      setSearchQuery(query);
    };
}

export const useSearch = () => {
    return useContext(SearchContext);
  };

