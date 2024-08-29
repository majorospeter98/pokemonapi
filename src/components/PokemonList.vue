<template>
<div>
  <p>Select a Pokemon type</p>
        <select name="pokemons" id="pokemons" v-model="teszt">
<option value="" selected disabled hidden>Choose here</option>
  <option value=normal>normal</option>
  <option value="water">water</option>
  <option value="ground">ground</option>
   
</select>
<div>
<label for="nameSearch"> Search by name:</label>
 <input type="text" id="nameSearch" v-model="searchByName" @input="filterName"> 
  </div>
<ul>
 
 
  <li v-for="pokemon in filterPokemons" :key="pokemon.pokemon.name"> 

{{pokemon.pokemon.name}} 
<router-link :to="'/pokemons/' + pokemon.pokemon.name"> Details</router-link>
 </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
pokemons: [],
type:'',
teszt: '',
searchByName:'',
filterPokemons: [],
name:[]
    }
  },
  computed:{
    openDetails(name){
return '/pokemons/' + name
    }
  },
  methods: {
   
    async fetchPokemons() {
      try {
       const teszt= await axios.get(`https://pokeapi.co/api/v2/type/${this.teszt}`);
           this.pokemons = teszt.data;
        this.filterPokemons=teszt.data.pokemon
        console.log(this.filterPokemons)
            } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    },
    filterName(){
     this.filterPokemons= this.pokemons.pokemon.filter(poke =>poke.pokemon.name.includes(this.searchByName))
     console.log(this.filterPokemons.length)
    }
  },
watch: {
    teszt: 'fetchPokemons'
  },
}

</script>



<style>

</style>