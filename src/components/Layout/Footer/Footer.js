import React from "react"

import Logo from "../../UI/Logo/Logo"
import Line from "../../UI/Arts/Line"
import classes from "./Footer.module.css"


const Footer = () => {

    return <>
        <Line />
        <footer className={classes.footer}>
            <div className={classes.merits}>
                <Logo />
                <p>NKJJDSB</p>
                <p>NKJJDSB</p>
                <p>NKJJDSB</p>
            </div>
            <table className={classes.table}>
                <td>
                    <th>Careers</th>
                    <tr>Domansdjjsn</tr>
                    <tr>lfkcbhjdsgfyugs</tr>
                    <tr>njxdhbhyudh</tr>
                </td>
                <td>
                    <th>Careers</th>
                    <tr>Domansdjjsn</tr>
                    <tr>.lfkcbhjdsgfyugsdy</tr>
                    <tr>njxdhbhyudh</tr>
                </td>
            </table>
        </footer>
    </>
}

export default Footer