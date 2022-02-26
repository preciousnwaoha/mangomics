import React from "react";

import classes from "./TopCurve.module.css";

const TopCurve = () => {
  return (
    <div className={classes["top-design"]}>
      <div className={classes.purple}>Your Cart</div>
      <div className={classes["purple-help"]}></div>
      <div className={classes.white}></div>
    </div>
  );
};

export default TopCurve;
