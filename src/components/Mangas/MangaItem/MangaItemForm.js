import React, { useRef, useState } from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "./MangaItemForm.module.css";

const MangaItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  
  const amountInputRef= useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNum < 0 || enteredAmountNum > 5) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNum)
  };

  return (
    <form className={classes["manga-item-form"]} onSubmit={submitHandler}>
      {/* <div className={classes["input-div"]}>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" onChange={amountChangeHandler} min="0" placeholder="0" />
      </div> */}
      <Input ref={amountInputRef} className={classes["input-div"]}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: 10,
          step: "1",
          defaultValue: 1,
        }}
      />

      <Button type="submit" className={classes.btn}>
        Add to Cart
      </Button>
      {!amountIsValid && <p>Pls enter valid amount [1-5].</p>}
    </form>
  );
};

export default MangaItemForm;
