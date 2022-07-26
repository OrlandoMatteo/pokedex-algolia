<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import PokeSearch from "./components/PokeSearch.vue";
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <h1>Welcome to <b>YAP</b> (Yet Another Pokedex)</h1>
  <PokeSearch />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
body {
  font-family: "Ubuntu", sans-serif;
}
</style> 