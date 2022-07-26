
<script>
import PokeCard from "./PokeCard.vue";
export default {
//   data: () => ({
//       showModal: false,
//   }),
// //   methods: {
// //     openModalExample() {
// //       this.$vfm.show('example')
// //     }
// //   },
//   watch: {
// 	toggle(val) {
// 		console.log(val)
// 	  if (val) {
// 		this.$vfm.show('example')
// 	  } else {
// 		this.$vfm.hide('example')
// 	  }
// 	}
//   },
  props: ["pokemon","showModal"],
  components: { PokeCard },
}
</script>

<template>
  <vue-final-modal v-model="showModal" name="example" @closed="$emit('someEvent')">
      <poke-card :pokemon="pokemon"/>
  </vue-final-modal>
</template>
