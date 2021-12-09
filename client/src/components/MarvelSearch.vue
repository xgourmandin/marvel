<template>
  <v-form @submit.prevent="searchHeroes">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
              v-model="searchTerm"
              :append-outer-icon="searchTerm ? 'mdi-magnify' : ''"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Search for heroes"
              hint="Hulk, Iron man, Black Widow ...."
              type="text"
              @click:append-outer="searchHeroes"
              @click:clear="clearSearch"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import store from "../store";

export default {
  name: "MarvelSearch",
  data() {
    return {
      searchTerm: null
    }
  },
  methods: {
    clearSearch: function () {
      this.searchTerm = null;
    },
    searchHeroes: function () {
      store.dispatch('loadHeroes', this.searchTerm)
    }
  }
}
</script>

<style scoped>

</style>