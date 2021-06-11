import axios from "axios";

const apiClient = {
  getProducts(callback) {
    return axios
      .get("/api/products")
      .then((response) => response.data)
      .then(callback)
      .catch((error) => console.log(error));
  },

  addProduct({ name, price, quantity }, callback) {
    const newProduct = {
      title: name,
      price: parseFloat(price).toFixed(2),
      quantity: parseInt(quantity, 10),
    };

    return axios
      .post("/api/products", newProduct)
      .then((response) => response.data)
      .then(callback)
      .catch(console.error);
  },
};

export default apiClient;
