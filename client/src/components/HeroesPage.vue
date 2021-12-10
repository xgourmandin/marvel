<template>
<v-container>
  <MarvelSearch />
  <HereosList />
</v-container>
</template>

<script>
import MarvelSearch from "@/components/MarvelSearch";
import HereosList from "@/components/HereosList";
export default {
  name: "HeroesPage",
  components: {HereosList, MarvelSearch}
}
</script>

<style scoped>

</style>