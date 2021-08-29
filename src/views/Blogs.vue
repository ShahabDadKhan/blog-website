<template>
  <v-container fluid class="container">
    <v-row>
      <v-col
        style="max-width:220px"
        offset="4"
        offset-sm="7"
        offset-md="8"
        offset-lg="9"
      >
        <!-- <v-col sm="2" offset-sm="9"> -->
        <p class="toggle-btn">
          Toggle Editing Post <v-switch v-model="editPost"></v-switch>
        </p>
      </v-col>
      <v-col sm="12">
        <blog-card :post="sampleBlogCards" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  components: { BlogCard },
  name: "blogs",
  data() {
    return {};
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  beforeDestroy() {
    return this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  padding: 40px 0px;
  background-color: #f1f1f1;
}
</style>
