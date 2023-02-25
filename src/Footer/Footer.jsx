
  import React from 'react'
  import logooo from '../Asset/amazonlogo.png'

import { NavLink } from 'react-router-dom'
  import './Footer.css'
  const Footer = () => {
    return (
      <div>
      
    
    
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
          <img
              alt=""
              src={logooo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            /> 
            <p>Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence</p>
            <div className="social">
              <NavLink to="https://facebook.com/"><span className="fab fa-facebook-f"></span></NavLink>
              <NavLink to="https://instagram.com/"><span className="fab fa-twitter"></span></NavLink>
              <NavLink to="https://instagram.com/"><span className="fab fa-instagram"></span></NavLink>
              <NavLink to="https://youtube.com/"><span className="fab fa-youtube"></span></NavLink>
            </div>
          </div>
        </div>

        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Mirpur DOHS, Dhaka</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+88 017 97470501</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">alifahmed102@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required/>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <NavLink to="https://www.facebook.com">Alif Ahmed</NavLink> | </span>
          <span className="far fa-copyright"></span><span> 2023 All rights reserved.</span>
        </center>
      </div>
    </footer>
  
      </div>
    )
  }
  
  export default Footer