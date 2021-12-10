<template>
  <v-container>
    <h4>It Appears in :</h4>
    <v-data-iterator
        :items="comics"
        no-data-text="No comics"
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
                  <h5>{{ item.title }}</h5>
                </v-card-title>
              </v-img>
              <v-card-text>
                {{ item.description ? item.description : "No description for this comics" }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import {mapState} from "vuex";
import store from "../store";

export default {
  name: "ComicsList",
  props: ['heroId'],
  mounted() {
    store.dispatch('loadComics', this.heroId)
  },
  data() {
    return {
      currentPage: 1,
      currentLimit: 15
    }
  },
  computed: {
    ...mapState({
      comics: state => state.comics.comics,
      pagingOptions: state => ({page: state.comics.page , itemsPerPage: state.comics.limit}),
      total: state => state.comics.total
    })
  },
  methods: {
    paginationChanged: function (e) {
      if (e.page !== this.pagingOptions.page || e.itemsPerPage !== this.pagingOptions.itemsPerPage) {
        store.dispatch('setComicsPagination', {page: e.page, limit: e.itemsPerPage})
      }
    }
  }
}
</script>

<style scoped>

</style>