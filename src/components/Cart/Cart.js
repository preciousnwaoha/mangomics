import React, { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import TopCurve from "./TopCurve";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(IDBKeyRange)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderMealsHandler = () => {
    console.log("ordered meals");
  };

  return (
    <Modal onClose={props.onClose}>
      <TopCurve />
      {cartItems}
      <div className={classes.total}>
        <h4>Total Amount</h4>
        <p>{totalAmount}</p>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes["button-alt"]}
          type="button"
          onClick={props.onClose}
        >
          Close
        </Button>
        {hasItems && (
          <Button
            className={classes.button}
            type="buton"
            onClick={orderMealsHandler}
          >
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
