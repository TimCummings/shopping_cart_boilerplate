export const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_RETRIEVED": {
      return action.payload.cartItems;
    }
    case "CART_CHECKED_OUT": {
      return action.payload.cartItems;
    }
    case "ADD_ITEM_TO_CART": {
      return;
    }
    case "NEW_CART_ITEM": {
      const cartItem = action.payload.cartItem;
      const found = state.find((item) => item.productId === cartItem.productId);

      if (found !== undefined) {
        return state.map((item) => {
          if (item.productId === cartItem.productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return state.concat(cartItem);
      }
    }
    default:
      return state;
  }
};
