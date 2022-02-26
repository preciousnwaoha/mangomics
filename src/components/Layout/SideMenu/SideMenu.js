import React from "react";

import Nav from "../../UI/Nav/Nav";
import classes from "./SideMenu.module.css";

const SideMenu = (props) => {
  const HideSideMenuHandler = () => {
    props.onHideSideMenu();
  };

  let SideMenuClasses = `${classes["side-menu"]} ${props.className}`;

  if (props.show) {
    SideMenuClasses += ` ${classes.show}`;
  } else {
    SideMenuClasses += ` ${classes.hide}`;
  }

  return (
    <Nav className={SideMenuClasses}>
      <div className={classes.hider} onClick={HideSideMenuHandler}>
        <span>hide</span>
      </div>
      <ul className={classes.list}>
        <li>
          <b>Account</b>
        </li>
        <li>
          <b>Top Mangas</b>
        </li>
        <li>
          <b>Mangaram</b>
        </li>
        <li>
          <b>Explore</b>
        </li>
        <li>
          <b>Settings</b>
        </li>
      </ul>
    </Nav>
  );
};

export default SideMenu;
