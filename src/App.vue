<template>
  <form @submit.prevent>
    <label for="search">Search
      <input id="search" v-model="text" @input="debouncedSearch" type="text">
    </label>
  </form>
  <button @click="page--">prev</button>
  <button @click="page++">next</button>
  <br/>------
  <div v-for="result in results" :key="result.id">
    {{ result.package.name }}
  </div>
</template>

<script>
import { getPackages } from '@/services/requestService';
import debounce from '@/helpers/debounce';

export default {
  name: 'App',
  data() {
    return {
      text: '',
      results: [],
      page: 0,
    };
  },
  watch: {
    page() {
      this.search();
    },
  },
  methods: {
    async search() {
      console.log('search');
      this.results = await getPackages({
        url: this.$store.state.apiUrl,
        text: this.text,
        from: this.page * this.$store.state.resultsOnPage,
        size: this.$store.state.resultsOnPage,
      });
    },
  },
  created() {
    this.debouncedSearch = debounce(this.search, 200);
  },
};
</script>
