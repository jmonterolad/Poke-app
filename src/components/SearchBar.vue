<template>
  <div class="container">
      <div class="container my-3">
        <h4>You can use the search filter to narrow down your search!</h4>
        <div class="form-group d-flex justify-content-between my-5">
            <label class="w-25">Search for Pokemon</label>
            <input type="text" id="pokeSearch" name="pokeSearch" v-model="pokeSearch" class="w-75 form-control">
        </div>

        <div class="row justify-content-between">
            <div v-for="pokename in filtered_results" :key="pokename.id" class="my-2 p-3 shadow round_container col-md-3 mx-2">
                <h3>
                    {{ pokename.name }}
                </h3>
                <button class="border_button">
                    View Statistics
                </button>
            </div>
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
  data() {
    return {
      pokeSearch: ''
    }
  },
  // computed: {
  //   filtered_results: function() {
  //     return this.pokemon.filter((value) => {
  //       return (value.name.match(this.pokeSearch));
  //     })
  //   }
  // },
  // filter: {
  //   capitalize: function(value) {
  //     return value[0].toUpperCase() + value.slice(1);
  //   }
  // },
  mounted() {
      Vue.axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')
      .then((response) => {
          this.pokemon = response.data.results;
          console.warn(response)
      });
  }

}
</script>

<style>

</style>