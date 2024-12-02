<template>
  <div
    v-if="pokemonNames.sprites"
    class="flex items-center flex-col gap-4 justify-center mt-6"
  >
    <img
      :src="pokemonNames.sprites.front_default"
      :alt="pokemonNames.name + ' ' + 'image'"
    />
    <h1 class="text-4xl font bold">name: {{ pokemonNames.name }}</h1>
    <p>Weight: {{ pokemonNames.weight }}</p>
    <p>Height: {{ pokemonNames.height }}</p>
    <router-link class="button" to="/pokemons">Main Page</router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["name"],
  data() {
    return {
      pokemonNames: [],
    };
  },
  async created() {
    await this.getName();
  },
  methods: {
    async getName() {
      try {
        const getPokemonDetails = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.name}`
        );
        this.pokemonNames = getPokemonDetails.data;
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    },
  },
};
</script>
