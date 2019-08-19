import React from 'react'
import ProductListItem from './productListItem'

export default function ProductListing(props){
  return(
    <div>
    <p>ProductListing</p>
    {console.log(props.products[0].name)}    
    {
      props.products.map(product=>(
        <ProductListItem  product={product}/>
      ))
    }   
    </div>
  )
}