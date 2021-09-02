<template>
  <v-container fluid>
    <v-row>
      <!-- <v-col offset-sm="1" sm="4" cols="12" align-self="center" class="content"> -->
      <v-col
        class="d-flex blog-content"
        :order-sm="post.number % 2 == 0 ? 1 : 2"
        sm="5"
      >
        <div class="content background--text">
          <!-- <h2 v-if="post.welcomeScreen">{{ post.title }}</h2> -->
          <h2>{{ post.title }}</h2>
          <!-- <p style="width:70%" v-if="post.welcomeScreen">{{ post.blogPost  -->
          <p style="width:70%">{{ post.blogHTML }}</p>
          <!-- <router-link class="link" v-if="post.welcomeScreen" to="#"
            >Login/Register <v-icon color="">mdi-arrow-right</v-icon>
          </router-link> -->
          <router-link class="link" to="#">
            View The Post <v-icon color="">mdi-arrow-right</v-icon>
          </router-link>
        </div>
      </v-col>
      <v-col
        class="pa-0 blog-image"
        :order-sm="post.number % 2 == 0 ? 2 : 1"
        sm="7"
        cols="12"
      >
        <!-- <v-img
          height="100%"
          width="100%"
          v-if="post.welcomeScreen"
          :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
          alt=""
        /> -->
        <v-img
          height="100%"
          width="100%"
          :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
          alt=""
        />
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
  width: 140px;
  font-weight: 500;
  // background-color: red;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  border-bottom-right-radius: 50px;
  transition: 0.2s ease-in all;
  padding: 0px 4px 4px 0px;

  @media only screen and (max-width: 1400px) {
    // width: 50%;
  }

  &:hover {
    border-bottom-color: #303030;
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
  font-weight: 400;
  // color: white;
  text-transform: uppercase;
  margin-bottom: 24px;
}
p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  // color: white;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 80px;
  justify-content: center;
  background-color: white;
}

.blog-content {
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

// .row {
//   padding: 0px;
// }

.col {
  padding: 0px;
}
// .blog-container {
//   order: 2;
// }

// .blog-photo {
//   order: 1;
// }
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
