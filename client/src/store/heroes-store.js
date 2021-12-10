import api from "../api/api";

export default {
  state: {
    searchTerm: '',
    heroes: [],
    page: 1,
    limit: 15,
    total: 0,
    selectedHero: undefined
  },
  mutations: {
    SET_SEARCH_TERM(state, searchTerm) {
      state.searchTerm = searchTerm
    },
    SET_PAGINATION_OPTIONS(state, paginationOptions) {
      state.page = paginationOptions.page
      state.limit = paginationOptions.limit
    },
    SET_HEROES(state, apiResponse) {
      state.heroes = apiResponse.results
      state.page = apiResponse.page
      state.limit = apiResponse.limit
      state.total = apiResponse.total
    },
    SELECT_HERO(state, hero) {
      state.selectedHero = hero
    }
  },
  actions: {
    setSearchTerm({commit, dispatch}, searchTerm) {
      commit('SET_SEARCH_TERM', searchTerm)
      dispatch('loadHeroes')
    },
    setHeroesPagination({commit, dispatch}, paginationOptions) {
      commit('SET_PAGINATION_OPTIONS', paginationOptions)
      dispatch('loadHeroes')
    },
    loadHeroes({state, commit}) {
      api().get('/heroes', {params: { name: state.searchTerm, page: state.page , limit: state.limit  }})
        .then(apiResponse => commit('SET_HEROES', apiResponse.data))
    },
    selectHero({commit}, hero) {
      commit('SELECT_HERO', hero)
    }
  }
}
