import React, { useState, useEffect } from "react";
import data from "../lib/data"
import CartDetails from "./CartDetails"
import ProductList from "./ProductList"

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [])

  return (
    <div id="app">
      <CartDetails cart={cart} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
