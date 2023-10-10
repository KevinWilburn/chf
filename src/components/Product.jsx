import React from 'react'

function Product({data}) {
  return (
    <div className='product'>
        <img src={data.image}/>
        <div className="description">
            <p><b>{data.name}</b></p>
            <p>{data.price}</p>
        </div>
    </div>
  )
}

export default Product