import React from "react"


import classes from "./SearchBar.module.css"


const SearchBar = () => {
    return <form className={classes["search-bar"]}>
        <input type="search" placeholder="Search Manga" />
        <button>X</button>
    </form>
}

export default SearchBar;