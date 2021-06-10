export const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RETRIEVED": {
      return action.payload.productList;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload.newProduct);
    }
    case "PRODUCTS_UPDATED": {
      const { id, editedProduct } = action.payload;
      return state.map((product) => {
        if (product._id === id) {
          return Object.assign({}, product, {
            title: editedProduct.title,
            price: editedProduct.price,
            quantity: editedProduct.quantity,
          });
        } else {
          return product;
        }
      });
    }
    case "PRODUCT_DELETED": {
      return action.payload.updatedList;
    }
    default:
      return state;
  }
};
