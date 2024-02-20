
import React from 'react'
import { Link } from 'react-router-dom';

function Cards({filteredItems}) {
 
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>


{

  filteredItems.map((items) =>(
    <div keys={items.id}  >
       <Link to={`/shop/${items.id}`}>
       <img src={items.image} alt="" className='rounded-md'/>
   
       </Link>
      <div className='mt-4 px-4'>
        <h2 className='text-base font-semibold mb-2'>{items.name}</h2>
        <div className='flex justify-between'> 
        <p className='text-black/50'>{items.category}</p> 
        <p className='font-semibold'>{items.price} ETB</p>
          </div>
      </div>
       
      </div>
  ))
}

    </div>
  )
}

export default Cards