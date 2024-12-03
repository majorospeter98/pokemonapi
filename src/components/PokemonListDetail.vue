<template>
  <div
    v-if="pokemonNames.sprites"
    class="flex items-center flex-col gap-4 justify-center mt-6"
  >
    <img class="h-[180px] w-[210px]"
      :src="pokemonNames.sprites.front_default"
      :alt="pokemonNames.name + ' ' + 'image'"
    />
    <h1 class="text-5xl font bold text-center">name: {{ pokemonNames.name }}</h1>
    <p class="text-xl">Weight: {{ pokemonNames.weight }}</p>
    <p class="text-xl">Height: {{ pokemonNames.height }}</p>
    <p class="text-xl">Experience: {{ pokemonNames.base_experience }}</p>
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
