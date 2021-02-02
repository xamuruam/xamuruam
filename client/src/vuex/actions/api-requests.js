import axios from 'axios';

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios('api/products', {
      method: 'GET'
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data.products);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
};
