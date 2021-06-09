import React from "react";
import CartItem from "./CartItem";

const CartDetails = ({ cart }) => {
  console.log({ cart });
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
        <a class="button checkout">Checkout</a>
      </div>
      {/* <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div> */}
    </header>
  );
};

export default CartDetails;
