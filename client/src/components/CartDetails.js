import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import CartItem from "./CartItem";
import { cartRetrievedSuccess, cartCheckoutSuccess } from "../actions/cartActions"
//need to define action creator, cartRetrievedSuccess and cartCheckoutSuccess

const CartDetails = () => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/cart")
      .then((response) => response.data)
      .then((data) => dispatch(cartRetrievedSuccess(data))); //dispatch
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();

    return axios.post("/api/cart/checkout").then(() => {
      dispatch(cartCheckoutSuccess([]));
    });
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const linePrice = item.price * item.quantity;
      return sum + linePrice;
    }, 0);
  };

  return (
    <header>
      <h1>The Shop!</h1>
      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cart.map((item) => (
              <CartItem key={item._id} {...item} />
            ))}

            <tr>
              <td colspan="3" class="total">
                Total: ${calculateTotal()}
              </td>
            </tr>
          </tbody>
        </table>
        <a class="button checkout" onClick={handleCheckout}>
          Checkout
        </a>
      </div>
    </header>
  );
};

export default CartDetails;
