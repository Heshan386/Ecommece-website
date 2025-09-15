import React from 'react'
import Hero from '../component/hero/Hero';
import Popular from '../component/popular/Popular';
import Offers from '../component/offers/Offers';
import NewCollection from '../component/newCollection/NewCollection';
import NewsLetter from '../component/newsLetter/NewsLetter';


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop