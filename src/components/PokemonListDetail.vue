<template>
  <div v-if="names.sprites">
 <img :src="names.sprites.front_default" alt="">
        <p>{{names.name}} </p>
<p>{{names.weight}} </p>

<p>{{names.height}} </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
props:["name"],

data(){
    return{
names:[],
    }
},
async created() {
    await this.getName();
},
methods:{
   
        async getName() {
      try {
       const teszt= await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.name}`);
       
        this.names = teszt.data;
            } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      
    }
    }
}
}

</script>

<style>

</style>