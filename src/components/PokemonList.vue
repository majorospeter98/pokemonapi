<template>
<div class="containerteszt">
  <p class="mt-5 text-center text-4xl">Select a Pokemon Type</p>

  <div class="flex flex-col items-center mt-6">
        <select name="pokemons" id="pokemons" v-model="teszt">
<option value="" selected disabled hidden>Choose here</option>
  <option value=normal>normal</option>
  <option value="water">water</option>
  <option value="ground">ground</option>
   
</select>
 
<label class="mt-5" for="nameSearch"> Search by name:</label>
 <input  type="text" id="nameSearch" v-model="searchByName" @input="filterName"> 
  </div>
<ul class="flex justify-evenly flex-wrap gap-7 mt-10 ">
  <li v-for="pokemon in filterPokemons" :key="pokemon.pokemon.name"> 

<div class="h-[200px] w-[300px] flex flex-col items-center justify-between p-3  bg-linear-bg   rounded-xl text-black  " >
<h1 class="font-bold text-1xl">Name: {{pokemon.pokemon.name}} </h1>

<router-link class="button-9" :to="'/pokemons/' + pokemon.pokemon.name"> Details</router-link>
</div>
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
teszt: 'normal',
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
  created(){
this.fetchPokemons();
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
.teszt{
  
margin:0 auto;
max-width:1200px;
width:80%;
}
</style>