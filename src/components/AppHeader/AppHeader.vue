<template>
    <v-toolbar prominent>
      <v-toolbar-title class="title d-none d-sm-flex flex-grow-0 w-auto ">
        JS<strong>DELIVR</strong>
      </v-toolbar-title>
      <slot/>
    </v-toolbar>
</template>
<script>

export default {
  name: 'AppHeader',

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  min-width: auto;
}
</style>
