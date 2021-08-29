<template>
  <v-container fluid class="container">
    <v-row justify="center">
      <v-col
        class="pa-0 ma-4 blog-card"
        v-for="(blog, index) in post"
        :key="index"
        cols="9"
        sm="4"
        md="2"
      >
        <v-card style="min-height: 365px;">
          <v-img
            contain
            :src="require(`../assets/blogCards/${blog.blogCoverPhoto}.jpg`)"
            alt=""
          >
            <!-- <v-chip link class="iconChip-1"> </v-chip> -->
            <v-avatar v-show="editPost" size="36" class="iconChip-1">
              <a href="#" style="text-decoration:none">
                <v-icon>mdi-pencil</v-icon>
              </a>
            </v-avatar>
            <v-avatar v-show="editPost" size="36" class="iconChip-2">
              <a href="#" style="text-decoration:none">
                <v-icon>
                  mdi-delete
                </v-icon>
              </a>
            </v-avatar>
          </v-img>

          <v-card-title>
            <h4>{{ blog.blogTitle }}</h4>
          </v-card-title>

          <v-card-subtitle>
            <h6>Posted on:{{ blog.blogDate }}</h6>
          </v-card-subtitle>
          <!-- <v-spacer></v-spacer> -->
          <v-card-actions class="pa-5 mt-8">
            <router-link class="link" to="#">
              View The Post <v-icon color="grey">mdi-arrow-right</v-icon>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "blogCard",
  props: ["post"],
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-icon {
  color: aqua;
}

.iconChip-1 {
  position: absolute;
  background-color: #fff !important;
  // background-color: #fff;
  // color: #fff;
  top: 5px;
  right: 5px;
  &:hover {
    background-color: #303030 !important;
    color: #fff !important;
  }
}

.iconChip-2 {
  position: absolute;
  background-color: #fff !important;
  top: 5px;
  right: 48px;
  &:hover {
    background-color: #303030 !important;
    color: #fff !important;
  }
}

.blog-card {
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

.container {
  // padding: 150px 0px;
  background-color: #f1f1f1;
}

.link {
  width: 140px;
  // background-color: red;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  border-bottom-right-radius: 50px;
  transition: 0.4s ease-in all;
  padding: 0px 4px 4px 0px;

  @media only screen and (max-width: 1400px) {
    // width: 50%;
  }

  &:hover {
    border-bottom-color: #fff;
    // animation: linkBorder 2s 1;
  }
  // &-light {
  //   &:hover {
  //     border-bottom-color: #303030;
  //   }
  // }
}

h4 {
  padding: 8px 0px;
  font-size: 20px;
  font-weight: 300;
}

h6 {
  font-size: 16px;
  font-weight: 600;
  padding: 20px 0px;
}
</style>
