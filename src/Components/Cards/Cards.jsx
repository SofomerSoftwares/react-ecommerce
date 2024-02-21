
import React from 'react'
import { Link } from 'react-router-dom';

function Cards({filteredItems}) {
 
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>


{

  filteredItems.map((items) =>(
    <div keys={items.id}  className='card card-compact  w-72 bg-base-100 shadow-xl'>
       <Link to={`/shop/${items.id}`}>
       <img src={items.image} alt="" className='rounded-md h-72 w-72'/>
       </Link>
       <div className="card-body">
       <h2 className="card-title text-sm">{items.name}</h2>
       <p className='font-semibold'>{items.price} ETB</p>
        <div className='flex flex-col  justify-between'> 
        <p className='text-black/50'>{items.category}</p> 
       </div>
      <div className="card-actions justify-between">
      <button className="btn btn-outline btn-primary">Buy Now</button>
      </div>
      </div>
       
      </div>
  ))
}

    </div>
  )
}

export default Cards