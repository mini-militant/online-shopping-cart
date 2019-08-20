import React from 'react'



function ProductListItem(props){
  
  return(
    <div className="product-list-item">
      <h1>{props.product.name}</h1>
      <img
        height={100}
        title={props.product.name}
        src={props.product.image}
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <button onClick={()=>props.addToCart(props.product)}>Add To Cart </button>
      </div>
    </div>
  )
}

export default ProductListItem