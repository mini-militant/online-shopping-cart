import React from 'react'
import ProductListItem from './productListItem'
import {connect} from 'react-redux'
import cartItemsWithQuantity from '../cart/index'

function ProductListing(props){
  return(
    <div className ="product-listing">
    
    {console.log(props.products[0].name)}    
    {
      props.products.map(product=>(
        <ProductListItem  
        addToCart={props.addToCart}
        product={product}
        cart={cartItemsWithQuantity(props.cart)}
        />
      ))
    }   
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    cart:state.cart
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addToCart:(item)=>{
      dispatch({type:'ADD', payload:item})
    },
    removeFromCart:(item)=>{
      dispatch({type:'REMOVE',payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)