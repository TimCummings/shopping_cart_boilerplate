import React, { useState, useEffect } from "react";
import axios from "axios";
import CartDetails from "./CartDetails"
import ProductList from "./ProductList"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => response.data)
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleAddProduct = (name, price, quantity) => {
    const data = {
      title: name,
      price: parseFloat(price).toFixed(2),
      quantity: parseInt(quantity, 10),
    };

    return axios.post('/api/products', data)
      .then(response => {
        return response.data;
      })
      .then(newProduct => setProducts(products.concat(newProduct)))
      .catch(error => console.log(error));
  };

  return (
    <div id="app">
      <CartDetails cart={cart} />
      <ProductList products={products} onSubmit={handleAddProduct} />
    </div>
  );
};

export default App;
