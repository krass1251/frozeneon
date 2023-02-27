<template>
  <v-app>
    <app-header>
      <packages-search class="ml-8" @searchInput="setText"/>
    </app-header>
    <v-main>
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
      <v-card :loading="$store.state.packages.isLoading" min-height="100%">
        <packages-output
          @onPackageClick="onPackageClick"
          v-if="$store.state.packages.packagesResultsTotal"/>
        <base-pagination @newPage="updatePage" :page="page"/>
      </v-card>
    </v-main>

    <v-dialog
      v-model="dialog"
      width="80%"
      :close-on-content-click="true"
    >
      <v-progress-circular
        :size="70"
        indeterminate
        class="primary--text align-self-center"
        v-if="$store.state.packages.isPopupLoading"
      />
      <v-card v-else>
          <v-card-text>
            <strong>Name</strong>: {{$store.state.packages.packageResult?.name || 'N/A'}}
          </v-card-text>
          <v-card-text>
            <strong>description</strong>: {{$store.state.packages.packageResult?.description || 'N/A'}}
          </v-card-text>
          <v-card-text>
            <strong>homepage</strong>: {{$store.state.packages.packageResult?.homepage || 'N/A'}}
          </v-card-text>
          <v-card-text>
            <strong>repository</strong>: {{$store.state.packages.packageResult?.repository?.url || 'N/A'}}
          </v-card-text>
          <div v-if="$store.state.packages.packageResult?.contributors">
          <v-card-text
            v-for="(contributor, index) in $store.state.packages.packageResult?.contributors"
            :key="contributor?.email || contributor?.name"
          >
            <strong>contributors {{index + 1}}</strong>: {{contributor?.email || 'N/A'}}
          </v-card-text>
        </div>
      </v-card>
    </v-dialog>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import BasePagination from '@/components/BasePagination/BasePagination.vue';
import PackagesSearch from '@/components/PackagesSearch/PackagesSearch.vue';
import PackagesOutput from '@/components/PackagesOutput/PackagesOutput.vue';
import { mapActions, mapMutations } from 'vuex';
import AppFooter from '@/components/AppFooter/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    PackagesSearch,
    PackagesOutput,
    BasePagination,
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
  watch: {
    dialog(newValue) {
      if (!newValue) {
        this.setPackageResult({});
      }
    },
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
  },
};
</script>

<style lang="scss" scoped></style>
