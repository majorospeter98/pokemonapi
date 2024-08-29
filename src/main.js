import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import PokemonList from './components/PokemonList.vue'
import PokemonListDetail from './components/PokemonListDetail.vue'




const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/pokemons",
    },
    {
      path: "/pokemons",
      component: PokemonList,
    },

    {
      path: "/pokemons/:name",props:true,
      component: PokemonListDetail,
     
    },
      

  ],
});
const app = createApp(App);
app.use(router);


app.mount("#app");
