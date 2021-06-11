export const productsRetrievedSuccess = (data) => {
  return {
    type: "PRODUCTS_RETRIEVED",
    payload: {
      productList: data,
    },
  };
};

export const newProductAdded = (newProduct) => {
  return {
    type: "PRODUCT_ADDED",
    payload: {
      newProduct: newProduct,
    },
  };
};

export const productsUpdated = (editedProduct, id) => {
  return {
    type: "PRODUCTS_UPDATED",
    payload: { id, editedProduct },
  };
};

export const productsOneDeleted = (id) => {
  return {
    type: "PRODUCT_DELETED",
    payload: { id },
  };
};
