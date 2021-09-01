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
        <v-col class="f1" offset-sm="1" md="1" sm="2" cols="10">
          <router-link to="/" class="links f1">
            FireBlogs
          </router-link>
        </v-col>
        <!-- </v-row> -->

        <!-- <v-spacer></v-spacer> -->
        <!-- <v-row> -->
        <v-col
          align-self="start"
          class="f2"
          offset-sm="4"
          offset-md="5"
          offset-lg="6"
          md="4"
          sm="4"
          cols="10"
        >
          <router-link to="/" class="links">
            Home
          </router-link>
          <router-link to="/blogs" class="links">
            Blogs
          </router-link>
          <router-link to="/login" class="links">
            Login/Register
          </router-link>
          <!-- <router-link to="#" class="links"> -->
          <!-- <v-avatar color="primary" size="56"> -->
          <div class="ml-5" style="width:50px; height:50px;">
            <v-row justify="center" style="min-height: 160px;">
              <v-col class="shrink">
                <v-btn
                  rounded
                  height="50px"
                  min-width="50px"
                  class=""
                  color="primary"
                  @click="expand = !expand"
                >
                  SK
                </v-btn>

                <v-expand-transition>
                  <v-card
                    v-show="expand"
                    height="150"
                    min-width="150"
                    class="mt-6 mr-16 secondary"
                  ></v-card>
                </v-expand-transition>
              </v-col>

              <!-- <div class="mx-4 hidden-sm-and-down"></div> -->
            </v-row>
          </div>
          <!-- </v-avatar> -->
          <!-- </router-link> -->
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- </div> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    expand: false,
  }),
};
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

  display: flex;
  align-items: center;
}
</style>
