import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartDetails from '../components/CardHeader/CartDetails'
import Cards from '../components/CardHeader/Cards'
import SignUp from '../components/SignUp/SignUp'
import CollectionsCards from '../components/Collections/CollectionsCards'


const CardLayout = () => {
  return (
    <div>
        
        
        <Routes>
          
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Amazon_Ecom' element={<Cards/>}/>
        <Route path='/Collections' element={<CollectionsCards/>}/>
            <Route path='/CartDetails/:id' element={<CartDetails/>} />
        </Routes>
    </div>
  )
}

export default CardLayout