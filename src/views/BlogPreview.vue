<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10">
        <h1>{{ blogTitle }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10">
        <div>
          <v-img :src="blogCoverPhoto"></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10">
        <!-- <p>{{ blogHTML }}</p> -->
        <p v-html="blogHTML" class="paragraph"></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto() {
      console.log("photo");
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style lang="scss" scoped>
// .paragraph {
//   max-width: 100% !important;
// }

::v-deep img {
  max-width: 100%;
}
</style>
