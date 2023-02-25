

import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'


import '../Collections/CollectionsStyle.css'
import { useDispatch } from 'react-redux'
import {ADD} from '../../redux/Actions/Action'
import CollectionsData from './CollectionsData'
const CollectionsCards = () => {
  
  const [data, setData] = useState(CollectionsData);

  const dispatch= useDispatch();
  const send=(e)=>{
    dispatch(ADD(e));
  }




  return (
    <div className='container mt-3'>
      <div className="CollectionsCardHead">
      <h2>Our New Trending Features . . . .</h2>
      <p>Excited to share our new arrivals with you. Keep an eye out this week or stop by the store today!</p>
      </div>

      <div className='cardBody'>
        {
          data.map((element, id) => {
            return (
              <>
              <Card style={{ width: '22rem'}} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"13rem",width:'14.5rem'}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : <strong>৳</strong> {element.price}
                    </Card.Text>
                    <div>
                      <li onClick={()=>send(element)} className='bttn'>ADD TO CART <span><i className='fa-solid fa-cart-shopping'></i></span></li>
                    </div>
          
                  
                  </Card.Body>
                </Card>
                
     
              </>
            )
          })
        }

      </div>
    </div>
  )
} 

  
export default CollectionsCards