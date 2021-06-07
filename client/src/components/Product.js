import React, { useState } from "react";
import EditProductForm from "./EditProductForm"

const Product = ({ title, quantity, price }) => {
  const [visibleEdit, setVisibleEdit] = useState(false)

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit" onClick={() => setVisibleEdit(!visibleEdit)}>Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>
      {visibleEdit ? <EditProductForm title={title} quantity={quantity} price={price} /> : null}
    </div>
  )
}

export default Product;