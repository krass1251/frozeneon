<template>
  <v-footer class="bg-grey-lighten-1 flex-grow-0">
    <v-container>
      <v-row justify="start" align="start" no-gutters>
        <v-col class="text-center mt-4 d-flex flex-column align-center order-sm-first" cols="12" sm="3"  >
          <img class="v-avatar avatar" src="@/assets/images/1_bg_crop.jpg" alt="Andrei">
          <span class="mx-auto my-1 text-grey-darken-3">Andrei Krasovskii</span>
        </v-col>
        <v-col class="mt-4 d-flex flex-column align-center" order="first" cols="12" sm="9">
        <span class="mx-auto my-1 text-grey-darken-3">Social links</span>
        <v-row justify="center" align="center" no-gutters>
          <v-btn
            :href="icon.link"
            target="_blank"
            v-for="icon in icons"
            :key="icon.name"
            class="mx-4"
            :icon="icon.name"
            link=""
            color="grey-darken-3"
            variant="text"
          ></v-btn>
        </v-row>
      </v-col>
    </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      icons: [
        {
          name: 'mdi-github',
          link: 'https://github.com/krass1251/frozeneon',
        },
        {
          name: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/krass1251/',
        },
        {
          name: 'mdi-file-account',
          link: 'https://docs.google.com/document/d/1-S1jFlejdByWZUXhfG_6cz8X6mI1hq7DxjBc7L0cjAw/edit#',
        },
        {
          name: 'mdi-youtube',
          link: 'https://youtu.be/690zClzXbck',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  display: block;
  border: 2px solid white;
  width: 100%;
  max-width: 85px;
}
</style>
