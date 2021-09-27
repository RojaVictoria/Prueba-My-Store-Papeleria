import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { productsModule } from "./modules/products";
import { cartModule } from "./modules/cart";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products: productsModule,
    cart: cartModule
  }
});
