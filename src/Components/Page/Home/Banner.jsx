import React from 'react'
import watch from '../../../assets/category_image/banner.png'
import { FaShoppingBag } from 'react-icons/fa';
function Banner() {
  return (
    <div className='w-full xl:px-28 py-8 bg-grey-300 '>
        <div className='py-28 flex flex-col md:flex-row justify-between lg:items-center gap-4 '>
        <div className='md:w-1/2 items-center'>
        <img src={watch} alt="" className='w-[750px] hover:scale-105 translation-all duration-200'/>
        </div> 
        <div className='md:w-1/2 '>
          <h1 className='text-5xl  mb-5  '>Collections</h1>
          <p className='text-xl mb-7 '>
            You Can Explore ans Shop Many Different Collection From Various Brand Here.
          </p>
          <button className='md:mx-8 bg-black hover:bg-orange-500 px-6 py-2  text-white font-semibold rounded-lg flex items-center gap-2'>
            <FaShoppingBag className='inline-flex'/>Buy now
          </button>
        
        </div>
        {/* img div */}
        
      </div>
     </div>
    
  )
}
export default Banner;