<template>
  <v-app>
    <v-main class="pa-0">
      <navigation v-if="!navigation" />
      <router-view />
      <the-footer v-if="!navigation" />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TheFooter from "./components/TheFooter.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  components: { Navigation, TheFooter },
  name: "App",

  data: () => ({
    navigation: null,
  }),

  created() {
    // Updating the state of user in our store so as to know if the user is loged in or not
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        console.log("email", this.$store.state.profileEmail);
        console.log("user1", this.$store.state.user);
      }
    });
    this.checkRout();
  },
  methods: {
    // checking the route to hide Navigation & Footer if we are on log in or registiration form
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
