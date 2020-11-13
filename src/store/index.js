import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peoples: [],
  },
  mutations: {
    DISPLAY_STARWARS(state, results) {
      this.state.peoples = results
    },
    DISPLAY_NEWDATA(state, results) {
      this.state.peoples = results
    }
  },
  actions: {
    async loadPeople(ctx) {

      const response = await fetch('https://swapi.dev/api/people/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DISPLAY_STARWARS', data.results);
    },
    async loadNewData(ctx, number) {

      const response = await fetch('https://swapi.dev/api/people/?page=' + number, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DISPLAY_NEWDATA', data.results);
      console.log(data.results)
    },

  },
  modules: {
  }
})
