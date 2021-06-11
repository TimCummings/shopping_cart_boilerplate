import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";
import AddProductForm from "./AddProductForm";
import {
  productsRetrievedSuccess,
  newProductAdded,
  productsUpdated,
  productsOneDeleted,
} from "../actions/productActions";
import { cartQuantityUpdated, cartNewItemAdded } from "../actions/cartActions";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => response.data)
      .then((data) => {
        dispatch(productsRetrievedSuccess(data));
      })
      .catch((error) => console.log(error));
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
      .then((newProduct) => dispatch(newProductAdded(newProduct)))
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
      .then((editedProduct) => dispatch(productsUpdated(editedProduct, _id)))
      .catch((error) => console.log(error));
  };

  const handleDeleteProduct = (_id) => {
    return axios
      .delete(`/api/products/${_id}`)
      .then(() => {
        dispatch(
          productsOneDeleted(products.filter((product) => product._id !== _id))
        );
      })
      .catch(console.error);
  };

  const updateCart = (cartItem, productId) => {
    const found = cart.find((item) => item.productId === productId);
    if (found !== undefined) {
      dispatch(
        cartQuantityUpdated(
          cart.map((item) => {
            if (item._id === cartItem._id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        )
      );
    } else {
      dispatch(cartNewItemAdded(cart.concat({ ...cartItem, productId })));
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
