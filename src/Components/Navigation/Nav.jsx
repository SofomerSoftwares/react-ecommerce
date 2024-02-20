import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {FaHeart, FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
 const NavMenu = [
  {
  id:1,
  title: "Home",
  path: "/"},
  {id:2,
  title: "Category", 
  path: "/"},
  {id:3,
  title:"Product",
 path:"/"},
  {id:4,
  title: "Blogs",
   path:"/"},
  {id:5,
  title: "Services", 
  path:"/"},
  {id:6,
  title: "BigSale", 
  path:"/",
  }
 ]
 const topMenu = [
  {id:1,name:"Item",path: "/", icon: <FaHeart/>},
  {id:2,name: "Shopping",path: "/" , icon: <FaShoppingBag/>},
  {id:3,name: "Account",path: "/" , icon: <FaUser/>},
 
 ]


  return (
    <header className='max-w-screen-5xl h-24 xl:px-4 px-8 bg-gray-100 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center container'>
        {/* logo image */}
        <img className="w-40 h-auto " src={logo} alt="logo" />
    
          {/* search items */}
        <input type="text" placeholder="Search for everything" name="" id='search' className=' w-full h-auto  rounded-lg border focus-visible: text-start px-10 py-1 md:flex hidden ' />
        <a href='' className='relative right-8 rounded-full items-end' ><FaSearch/></a> 
   
        
        {/* top  menu Items */}
          <div className='sm:flex items-center gap-8 hidden '>
          <a href='#' className='flex item-center gap-8 text-lg'>  Items <FaHeart /></a>
          <a href='#' className='flex item-center gap-8 text-lg'>Shopping <FaShoppingBag />  </a>
          <a href='#'className='flex item-center gap-8 text-lg'>   Account <FaUser /> </a>
       </div>
       
       <div className='md:hidden'> 
          <button onClick = {toggleMenu}>
            {
              isMenuOpen ? <FaTimes className='w-5 h-5 text-black'/>: <FaBars className='w-5 h-5 text-black'/>
            }
            </button>
        </div>
        </nav>

     
      
       {/* category items */}
       <div className='px-16 pt-1 md:px-64 '>
       <ul className='md:flex justify-between items-center md:max-w-screen-md 2xl:max-w-screen-md 2xl:px-16 2xl:ml-72 hidden'>
       {
        NavMenu.map(({id,title,path}) =>(
         <li key ={id} className='hover:text-orange-500 cursor-pointer'> 
         <Link to ={"/"}>
         {title}
          </Link>
         </li>   
        ))
       }
      
      </ul>  
      </div>
      <hr/>
      {/* only for mobile */}
      <div className='sm:hidden '>
      <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
      {
        topMenu.map((item) =>(

          <li key={item.id}  className='hover:text-orange-500 cursor-pointer flex gap-8'>
           {item.name}  {item.icon}
          </li>
          
         ))
       }
      
      
       {
        NavMenu.map(({title}) =>(

         <li  key={title.id}   className='hover:text-orange-500 cursor-pointer'>
          {title}
         </li>
        ))}
    
     
      </ul>  
      </div>
    </header>
    
  
  )
}
export default Nav