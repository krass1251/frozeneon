<template>
  <v-table density="compact" >
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Author
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in $store.state.packages.packagesResults"
      :key="item?.id"
      @click="onPackageClick(item?.package?.name)"
    >
      <td>{{ item.package?.name || 'N/A' }}</td>
      <td>{{ item.package?.author?.name || 'N/A' }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: 'PackagesOutput',
  methods: {
    onPackageClick(name) {
      this.$emit('onPackageClick', name);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
