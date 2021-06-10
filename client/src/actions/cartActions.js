export const cartRetrievedSuccess = (data) => {
  return {
    type: "CART_RETRIEVED",
    payload: {
      cartItems: data
    }
  }
}

export const cartCheckoutSuccess = (data) => {
  return {
    type: "CART_CHECKED_OUT",
    payload: {
      cartItems: data
    }
  }
}