import api from "@/api/api";

export default {
  state: {
    comics: [],
    page: 1,
    limit: 15,
    total: 0,
    heroId: null
  },
  mutations: {
    SET_COMICS(state, comicsResponse) {
      state.comics = comicsResponse.results
      state.page = comicsResponse.page
      state.limit = comicsResponse.limit
      state.total = comicsResponse.total
    },
    SET_COMICS_PAGINATION_OPTIONS(state, paginationOptions) {
      state.page = paginationOptions.page
      state.limit = paginationOptions.limit
    }
  },
  actions: {
    loadComics({state, commit}, heroId) {
      state.heroId = heroId
      state.comics = []
      api().get(`/comics/${heroId}`, {params: { page: state.page, limit: state.limit }})
        .then(response => commit('SET_COMICS', response.data))
    },
    setComicsPagination({state, commit, dispatch}, paginationOptions) {
      commit('SET_COMICS_PAGINATION_OPTIONS', paginationOptions)
      dispatch('loadComics', state.heroId)
    },
  },
  modules: {
  }
}
