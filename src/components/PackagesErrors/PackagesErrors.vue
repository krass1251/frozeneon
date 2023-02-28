<template>
  <h3
    v-if="!text.length"
    class="text-center pa-4"
  >
    To see the result use the search bar above.
  </h3>
  <h3
    v-if="text.length === 1"
    class="text-center pa-4 text-decoration-underline"
  >
    Use at least 2 characters, these are the rules.
  </h3>
  <h3
    v-if="isNoResults"
    class="text-center pa-4"
  >
    Sorry, no results. But you can create a package with this name =)
  </h3>
</template>

<script>
export default {
  name: 'PackagesErrors',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    isNoResults() {
      return this.text.length > 1
        && this.$store.state.packages.packagesResultsTotal === 0
        && !this.$store.state.packages.isLoading;
    },
  },
};
</script>

<style scoped>

</style>
