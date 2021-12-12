<template>
  <v-container>
    <v-card>
      <v-img :src="hero.thumbnail.path+'/landscape_incredible.'+hero.thumbnail.extension" contain max-height="262" max-width="464" />
      <v-card-title>{{hero.name}}</v-card-title>
      <v-card-text>{{hero.description}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HeroDetails",
  computed: {
    ...mapState({
      hero: state => state.heroes.selectedHero
    })
  }
}
</script>
