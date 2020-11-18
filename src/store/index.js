import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    userData: []
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
      state.userData.push(payload);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getName: state => state.name
  }
});
