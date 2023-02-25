import React from 'react'
import sm1 from './swip_img/sm1.png'
import sw2 from './swip_img/women.png'
import './SwipeCompo.css'

const SwipCompo = () => {
  return (
    <div>
        
    


<div className="banner-container">

    <div className="banner"> 
        <div className="shoe">
            <img style={{width:"60%"}} src={sm1} alt=""/>
        </div>
        <div className="content">
            <span>Get exciting Cashback</span>
            <h3>20% 0ff</h3>
            <p>Free-in-box charger & many more</p>
            <a className="btn">Pre-Order Now</a>
        </div>
        <div className="women">
            <img src={sw2} alt=""/>
        </div>
    </div>

</div>



    </div>
  )
}

export default SwipCompo

