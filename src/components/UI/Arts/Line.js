import React from "react"

import classes from "./Line.module.css"


const Line = () => {
    return <div className={classes.line}>
      <div className={classes["line-wraps"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes["line-wraps"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
}

export default Line