
import React from 'react'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Page/Home/Home'
import Products from './Components/Page/Home/Products'
import Categories from './Components/Page/Home/Categories'
import SingleProduct from './Components/Page/Home/SingleProduct'
import Nav from './Components/Navigation/Nav'

function App() {
  return (
      <>
<BrowserRouter>
<Nav/>
  <Routes>
    <Route index element={<Home />} />
    <Route path='/products' element={<Products/>}
     />
     <Route path='/shop/:id' element={<SingleProduct/>}
     />
    <Route path='/category' element={<Categories/>} />
  </Routes>
</BrowserRouter> 
 
    </>

  )
}

export default App
