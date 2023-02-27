<template>
  <v-text-field
    v-model="searchInputText"
    append-icon="mdi-magnify"
    label="Search all of npm (min 2 characters)"
    @input="debouncedSearch"
    single-line
    hide-details
    dense
  ></v-text-field>
</template>

<script>
import debounce from '@/helpers/debounce';

export default {
  name: 'PackagesSearch',
  data() {
    return {
      searchInputText: '',
    };
  },
  methods: {
    search() {
      this.$emit('searchInput', this.searchInputText);
    },
  },
  created() {
    this.debouncedSearch = debounce(this.search, 200);
  },
};
</script>

<style scoped>

</style>
