<template>
  <div class="container home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <h3>Welcome, {{ name }}</h3>
    <h4>Please select your team.</h4>

    <SearchBar />
    <PokemonList 
      :imageUrl="imageUrl" />
    <PokeTeams />
    

  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import axios from 'axios'
import SearchBar from '../components/SearchBar'
import PokemonList from '../components/PokemonList'
import PokeTeams from '../components/PokeTeams'

export default {
  data: () => {
    return {
      name: '',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    }
  },
  components: {
    SearchBar,
    PokemonList,
    PokeTeams
  },
  mounted() {
    this.name = this.$store.getters.getName;
  }
};
</script>

<style>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
