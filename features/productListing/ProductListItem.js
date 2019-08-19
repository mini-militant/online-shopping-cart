import React from 'react'

export default function ProductListItem(props){
  return(
    <div>
    <p>ssfsdfs</p>
    {console.log("hi from product list item")}
      <p>{props.product.name}</p>
    </div>
  )
}