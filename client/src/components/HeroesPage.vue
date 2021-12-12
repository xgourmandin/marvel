<template>
<v-container>
  <MarvelSearch />
  <HeroesList />
</v-container>
</template>

<script>
import MarvelSearch from "./MarvelSearch";
import HeroesList from "./HeroesList";

export default {
  name: "HeroesPage",
  components: {HeroesList, MarvelSearch}
}
</script>

<style scoped>

</style>