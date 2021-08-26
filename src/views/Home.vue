<template>
  <div>
    <blog-post :post="welcomeScreen" />
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

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
          blogHTML:
            "Weekly blog articles with all things programming including HTML, CSS, JAVASCRIPT and more. Register today to never miss a post",
          // welcomeScreen: true,
          blogCoverPhoto: "First photo",
        },
        {
          title: "Second",
          blogHTML:
            "Weekly blog articles with all things programming including HTML, CSS, JAVASCRIPT and more. Register today to never miss a post",
          // welcomeScreen: true,
          blogCoverPhoto: "Second photo",
        },
      ],
    };
  },
  components: {
    BlogPost,
  },
};
</script>
