import React, { useState } from "react";

const AddProductForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(name, price, quantity).then((_) => {
      setName("");
      setPrice("");
      setQuantity("");
    });
  };

  return (
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button className="button" type="submit">
            Add
          </button>
          <button className="button" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
