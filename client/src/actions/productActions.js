import apiClient from "../lib/apiClient";

export const productsRetrievedSuccess = (data) => {
  return {
    type: "PRODUCTS_RETRIEVED",
    payload: {
      productList: data,
    },
  };
};

export const productsRetrieved = () => {
  return function (dispatch) {
    return apiClient.getProducts((products) => {
      dispatch(productsRetrievedSuccess(products));
    });
  };
};

export const productAddedSuccess = (data) => {
  return {
    type: "PRODUCT_ADDED",
    payload: {
      newProduct: data,
    },
  };
};

export const productAdded = (newProduct) => {
  return function (dispatch) {
    return apiClient.addProduct(newProduct, (data) => {
      dispatch(productAddedSuccess(data));
    });
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
