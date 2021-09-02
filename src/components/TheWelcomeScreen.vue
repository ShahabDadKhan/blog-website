<template>
  <v-container fluid>
    <v-row>
      <!-- <v-col offset-sm="1" sm="4" cols="12" align-self="center" class="content"> -->
      <v-col class="d-flex blog-content" sm="5" order-sm="1">
        <div class="content white--text">
          <h2>{{ post.title }}</h2>
          <!-- <h2 v-else>{{ post.title }}</h2> -->
          <p style="width:70%">{{ post.blogPost }}</p>
          <!-- <p style="width:70%" v-else>{{ post.blogHTML }}</p> -->
          <router-link class="link" to="/register"
            >Login/Register <v-icon color="white">mdi-arrow-right</v-icon>
          </router-link>
          <!-- <router-link class="link link-light" v-else to="#">
            View The Post <v-icon color="">mdi-arrow-right</v-icon>
          </router-link> -->
        </div>
      </v-col>
      <v-col class="pa-0 blog-image" sm="7" cols="12" order-sm="2">
        <v-img
          height="100%"
          width="100%"
          :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
          alt=""
        />
        <!-- <v-img
          v-else
          :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
          alt=""
        /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "bogpost",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
// .no-user:first-child {
//   .blog-content {
//     background-color: #303030;
//     color: #fff;
//   }
// }

.link {
  width: 150px;
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

@keyframes linkBorder {
  0% {
    // width: 0%;
    border-bottom-color: #fff;
  }
  50% {
    border-bottom-color: #fff;
    // width: 50%;
  }
  100% {
    border-bottom-color: #fff;
    // width: 100%;
  }
}

h2 {
  font-size: 32px;
  font-weight: 300;
  // color: white;
  text-transform: uppercase;
  margin-bottom: 24px;
}
p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
  // color: white;
}

.content {
  display: flex;
  flex-direction: column;
  // padding-left: 150px;
  padding: 80px 80px 80px 150px;
  justify-content: center;
  background-color: #303030;
  @media only screen and (max-width: 900px) {
    // width: 50%;
    // order: 2;
    padding: 50px 50px 50px 70px;
  }
}

// .row {
//   padding: 0px;
// }

.col {
  padding: 0px;
}
.blog-content {
  // padding-left: 200px;
  @media only screen and (max-width: 1400px) {
    // width: 50%;
    order: 2;
  }
}

.blog-image {
  @media only screen and (max-width: 1400px) {
    // width: 50%;
    order: 1;
  }
}
// .blog-wrapper {
//   &:nth-child(even) {
//     .blog-container {
//       order: 2;
//     }

//     .blog-photo {
//       order: 1;
//     }
//   }
// }
</style>
