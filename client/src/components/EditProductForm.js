import React, { useState } from "react";

const EditProductForm = ({ _id, title, quantity, price, onSubmit, setVisibleEdit,
  hideEditForm }) => {
  const [ editTitle, setTitle ] = useState(title);
  const [ editPrice, setPrice ] = useState(quantity);
  const [ editQuantity, setQuantity ] = useState(price);

  const submitHandler = event => {
    event.preventDefault();
    onSubmit(_id, editTitle, editPrice, editQuantity)
      .then(_ => hideEditForm())
      .catch(error => console.log(error));
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={editTitle}
            onChange={event => setTitle(event.target.value) } />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={editPrice}
            onChange={event => setPrice(event.target.value) } />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={editQuantity}
            onChange={event => setQuantity(event.target.value) } />
        </div>

        <div className="actions form-actions">
          <button className="button" type="submit">Update</button>
          <button className="button" type="reset" onClick={hideEditForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;
