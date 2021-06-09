// @ts-check

import React, { useState, useEffect } from "react";
import axios from "axios";
import CartDetails from "./CartDetails";
import ProductList from "./ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => response.data)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("/api/cart")
      .then((response) => response.data)
      .then((data) => setCart(data));
  }, []);

  const handleAddProduct = (name, price, quantity) => {
    const data = {
      title: name,
      price: parseFloat(price).toFixed(2),
      quantity: parseInt(quantity, 10),
    };

    return axios
      .post("/api/products", data)
      .then((response) => {
        return response.data;
      })
      .then((newProduct) => setProducts(products.concat(newProduct)))
      .catch((error) => console.log(error));
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
      .then((editedProduct) =>
        setProducts(
          products.map((product) => {
            if (product._id === _id) {
              return Object.assign({}, product, {
                title: editedProduct.title,
                price: editedProduct.price,
                quantity: editedProduct.quantity,
              });
            } else {
              return product;
            }
          })
        )
      )
      .catch((error) => console.log(error));
  };

  const handleDeleteProduct = (_id) => {
    return axios
      .delete(`/api/products/${_id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== _id));
      })
      .catch(console.error);
  };

  const updateCart = (cartItem, productId) => {
    const found = cart.find((item) => item._id === productId);
    if (found !== undefined) {
      setCart(
        cart.map((item) => {
          if (item._id === cartItem._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCart(cart.concat({ ...cartItem, productId }));
    }
  };

  const handleAddToCart = ({ _id, title, quantity, price }) => {
    if (quantity < 1) {
      console.log(`Product ${title} not available`);
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
      .then((cartItem) => {
        updateCart(cartItem, _id);
      })
      .catch(console.error);
  };

  return (
    <div id="app">
      <CartDetails cart={cart} />
      <ProductList
        products={products}
        cart={cart}
        handleAddProduct={handleAddProduct}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
