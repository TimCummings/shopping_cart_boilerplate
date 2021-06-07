import React from "react"
import Product from "./Product"
import AddProductForm from "./AddProductForm"


const ProductList = ({ products }) => {

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return <Product {...product} key={product.id} />
        })}
      </div>

      <AddProductForm />
    </main>
  )
}

export default ProductList;