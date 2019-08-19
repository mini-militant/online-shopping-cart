import React from 'react'
import data from '../data/products.json'
import ProductListing from '../features/productListing/index'

const HomePage=(props)=>{
  return(
    <div>
      <h2>HomePage</h2>
      
      <ProductListing products={data.products}/>
    </div>
  ) 
 }

export default HomePage