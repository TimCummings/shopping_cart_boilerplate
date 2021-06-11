import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";
import AddProductForm from "./AddProductForm";
import {
  productsRetrieved,
  productAdded,
  productsUpdated,
  productsOneDeleted,
} from "../actions/productActions";
import { cartItemAdded } from "../actions/cartActions";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => dispatch(productsRetrieved()), []);

  const handleAddProduct = (name, price, quantity) => {
    dispatch(productAdded({ name, price, quantity }));
  };

  const handleEditProduct = (_id, title, price, quantity) => {
    const data = {
      title: title,
      price: parseFloat(price).toFixed(2),
      quantity: parseInt(quantity, 10),
    };

    return axios
      .put(`/api/products/${_id}`, data)
      .then((response) => response.data)
      .then((editedProduct) => dispatch(productsUpdated(editedProduct, _id)))
      .catch((error) => console.log(error));
  };

  const handleDeleteProduct = (_id) => {
    return axios
      .delete(`/api/products/${_id}`)
      .then(() => {
        dispatch(productsOneDeleted(_id));
      })
      .catch(console.error);
  };

  const handleAddToCart = ({ _id, title, quantity, price }) => {
    if (quantity < 1) {
      console.error(`Out of stock of ${title}, cannot add to cart!`);
      return;
    }

    handleEditProduct(_id, title, price, quantity - 1)
      .then(() => {
        return axios
          .post(`/api/cart`, {
            title,
            price: parseFloat(price).toFixed(2),
            productId: _id,
          })
          .then((response) => response.data);
      })
      .then((cartItem) => dispatch(cartItemAdded(cartItem)))
      .catch(console.error);
  };

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          return (
            <Product
              {...product}
              key={product._id}
              onSubmit={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
              onAddToCart={handleAddToCart}
            />
          );
        })}
      </div>

      <AddProductForm onSubmit={handleAddProduct} />
    </main>
  );
};

export default ProductList;
