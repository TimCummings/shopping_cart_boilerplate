import React from "react"
import Product from "./Product"
import AddProductForm from "./AddProductForm"


const ProductList = ({ products, onSubmit }) => {

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return <Product {...product} key={product._id} />
        })}
      </div>

      <AddProductForm onSubmit={onSubmit} />
    </main>
  )
}

export default ProductList;
