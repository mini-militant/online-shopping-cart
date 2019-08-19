import React from 'react'
import ProductListItem from './ProductListItem'

export default function ProductListing(props){
  return(
    <div>
    <p>ProductListing</p>
    {console.log(props.products)}
    {
      props.products.map((product)=>{
        <ProductListItem product={product}/>
      })
    }
    </div>
  )
}