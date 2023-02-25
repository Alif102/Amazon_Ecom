import React from "react"





import css from '../Home/FirstHeader.module.css'


import logoo from '../../Asset/amazonlogo.png'
import "./Header.css"
import { NavLink } from "react-router-dom"

const Header = () => {

  return (
    <>

<div className={css.header}>
            <img src={logoo} alt='' className={css.logo}/>
            <span>amazon</span>
            <nav>
                <ul>
                <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                <li>Home</li>
                    <li>Collections</li>
                    <li>Brands</li>
                </ul>

            </div>
            
        </div>
                </ul>
            </nav>
            <div className={css.btn}>
            <NavLink><button className={css.btn1}>Log In</button></NavLink>
            </div>
            <div className={css.btn}>
            <button className={css.btn2}>SIGN UP</button>
            </div>
            </div>
   
      


       
       </>
  )
}

export default Header