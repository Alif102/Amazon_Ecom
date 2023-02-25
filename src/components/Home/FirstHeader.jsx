import React from 'react'
import { NavLink } from 'react-router-dom'
import girl from '../../Asset/ebg3.png'




import css from './FirstHeader.module.css'


const FirstHeader = () => {
    return (
      <>
      

<div className={css.container}>
       
        <div className={css.content}>
            <div className={css.text}>
            <h1>Your Appearence<br/> <span>Shows Your Quality</span></h1>
            <p> being the centerpiece and focal point of the site, this is a great place to show of your latest and greatest product on your</p>
            <NavLink className={css.btn4} to="/Collections">Explore Now</NavLink>
            <p>We make great digital products for <strong>Innovative and Luxury</strong> brands</p>
           </div>
        <div className={css.girl}>
            <div className={css.shop} >
            <h1>SHOP NOW</h1>
            <h3>UP TO<br/><span>30%</span>OFF</h3>
            </div> 
            <div className='btn5c'>
            <img className={css.imgg} src={girl} alt=""/>
            <NavLink className={css.btn5} to="/Collections">Trending Collections</NavLink>
            </div>
            </div>
                      
        
        
       </div>
       </div>
       </>
  )
}

export default FirstHeader