import Blogs from "../components/Blogs/Blogs"
import Brands from "../components/Brands/Brands"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Categories from "../components/Categories/Categories"


import Products from "../components/Products/Products"
import Slider from "../components/Slider/Slider"
import React from "react"


const HomePage = () => {
  return (
    <React.Fragment>
      
      <Slider />
      <Categories/>
      <Products/>
      <Blogs/>
      <Brands/>
      <CampaignSingle/>
      <Products/>
     
    

    </React.Fragment>
    
  )
}

export default HomePage