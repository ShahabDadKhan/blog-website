<template>
  <v-container fluid class="primary d-flex align-center white--text">
    <v-row align="center" class="footer" style="height:300px">
      <v-col offset-sm="1" cols="12" sm="3" class="d-flex flex-column  ">
        <v-row class="f1">
          <router-link to="#" class="mr-4">
            <h1 class="white--text">FireBlogs</h1>
          </router-link>
        </v-row>
        <v-row class="mt-16">
          <router-link to="#" class="mr-4">
            <v-icon class="white--text">mdi-instagram</v-icon>
          </router-link>
          <router-link to="#" class="mr-4">
            <v-icon class="white--text">mdi-linkedin</v-icon>
          </router-link>
          <router-link to="#" class="mr-4">
            <v-icon class="white--text">mdi-youtube</v-icon>
          </router-link>
          <router-link to="#" class="mr-4">
            <v-icon class="white--text">mdi-twitter</v-icon>
          </router-link>
        </v-row>
      </v-col>
      <v-col sm="2" cols="12 " class="d-flex flex-column">
        <!-- <ul> -->
        <li>Home</li>
        <li>Blogs</li>
        <li>Login/Register</li>
        <!-- </ul> -->
      </v-col>
      <v-col offset-sm="3" sm="3" cols="12" class="pa-0">
        <span>
          Copyright&#169; 2021 All Rights Reserved
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
// .container {
// height: 30%;
// @media only screen and (max-width: 600px) {
//   // display: block;
//   text-align: center;
// }
// }

li {
  cursor: pointer;
  // margin: 15px 0px;
  text-transform: uppercase;
  list-style: none;

  &:nth-last-child(2) {
    margin: 15px 0px;
  }
}
.footer {
  @media only screen and (max-width: 600px) {
    // display: block;
    text-align: center;
  }
}
.row {
  @media only screen and (max-width: 600px) {
    display: block;
    &:last-child {
      margin-top: 40px !important;
      // text-align: center;
    }
  }
}
</style>
