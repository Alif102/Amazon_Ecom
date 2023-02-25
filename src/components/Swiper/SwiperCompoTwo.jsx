import React from 'react'
import lapt from './swip_img/m8.png'
import sw2 from './swip_img/w5.png'
import './SwipeCompo.css'

const SwipCompoTwo = () => {
  return (
    <div>
        
    


<div className="banner-container">

    <div className="banner"> 
        <div className="shoe">
            <img style={{width:"50%"}} src={lapt} alt=""/>
        </div>
        <div className="content">
            <span>upto</span>
            <h3>50% 0ff</h3>
            <p>offer ends after 5 days</p>
            <a href="#" className="btn">veiw offer</a>
        </div>
        <div className="women">
            <img src={sw2} alt=""/>
        </div>
    </div>

</div>



    </div>
  )
}

export default SwipCompoTwo

