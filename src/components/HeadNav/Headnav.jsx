import React from 'react'
import css from './Headnav.module.css'
import {CgShoppingBag} from 'react-icons/cg'
import Logo from '../../../public/images/amazonlogo.png'

const Headnav = () => {
  return (
    <>
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt='logo'/>
            <span>amazon</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                </ul>

            </div>
            <input type='text' className={css.search} placeholder='Search' />

            <CgShoppingBag className={css.cart}/>
        </div>
    </div>

    </>
  )
}

export default Headnav