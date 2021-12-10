<template>
  <v-container>
    <router-link to="/">&lt; Back</router-link>
    <HeroDetails />
    <ComicsList :hero-id="$route.params.id" />
  </v-container>
</template>

<script>
import HeroDetails from "./HeroDetails";
import ComicsList from "./ComicsList";
export default {
  name: "ComicsPage",
  components: {HeroDetails, ComicsList}
}
</script>

<style scoped>

</style>