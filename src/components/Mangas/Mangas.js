import React, { useEffect, useState} from "react";

import Card from "../UI/Card/Card";
import MangaItem from "./MangaItem/MangaItem";
import classes from "./Mangas.module.css";



const Mangas = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://mangomics-mangadata-default-rtdb.firebaseio.com/meals.json").then();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    };

    fetchMeals().catch(error => {
      setIsLoading(false)
      setHttpError(error.message)
    });
      
  }, [])
  

  if (isLoading) {
    return (
      <section className={classes.MangasLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MangasError}>
        <p>{httpError}</p>
      </section>
    );
  }


  const mangasList = meals.map((manga) => (
    <MangaItem
      key={manga.id}
      id={manga.id}
      name={manga.name}
      description={manga.description}
      price={manga.price}
    />
  ));

  return (
    <Card className={classes.mangas}>
      <ul>{mangasList}</ul>
    </Card>
  );

};

export default Mangas;
