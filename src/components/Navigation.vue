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
          offset-sm="1"
          offset-md="5"
          offset-lg="6"
          md="4"
          sm="5"
          cols="8"
        >
          <div class="mr-5" style="width:50px; height:50px;">
            <v-row justify="center" style="min-height: 160px;">
              <v-col v-show="user">
                <v-avatar>
                  <v-btn
                    height="50px"
                    rounded
                    min-width="50px"
                    color="primary initial"
                    @click="expand = !expand"
                  >
                    {{ initials }}
                  </v-btn>
                </v-avatar>

                <!-- Profile details dropdown -->

                <v-expand-transition>
                  <v-card
                    v-show="expand"
                    height="180"
                    min-width="250"
                    class="mt-4 mr-16 secondary f3"
                  >
                    <v-row align="center">
                      <v-col cols="3">
                        <!-- <div
                          class="white black--text ml-2 d-flex justify-center align-center"
                          style="width:100%; height:80%; border-radius:50%"
                        > -->
                        <v-avatar class="white ml-2">
                          {{ initials }}
                        </v-avatar>
                        <!-- </div> -->
                      </v-col>
                      <v-col cols="8">
                        <div>
                          {{ firstName }}
                          {{ lastName }}
                        </div>
                        <!-- <p></p> -->
                        <div>{{ userName }}</div>
                        <div>{{ email }}</div>
                      </v-col>
                    </v-row>
                    <v-divider class="white mt-2"></v-divider>
                    <v-row class="mt-1">
                      <!-- <div class="btn"> -->
                      <v-col cols="12" class="pa-0 mt-1 ml-6">
                        <v-btn
                          small
                          plain
                          class="pl-0 black--text"
                          @click="goToProfile"
                        >
                          <v-icon class="mr-1">mdi-account-tie</v-icon>
                          Profile</v-btn
                        >
                      </v-col>
                      <v-col cols="12" class="pa-0 mt-1 ml-6">
                        <v-btn
                          small
                          plain
                          @click="goToAdmin"
                          class="pl-0 black--text"
                        >
                          <v-icon class="mr-1">mdi-crown</v-icon>
                          Admin</v-btn
                        >
                      </v-col>
                      <!-- </div> -->
                      <!-- <div class="btn"> -->
                      <v-col cols="12" class="pa-0 mt-1 mb-2 ml-6">
                        <!-- <div>
                          <router-link to="/" class="link">
                            <v-icon class="mr-1 white--text">mdi-logout</v-icon>
                            Home
                          </router-link>
                        </div> -->
                        <v-btn
                          small
                          plain
                          @click="signOut"
                          class="pl-0 black--text"
                        >
                          <v-icon class="mr-1">mdi-logout</v-icon> Sign
                          Out</v-btn
                        >
                      </v-col>
                      <!-- </div> -->
                    </v-row>
                  </v-card>
                </v-expand-transition>
              </v-col>

              <!-- <div class="mx-4 hidden-sm-and-down"></div> -->
            </v-row>
          </div>
          <router-link to="/" class="links">
            Home
          </router-link>
          <router-link to="/blogs" class="links">
            Blogs
          </router-link>
          <router-link v-show="!user" to="/login" class="links">
            Login/Register
          </router-link>
          <router-link v-show="user" to="/creat-post" class="links">
            Create Blog
          </router-link>
          <!-- <router-link to="#" class="links"> -->
          <!-- <v-avatar color="primary" size="56"> -->

          <!-- </v-avatar> -->
          <!-- </router-link> -->
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- </div> -->
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data: () => ({
    expand: false,
  }),
  computed: {
    initials() {
      return this.$store.state.profileInitials;
    },
    firstName() {
      return this.$store.state.profileFirstName;
    },
    lastName() {
      return this.$store.state.profileLastName;
    },
    userName() {
      return this.$store.state.profileUserName;
    },
    user() {
      return this.$store.state.user;
    },
    email() {
      return this.$store.state.profileEmail;
    },
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
      location.replace(location.href.split("#")[0]);
      // location.reload();
      // window.location = window.location;
      // window.location.reload;
    },
    goToProfile() {
      this.$router.push("/profile");
      this.expand = false;
    },
    goToAdmin() {
      this.$router.push("/admin");
      this.expand = false;
    },
  },
};
</script>

<style lang="scss" scoped>
// .initial {
//   font-size: 16px;
//   font-weight: 400;
// }

.links {
  text-decoration: none;
  padding: 0px 15px !important;
  &:hover,
  &:focus {
    color: #1eb8b8;
  }
  @media (max-width: 360px) {
    padding: 0px 5px !important;
  }
}

// .link {
//   color: #fff;
//   font-size: 14px;
//   font-weight: 600;
//   text-decoration: none;

//   &:hover,
//   :active {
//     background-color: aqua;
//   }
// }

.f1 {
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 600px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}

.f2 {
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
    margin: 0px 0px 25px 15px !important;
    // margin: 20px !important;
    padding: 0px;
  }
}

.f3 {
  font-size: 12px;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
</style>
