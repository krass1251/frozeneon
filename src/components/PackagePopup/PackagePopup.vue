<template>
  <v-dialog
    v-model="dialogLocal"
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
        <strong>repository</strong>:
        {{$store.state.packages.packageResult?.repository?.url || 'N/A'}}
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
</template>

<script>
export default {
  name: 'PackagePopup',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogLocal: false,
    };
  },
  watch: {
    dialogLocal(newValue) {
      if (!newValue) {
        this.$emit('closeDialog');
      }
    },
    dialog(newValue) {
      this.dialogLocal = newValue;
    },
  },
};
</script>

<style scoped>

</style>
