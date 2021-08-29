<template>
  <v-app>
    <navigation v-if="!navigation" />
    <v-main class="pa-0">
      <router-view />
    </v-main>
    <the-footer v-if="!navigation" />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { Navigation, TheFooter },
  name: "App",

  data: () => ({
    navigation: null,
  }),
  mounted() {
    this.checkRout();
  },
  methods: {
    checkRout() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRout();
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: "Quicksand", sans-serif;
}
// .container {
//   max-width: 1440px;
// }

// v-app-bar {
//   height: 90px;
// }

// .v-main {
//   padding: 0px;
// }
</style>
