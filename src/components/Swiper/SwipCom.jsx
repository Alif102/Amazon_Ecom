import React from 'react'
import sm1 from './swip_img/m4.png'
import sw2 from '../../Asset/ebg2.png'
import './SwipeCompo.css'

const SwipCompo = () => {
  return (
    <div>
        
    


<div className="banner-container">

    <div className="banner"> 
        <div className="shoe">
            <img src={sm1} alt=""/>
        </div>
        <div className="content">
            <span>Get exciting Cashback</span>
            <h3>30% 0ff</h3>
            <p>Free-in-box HeadPhones & many more</p>
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

