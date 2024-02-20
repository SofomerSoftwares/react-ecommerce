import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import Home from './Components/Page/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import SingleProduct from './Components/Page/Home/SingleProduct.jsx';
import Products from './Components/Page/Home/Products.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
    path: "/products",
    element: <Products/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

      <RouterProvider router={router} />
      
)
