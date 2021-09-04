<template>
  <v-container fluid class="my-16">
    <v-row style="height:100%">
      <v-col offset-sm="2" sm="8" cols="12">
        <v-row>
          <v-col sm="12" md="4" cols="12">
            <v-text-field
              placeholder="Enter Blog Title"
              v-model="blogTitle"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="3" cols="12">
            <v-file-input
              label="Upload Cover Photo"
              prepend-icon=""
              type="file"
              @change="fileChange"
              ref="inputPhoto"
              outlined
              dense
            ></v-file-input>
          </v-col>
          <v-col sm="12" md="2" cols="12">
            <v-btn
              rounded
              class="primary"
              :disabled="!this.$store.state.blogPhotoFileURL"
              >Preview Photo
            </v-btn>
          </v-col>
          <!-- <v-col>
            <p>File Chosen: {{ this.$store.state.blogPhotoName }}</p>
          </v-col> -->
        </v-row>
        <v-row>
          <v-col style="height:60vh">
            <vue-editor
              class="editorClass"
              :editorOptions="editorSettings"
              v-model="blogHTML"
              useCustomImageHandler
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="10">
            <v-btn rounded class="primary">Publish Blog </v-btn>
            <v-btn rounded class="primary ml-2">Post Preview </v-btn>
          </v-col>
          <!-- <v-col cols="12" sm="12" md="2">
            <v-btn rounded class="primary">Post Preview </v-btn>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  data() {
    return {
      file: "",
      errorMsg: "",
      editorSettings: {
        modules: {
          ImageResize: {},
        },
      },
    };
  },
  methods: {
    fileChange() {
      this.file = this.$refs.inputPhoto.files[0];
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHTML: {
      get() {
        console.log(this.$store.state.blogHTML);
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn:last-child {
  @media (max-width: 324px) {
    // margin-top: 10px;
    margin-left: 0px !important;
  }
  @media (max-width: 317px) {
    margin-top: 10px;
    // margin-left: 0px !important;
  }
}

.editorClass {
  height: 90%;

  @media (max-width: 1293px) {
    height: 80%;
  }

  @media (max-width: 717px) {
    height: 70%;
  }

  @media (max-width: 280px) {
    height: 60%;
  }
}
</style>
