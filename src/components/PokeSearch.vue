
<template>
  <Pokemodal
    :showModal="toggleValue"
    :pokemon="pokeToShow"
    @some-event="callback"
  />
  <ais-instant-search :search-client="searchClient" index-name="pokeindex_v2">
    <div class="filters">
      <h3><b class="fa fa-chevron-right"></b> Types</h3>
	  <hr>

      <ais-menu attribute="types" />
    </div>

    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <!-- <h2>{{ item.name }}</h2> -->
        <poke-hit :pokemon="item" @show-pokemon="callback" />
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";
import PokeHit from "./PokeHit.vue";
import Pokemodal from "./Pokemodal.vue";

export default {
  components: { PokeHit, Pokemodal },
  data() {
    return {
      searchClient: algoliasearch(
        "0KDTOHXPSM",
        "013c326cf0fd2640cd338db403fe0add"
      ),
      toggleValue: false,
      pokeToShow: { types: [""], evos: [] },
    };
  },
  methods: {
    callback: function (pokemon) {
      if (!pokemon) {
        this.pokeToShow = { types: [""], evos: [] };
      }
      //toggle the value of this.toggleValue
      this.toggleValue = !this.toggleValue;
      //pass the pokemon to the modal
      this.pokeToShow = pokemon;
    },
  },
  //   mounted() {
  //     this.searchClient.search("").then(({ hits }) => {
  //       this.hits = hits;
  //     });
  //   },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
.ais-instant-search {
  width: 100%;
}
.filters {
  border:solid;
  border-color: var(--color-border);
  padding:0.5rem;
  border-radius: 0.5rem;
}
div{
	margin-bottom: 0.7rem;
}
</style>
