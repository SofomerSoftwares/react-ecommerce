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



const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/shop/:id",
        element:<SingleProduct/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

      <RouterProvider router={router} />
      
)
