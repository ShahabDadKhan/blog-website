<template>
  <v-app>
    <navigation />
    <v-main>
      <router-view />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { Navigation, TheFooter },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// .container {
//   max-width: 1440px;
// }

v-app-bar {
  height: 90px;
}

.f1 {
  font-size: 24px;
  font-weight: 600;
}
</style>
