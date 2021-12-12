<template>
  <v-container>
    <v-data-iterator
        :items="heroes"
        no-data-text="Search for your heroes ..."
        :options="pagingOptions"
        :server-items-length="total"
        @pagination="paginationChanged">
      <template v-slot:default="{ items }">
        <v-row>
          <v-col
              v-for="hero in items"
              :key="hero.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
          >
            <v-card>
                <v-img :src="hero.thumbnail.path+'/standard_xlarge.'+hero.thumbnail.extension"
                       class="white--text align-end clickable"
                       gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                       height="200px"
                @click="selectHero(hero)">
                  <v-card-title>
                    <h5 class="clickable">{{ hero.name }}</h5>
                  </v-card-title>
                </v-img>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import store from "../store";
import router from "../router";

export default {
  name: "HereosList",
  computed: {
    ...mapState({
      heroes: state => state.heroes.heroes,
      pagingOptions: state => ({page: state.heroes.page, itemsPerPage: state.heroes.limit}),
      total: state => state.heroes.total
    })
  },
  methods: {
    selectHero: function (hero) {
      store.dispatch('selectHero', hero)
      router.push({name: 'Details', params: {id: hero.id}})
    },
    paginationChanged: function (e) {
      if (e.page !== this.pagingOptions.page || e.itemsPerPage !== this.pagingOptions.itemsPerPage) {
        store.dispatch('setHeroesPagination', {page: e.page, limit: e.itemsPerPage})
      }
    }
  }
}
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
}
</style>