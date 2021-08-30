<template>
  <!-- <div class="container"> -->
  <v-container fluid style="height:100px">
    <v-app-bar
      height="100px"
      style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
      app
      hide-on-scroll
      color="white"
    >
      <v-row>
        <v-col class="f1" offset-md="1" md="2" sm="12" cols="10">
          <router-link to="/" class="links f1">
            FireBlogs
          </router-link>
        </v-col>
        <!-- </v-row> -->

        <!-- <v-spacer></v-spacer> -->
        <!-- <v-row> -->
        <v-col class="f2" offset-md="6" md="3" sm="12" cols="10">
          <router-link to="/" class="links">
            Home
          </router-link>
          <router-link to="/blogs" class="links">
            Blogs
          </router-link>
          <router-link to="/login" class="links">
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
  // transition: 5s ease-in hover;
  &:nth-child(2) {
    padding: 0px 30px !important;
  }
  &:hover,
  &:focus {
    color: #1eb8b8;
  }
}

.f1 {
  font-size: 24px;
  font-weight: 600;
}

.f2 {
  font-size: 18px;
  font-weight: 500;
}
</style>
