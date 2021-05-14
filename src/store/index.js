import { createStore } from "vuex";
import axios from "axios";

const randomUrl = `https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new`;

export default createStore({
  state: {
    counter: 777,
    history: [777],
  },
  mutations: {
    /*
      mutation --> commit
      mutation always contains synchronous code/functions
    */

    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },

    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter);
    },
  },
  actions: {
    /*
      actions --> dispatch
      actions can run asynchronous functions
    */

    async addRandomNumber(context) {
      let res = await axios.get(randomUrl);
      context.commit("addToCounter", res.data);
    },
  },
  getters: {
    /*
      used to access the state
      especially if you want manipulated state value
      methods needs to return another method which contains the payload
    */

    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },

  modules: {},
});
