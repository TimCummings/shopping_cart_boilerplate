export const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RETRIEVED": {
      return action.payload.productList;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload.newProduct);
    }
    case "PRODUCTS_UPDATED": {
      return action.payload.updatedList;
    }
    case "PRODUCT_DELETED": {
      return action.payload.updatedList;
    }
    default: return state;
  }
}