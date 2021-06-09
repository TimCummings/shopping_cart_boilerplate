import React, { useState } from "react";
import EditProductForm from "./EditProductForm"

const Product = ({ _id, title, quantity, price, onSubmit, onDeleteProduct }) => {
  const [visibleEdit, setVisibleEdit] = useState(false)
  const hideEditForm = () => setVisibleEdit(false);

  const handleOnDeleteClick = (e) => {
    e.preventDefault()
    onDeleteProduct(_id)
  }

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
        <a className="delete-button" onClick={handleOnDeleteClick}><span>X</span></a>
      </div>
      {visibleEdit ? <EditProductForm _id={_id} title={title}
        quantity={quantity} price={price} hideEditForm={hideEditForm}
        setVisibleEdit={setVisibleEdit} onSubmit={onSubmit} /> : null}
    </div>
  )
}

export default Product;
