<template>
  <!-- <div class="container"> -->
  <v-container>
    <v-app-bar
      height="100px"
      style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
      app
      color="white"
    >
      <v-row wrap>
        <v-col offset-sm="2" sm="4" cols="12">
          <router-link to="#" class="links f1">
            FireBlogs
          </router-link>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
      <v-row>
        <v-col offset-sm="4" sm="8" cols="12">
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
  padding: 0px 25px !important;
  text-decoration: none;

  &:hover {
    color: #1eb8b8;
  }
}
</style>
