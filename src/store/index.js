import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      chosePopup: 1,
      isOpen: false,
      choseCity: 0,
      htmlPage:"",
      address: [
        {
          id: 1,
          name: "Москва",
        },
        {
          id: 2,
          name: "Санкт-Петербург",
        },
        {
          id: 3,
          name: "Казань",
        },
      ],
    };
  },
  mutations: {
    close(state){
      state.isOpen = false;
      state.chosePopup = 1
    }
  },
  actions: {},
  modules: {},
});
