export const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_RETRIEVED": {
      return action.payload.cartItems;
    }
    case "CART_CHECKED_OUT": {
      return action.payload.cartItems;
    }
    default: return state;
  }
}