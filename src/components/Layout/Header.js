import React, { useContext, useEffect, useState} from "react";

import CartContext from "../../store/cart-context";
import MenuIcon from "../UI/MenuIcon/MenuIcon";
import SideMenu from "./SideMenu/SideMenu"
import Nav from "../UI/Nav/Nav";
import Button from "../UI/Button/Button";
import Theme from "../UI/Theme/Theme";
import Logo from "../UI/Logo/Logo";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext)
  const [btnShake, setBtnShake] = useState(false)
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(true);

  const showMenuHandler = () => {
    setIsMenuIconShowing(false)
  }
  const hideSideMenuHandler = () => {
    setIsMenuIconShowing(true)
  }

  let MenuIconClasses = `${classes["head-menu-icon"]}`

  if (isMenuIconShowing) {
    MenuIconClasses += ` ${classes.show}`
  } else {
    MenuIconClasses += ` ${classes.hide}`
  }


  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0)

  const btnClasses = `${classes.btn} ${btnShake ? classes.bump : ""}`
  
  useEffect(() => {
    if (items.length === 0){
      return
    }
    setBtnShake(true)
    const timer = setTimeout(() => {
      setBtnShake(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <header className={classes.header}>
      <div className={MenuIconClasses} onClick={showMenuHandler}>
        <MenuIcon />
      </div>
      <SideMenu className={classes["head-side-menu"]} show={!isMenuIconShowing} onHideSideMenu={hideSideMenuHandler} />
      
      <Nav className={classes["head-nav"]} id={"head-nav"}>
        <Logo />
        <ul>
          <li>
            <span className={classes["sign-in"]}>SIGN IN</span>
          </li>
          <li><Button
        type="button"
        className={btnClasses}
        onClick={props.onShowCart}>
        Your Cart
          <div>{numberOfCartItems}</div>
          </Button></li>
          <li>
            <Theme />
          </li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header;
