import React from 'react'



import { Route, Routes } from 'react-router-dom'

import SignUp from '../components/SignUp/SignUp'

/*
import CardSwiper from '../components/Swiper/CardSwiper' */
const MainHome = () => {
  return (
    <div>
      
      <Routes>
          <Route path='/SignUp' element={<SignUp/>} />
          </Routes>

    
      
      
        
        
        
    </div>
  )
}

export default MainHome