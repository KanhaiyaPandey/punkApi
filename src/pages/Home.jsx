/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { createContext, useContext, useState } from "react"
import Navbar from "../components/Navbar"
import Products from "../components/Products"


const HomeContext = createContext()

const Home = () => {

    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        setSearchText(e.target.value);
      };


  return (
    <>

    <HomeContext.Provider value={{searchText, handleSearch}}>
    <Navbar  />
    <section className='align-element py-20'>
     <Products/>
  </section>
    </HomeContext.Provider>

    </>
 
  )
}

export const useHomeContext = () => useContext (HomeContext);

export default Home