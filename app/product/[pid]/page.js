import React from 'react'
import axios from 'axios'


const ProductId = async ({ params }) => {
  const { pid } = await params  

  const res = await axios.get(`https://dummyjson.com/products/${pid}`)
  const product = res.data  

  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>

      <img src={product.thumbnail} alt={product.title} />

      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>
    </div>
  )
}

export default ProductId