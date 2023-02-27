<template>
  <v-app>
    <app-header>
      <packages-search class="ml-8" @searchInput="setText"/>
    </app-header>
    <br/>------
    <div v-for="result in $store.state.packages.packageResults" :key="result.id">
      {{ result.package.name }}
    </div>
    <base-pagination @newPage="updatePage" :page="page"/>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import BasePagination from '@/components/BasePagination/BasePagination.vue';
import PackagesSearch from '@/components/PackagesSearch/PackagesSearch.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { BasePagination, AppHeader, PackagesSearch },
  data() {
    return {
      page: 0,
      text: '',
      results: [],
    };
  },
  methods: {
    ...mapActions('packages', ['getPackages']),
    updatePage(newPage) {
      this.page = newPage;
      this.search();
    },
    setText(text) {
      this.text = text;
      this.page = 0;
      this.search();
    },
    search() {
      this.getPackages({
        url: this.$store.state.packages.apiUrl,
        text: this.text,
        from: this.page * this.$store.state.packages.resultsOnPage,
        size: this.$store.state.packages.resultsOnPage,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
