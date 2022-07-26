<script>
export default {
  props: ["pokemon"],
//   data() {
// 	return {
// 	  showModal: false
// 	};
//   },
};
</script>



<template>
  <div class="flex-container" @click="$emit('showPokemon',pokemon)">
    <img :src="pokemon.imageURL" />
    <h2>{{ pokemon.name }}</h2>
  </div>
</template>


<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap of 2vw */
  margin: 0 
}
img {
  height: 8vh;
}
/* vertically center text in div */
h2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>