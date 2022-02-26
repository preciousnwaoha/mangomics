import React from "react";

import Button from "../UI/Button/Button";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const amount = `x${props.amount}`

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button className={classes.plus} onClick={props.onRemove} >-</Button>
        <Button className={classes.minus} onClick={props.onAdd} >+</Button>
      </div>
    </li>
  );
};

export default CartItem;
