<template>
  <div>
    <button @click="prevNextPage(-1)" :disabled="localPage === 0">prev</button>
    <button
      @click="prevNextPage(1)"
      :disabled="localPage === lastPage"
    >
      next
    </button>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  data() {
    return {
      localPage: this.page,
      lastPage: Math.floor(
        this.$store.state.packages.packageResultsTotal / this.$store.state.packages.resultsOnPage,
      ) - 1,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    prevNextPage(value) {
      this.localPage += value;
    },
  },
  watch: {
    localPage(newPage) {
      console.log('this.$store.state.packages.packageResultsTotal / this.$store.state.packages.resultsOnPage');
      console.log(this.$store.state.packages.packageResultsTotal / this.$store.state.packages.resultsOnPage);
      this.$emit('newPage', newPage);
    },
  },
};
</script>

<style scoped>

</style>
