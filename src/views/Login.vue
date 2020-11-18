<template>
  <div class="container mt-4">
      <h1>Welcome to Poke-app</h1>

    <div>
        <b-form @submit="onSubmit" v-if="show">

        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
            <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Enter name"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.lastname"
            required
            placeholder="Enter Last Name"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" @click="changeUrl">Enter</b-button>
        </b-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
      },
      changeUrl: function() {
        this.$router.push({name: 'Home'});
      }
    }
}
</script>