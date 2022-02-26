import React from "react";

import bannerImage from "./banner.jpg"
import SearchBar from "../../UI/Search/SearchBar";
import Line from "../../UI/Arts/Line";
import classes from "./Banner.module.css";

const Banner = () => {

  return <>
    <div className={classes.banner}>
      <img src={bannerImage} alt="table filled with food" />
      <img src={bannerImage} alt="table filled with food" />
      <div className={classes["hero-inner"]}>
        <span className={classes["hero-text"]}>Anime Comics</span>
        <SearchBar />
      </div>
      
    </div>;
    
    <Line />

  </>
  
};

export default Banner;
