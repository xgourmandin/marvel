<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Marvel Logo"
          class="shrink mr-2"
          contain
          src="Marvel_Logo.svg"
          transition="scale-transition"
          width="150"
        />
        <h3>Search Your Heroes !</h3>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <MarvelSearch/>
      <HereosList />
    </v-main>
  </v-app>
</template>

<script>
import MarvelSearch from "@/components/MarvelSearch";
import HereosList from "@/components/HereosList";

export default {
  name: 'App',

  components: {
    HereosList,
    MarvelSearch,
  },

};
</script>
