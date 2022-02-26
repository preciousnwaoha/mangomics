import React from "react"
import classes from "./Nav.module.css";


const Nav = (props) => {
    let navClasses = `${classes.nav} ${props.className || ""}`;

    return <nav className={navClasses} id={props.id}>
        {props.children}
    </nav>
}

export default Nav;