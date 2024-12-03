<template>
  <div class="container">
    <p class="mt-5 text-center text-4xl">Select a Pokemon Type</p>

    <div class="flex flex-col items-center mt-6">
      <select
        name="pokemons"
        id="pokemons"
        v-model="selectedPokemon"
        class="min-w-[280px] p-2 border-none outline-none cursor-pointer"
      >
        <option value="" selected disabled hidden>Choose here</option>
        <option value="normal">normal</option>
        <option value="water">water</option>
        <option value="ground">ground</option>
      </select>

      <label class="mt-5" for="nameSearch"> Search by name:</label>
      <input
        class="text-lg w-[260px] pl-2 border-none outline-none"
        type="text"
        id="nameSearch"
        v-model="searchByName"
        @input="filterName"
      />
    </div>
    <ul
      class="flex justify-center items-center flex-wrap gap-6 mt-10 mb-10 text-center"
    >
      <li v-for="pokemon in filterPokemons" :key="pokemon.pokemon.name">
        <div
          class="h-[250px] w-[330px] flex flex-col items-center justify-between p-3 bg-linear-bg rounded-xl text-black shadow-xl"
        >
          <h1 class="font-bold text-2xl uppercase">
            {{ pokemon.pokemon.name }}
          </h1>
          <router-link class="button" :to="'/pokemons/' + pokemon.pokemon.name">
            Details</router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      pokemons: [],
      type: "",
      selectedPokemon: "normal",
      searchByName: "",
      allInformation: [],
      filterPokemons: [],
      name: [],
    };
  },
  computed: {
    openDetails(name) {
      return "/pokemons/" + name;
    },
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        const pokemons = await axios.get(
          `https://pokeapi.co/api/v2/type/${this.selectedPokemon}`
        );
        this.pokemons = pokemons.data;

        this.filterPokemons = pokemons.data.pokemon;
        this.allInformation = pokemons.data.sprites;
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    },
    filterName() {
      this.filterPokemons = this.pokemons.pokemon.filter((poke) =>
        poke.pokemon.name
          .toUpperCase()
          .includes(this.searchByName.toUpperCase())
      );
    },
  },
  watch: {
    selectedPokemon: "fetchPokemons",
  },
};
</script>

<style>
select {
  transition: border-color 0.3s ease, background-color 0.3s ease;
}
select:hover,
select:focus {
  border-radius: 1rem;
  background-color: #e6f7ff;
}
</style>
