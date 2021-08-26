<template>
  <div>
    <the-welcome-screen :post="welcomeScreen" />
    <!-- <blog-post /> -->
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
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
  components: {
    BlogPost,
    TheWelcomeScreen,
  },
};
</script>
