import React from 'react'
import products from '../Data/products'
import Product from "../components/Product"
import "./shop.css"
function Shop() {
  return (
    <div className="shop">
      <div className="chfTitle">
        <h1> Welcome to CHF!</h1>
      </div>
      <div className="products">
        {products.map((product) => <Product data={product}/>)}
      </div>
    </div>
  )
}

export default Shop