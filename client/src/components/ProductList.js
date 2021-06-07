import React from "react"
import Product from "./Product"
import AddProductForm from "./AddProductForm"

const ProductList = () => {
  return (
    <main>
      <div class="product-listing">
        <h2>Products</h2>
        <Product />
      </div>

      <AddProductForm />
    </main>
  )
}

export default ProductList;