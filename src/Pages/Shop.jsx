import React from 'react'
import AdverCouraSlide from '../Components/AdverCouraSlide/AdverCouraSlide'
import NewCollection from '../Components/NewCollections/NewCollection'
import './CSS/Shop.css'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <AdverCouraSlide/>
      <div className="shop-container">
        <NewCollection/>
      </div>
      <Hero/>
      <div className="shop-container">
        <Popular/>
      </div>
      <Offers/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
