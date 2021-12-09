import Vue from 'vue'
import Vuex from 'vuex'
import heroesStore from "./heroes-store";
import comicsStore from "./comics-store";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    heroes: heroesStore,
    comics: comicsStore
  }
})

export default store
