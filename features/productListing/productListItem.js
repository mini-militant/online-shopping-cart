import React from 'react'

function ProductListItem(props){
  return(
    <div>
    <p>ProductList Item has spoken.</p>
    {console.log("hi from product list item")}
      <p>{props.product.name}</p>
    </div>
  )
}

export default ProductListItem