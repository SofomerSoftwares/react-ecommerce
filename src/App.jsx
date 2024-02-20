
import React from 'react'
import Nav from './Navigation/Nav'
import { Outlet } from 'react-router-dom'


function App() {
  return (
      <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
