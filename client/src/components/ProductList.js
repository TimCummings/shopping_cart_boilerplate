import React, { useState } from "react"
import Product from "./Product"
import AddProductForm from "./AddProductForm"

const ProductList = ({ products, handleAddProduct, handleEditProduct, handleDeleteProduct }) => {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return <Product {...product} key={product._id} onSubmit={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
        })}
      </div>

      <AddProductForm onSubmit={handleAddProduct} />
    </main>
  )
}

export default ProductList;
