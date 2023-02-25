

import React, { useState } from 'react'

import Cardsdata from '../CardHeader/CardsData'
import Card from 'react-bootstrap/Card'
import CardSwiper from '../Swiper/CardSwiper'

import '../CardHeader/CardStyle.css'
import { useDispatch } from 'react-redux'
import {ADD} from '../../redux/Actions/Action'
import FirstHeader from '../Home/FirstHeader'

const Cards = () => {
  
  const [data, setData] = useState(Cardsdata);

  const dispatch= useDispatch();
  const send=(e)=>{
    dispatch(ADD(e));
  }




  return (
    <div>
    <FirstHeader/>

    <div className='container mt-3'>
      <div className="cardHead">
      <h2>Discover Our New Arrivals</h2>
      <p>Get the latest trends before they sell out!</p>
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
                    Price : BDT {element.price} 
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
    <CardSwiper/>

    </div>
  )
} 

  
export default Cards