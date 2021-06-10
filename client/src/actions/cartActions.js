export const cartRetrievedSuccess = (data) => {
  return {
    type: "CART_RETRIEVED",
    payload: {
      cartItems: data,
    },
  };
};

export const cartCheckoutSuccess = (data) => {
  return {
    type: "CART_CHECKED_OUT",
    payload: {
      cartItems: data,
    },
  };
};

export const cartQuantityUpdated = (data) => {
  return {
    type: "ITEM_QUANTITY_INCREM",
    payload: {
      cartItems: data,
    },
  };
};

export const cartNewItemAdded = (data) => {
  return {
    type: "NEW_CART_ITEM",
    payload: {
      cartItems: data,
    },
  };
};
