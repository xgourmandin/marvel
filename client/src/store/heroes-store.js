import api from "../api/api";

export default {
  state: {
    heroes: [],
    offset: 0,
    limit: 20,
    total: 0
  },
  mutations: {
    SET_HEROES(state, apiResponse) {
      state.heroes = apiResponse.results
      state.offset = apiResponse.offset
      state.limit = apiResponse.limit
      state.total = apiResponse.total
    },
  },
  actions: {
    loadHeroes(store, name, offset, limit) {
      api().get('/heroes', {params: { name: name, offset: offset, limit: limit }})
        .then(apiResponse => store.commit('SET_HEROES', apiResponse.data))
    }
  }
}
