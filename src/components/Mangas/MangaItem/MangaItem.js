import React, { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MangaItemForm from "./MangaItemForm";
import classes from "./MangaItem.module.css";

const MangaItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes["manga-item"]}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
      <div>
        <MangaItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MangaItem;
