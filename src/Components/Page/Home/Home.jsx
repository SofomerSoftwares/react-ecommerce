import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Products from './Products'
import Collection from './Collection'
import FeatureProducts from './FeatureProducts'
import Footer from '../../Footer/Footer'



function Home() {
  return (
    <div className='max-w-auto  '>  
     
     <Banner  />
     <Categories/>
     <Products />
     <Collection />
     <FeatureProducts />
     <Footer/>

    </div>
  )
}

export default Home