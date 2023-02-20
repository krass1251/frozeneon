<template>
  <form  @submit.prevent="search">
    <label for="search">Search <input id="search" v-model="text" type="text"></label>
  </form>
  ------
  <div v-for="result in results" :key="result.id">
    {{result.package.name}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      text: '',
      results: [],
    };
  },
  methods: {
    async search() {
      let response = {};
      try {
        response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${this.text}`);
      } catch (e) {
        console.error(e);
      } finally {
        this.results = response?.data?.objects;
      }
    },
  },
};
</script>
