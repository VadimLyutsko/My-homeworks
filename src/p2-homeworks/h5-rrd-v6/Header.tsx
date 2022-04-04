import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'
import {PATH} from "./Pages";


function Header() {
    return (
        <div className={styles.hoverBlock}>
            <NavLink to={PATH.PRE_JUNIOR} className={styles.link}> PreJunior </NavLink>
            <NavLink to={PATH.JUNIOR} className={styles.link}> Junior </NavLink>
            <NavLink to={PATH.UPP_JUNIOR} className={styles.link}> JuniorPlus </NavLink>
            <div className={styles.touch}>Touch me ( ͡° ͜ʖ ͡°)</div>
        </div>
    )
}

export default Header


