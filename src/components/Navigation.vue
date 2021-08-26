<template>
  <!-- <div class="container"> -->
  <v-container>
    <v-app-bar
      height="100px"
      style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
      app
      color="white"
    >
      <v-row>
        <v-col offset-md="1" md="2" sm="12" cols="12">
          <router-link to="#" class="links f1">
            FireBlogs
          </router-link>
        </v-col>
        <!-- </v-row> -->

        <!-- <v-spacer></v-spacer> -->
        <!-- <v-row> -->
        <v-col offset-md="6" md="3" sm="12" cols="12">
          <router-link to="#" class="links">
            Home
          </router-link>
          <router-link to="#" class="links">
            Blogs
          </router-link>
          <router-link to="#" class="links">
            Login/Register
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- </div> -->
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// .container {
//   min-width: 1500px;
// }

.links {
  text-decoration: none;
  &:nth-child(2) {
    padding: 0px 30px !important;
  }
  &:hover,
  &:focus {
    color: #1eb8b8;
  }
}
</style>
