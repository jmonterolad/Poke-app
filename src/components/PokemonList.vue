<template>
  <div class="container col-sm-2 col-md-6 col-lg-8">
      <div v-if="pokemon" class="row justify-content-between">
          <div v-for="pokename in pokemon" :key="pokename.id" class="m-2 p-3 shadow rounded col-md-3">
              <img :src="imageUrl + pokemon.id + '.png'" width="96" height="96" alt="">
              <h3>{{ pokename.name }}</h3>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name: 'poke',
    props: [
        'imageUrl'
    ],
    data() {
      return {
        pokemon: []
      }
    },
    mounted() {
        Vue.axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')
        .then((response) => {
            this.pokemon = response.data.results;
        });
    }
}
</script>

<style>
    h3 {
        text-transform: capitalize;
    }
</style>