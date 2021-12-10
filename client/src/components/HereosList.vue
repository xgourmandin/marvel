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
              v-for="item in items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
          >
            <v-card>
              <v-img :src="item.thumbnail.path+'/standard_xlarge.'+item.thumbnail.extension"
                     class="white--text align-end"
                     gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                     height="200px">
                <v-card-title>
                  <h4 @click="loadHero(item.id)" class="clickable">{{ item.name }}</h4>
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

export default {
  name: "HereosList",
  data() {
    return {
      currentPage: 1,
      currentLimit: 15
    }
  },
  computed: {
    ...mapState({
      heroes: state => state.heroes.heroes,
      pagingOptions: state => ({page: state.heroes.page , itemsPerPage: state.heroes.limit}),
      total: state => state.heroes.total
    })
  },
  methods: {
    loadHero: function () {

    },
    paginationChanged: function (e) {
      if (e.page !== this.currentPage || e.itemsPerPage !== this.currentLimit) {
        store.dispatch('setPagination', {page: e.page, limit: e.itemsPerPage})
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