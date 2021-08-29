<template>
  <div>
    <the-welcome-screen :post="welcomeScreen" />
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
    />
    <div class="blogs">
      <v-container fluid>
        <v-row justify="left">
          <v-col sm="8" offset-sm="1" cols="12">
            <h3 class="">View More Recent Blogs</h3>
          </v-col>
          <blog-card :post="sampleBlogCards" />
        </v-row>
      </v-container>
    </div>
    <second-last-footer />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import SecondLastFooter from "../components/SecondLastFooter.vue";
import TheWelcomeScreen from "../components/TheWelcomeScreen.vue";

export default {
  name: "Home",
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JAVASCRIPT and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "First",
          number: "1",
          blogHTML:
            "Weekly blog articles with all things programming including HTML, CSS, JAVASCRIPT and more. Register today to never miss a post",
          // welcomeScreen: true,
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "Second",
          number: "2",
          blogHTML:
            "Weekly blog articles with all things programming including HTML, CSS, JAVASCRIPT and more. Register today to never miss a post",
          // welcomeScreen: true,
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
  components: {
    BlogPost,
    TheWelcomeScreen,
    BlogCard,
    SecondLastFooter,
  },
};
</script>

<style lang="scss" scoped>
.blogs {
  padding: 150px 0px;
  background-color: #f1f1f1;
}

h3 {
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 32px;
  // margin-left: 20px;
  margin-left: 8%;
}
</style>
