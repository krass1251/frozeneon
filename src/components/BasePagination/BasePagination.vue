<template>
  <div class="d-flex justify-center mt-4" v-if="lastPage > 1">
    <v-btn
      class="ma-2 pa-2"
      @click="prevNextPage(-1)"
      :disabled="page === 0"
      variant="outlined"
    >
      &#60;
    </v-btn>
    <span class="ma-2 pa-2">{{ page + 1 }} of {{ lastPage }}</span>
    <v-btn
      class="ma-2 pa-2"
      @click="prevNextPage(1)"
      :disabled="page + 1  === lastPage"
      variant="outlined"
    >
      &#62;
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  computed: {
    lastPage() {
      return Math.ceil(
        this.$store.state.packages.packagesResultsTotal / this.$store.state.packages.resultsOnPage,
      );
    },
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
      this.$emit('newPage', this.page + value);
    },
  },
};
</script>

<style scoped>

</style>
