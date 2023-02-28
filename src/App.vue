<template>
  <v-app>
    <app-header>
      <packages-search class="ml-8" @searchInput="setText"/>
    </app-header>
    <v-main>
      <packages-errors :text="text"/>
      <v-card :loading="$store.state.packages.isLoading" min-height="100%">
        <packages-output
          @onPackageClick="onPackageClick"
          v-if="$store.state.packages.packagesResultsTotal"/>
        <base-pagination @newPage="updatePage" :page="page"/>
      </v-card>
    </v-main>
    <package-popup :dialog="dialog" @closeDialog="closeDialog"/>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import BasePagination from '@/components/BasePagination/BasePagination.vue';
import PackagesSearch from '@/components/PackagesSearch/PackagesSearch.vue';
import PackagesErrors from '@/components/PackagesErrors/PackagesErrors.vue';
import PackagesOutput from '@/components/PackagesOutput/PackagesOutput.vue';
import PackagePopup from '@/components/PackagePopup/PackagePopup.vue';
import { mapActions, mapMutations } from 'vuex';
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import setPackageResult from '@/store/packages/mutations/setPackageResult';

export default {
  name: 'App',
  components: {
    PackagesErrors,
    AppHeader,
    PackagesSearch,
    PackagesOutput,
    BasePagination,
    PackagePopup,
    AppFooter,
  },
  data() {
    return {
      page: 0,
      text: '',
      dialog: false,
      results: [],
    };
  },
  methods: {
    ...mapActions('packages', ['getPackages', 'getPackage']),
    ...mapMutations('packages', ['setPackageResult']),
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
        url: this.$store.state.packages.searchApiUrl,
        text: this.text,
        from: this.page * this.$store.state.packages.resultsOnPage,
        size: this.$store.state.packages.resultsOnPage,
      });
    },
    onPackageClick(name) {
      this.dialog = true;
      this.getPackage({
        url: this.$store.state.packages.packageApiUrl,
        name,
      });
    },
    closeDialog() {
      this.dialog = false;
      setPackageResult({});
    },
  },
};
</script>

<style lang="scss" scoped></style>
