<template>
  <div>
    <the-welcome-screen :post="welcomeScreen" />
    <blog-post
      :post="post"
      v-for="(post, index) in sampleBlogPosts"
      :key="index"
    />
    <blog-card :post="sampleBlogCards" />
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
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "1 May, 2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "1 May, 2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "1 May, 2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "1 May, 2021",
        },
      ],
    };
  },
  components: {
    BlogPost,
    TheWelcomeScreen,
    BlogCard,
    SecondLastFooter,
  },
};
</script>

<style lang="scss" scoped></style>
