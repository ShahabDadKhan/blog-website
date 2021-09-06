<template>
  <v-container fluid class="my-16">
    <v-snackbar
      v-model="updated"
      :timeout="timeout"
      min-width="250px"
      top
      right
    >
      <span class="red--text">
        {{ errorMsg }}
      </span>
      <!-- <v-spacer></v-spacer> -->

      <v-btn color="pink" text @click="updated = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-dialog v-model="dialog" max-width="50%" class="">
      <v-card height="500px" style="background-color:black">
        <!-- <v-card-actions> -->
        <v-btn
          rounded
          class="grey white--text"
          style="top:15px; right:15px; z-index:1000; cursor:pointer; position:absolute"
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!-- </v-card-actions> -->
        <p>{{ errorMsg }}</p>
        <v-img :src="blogCover" height="100%" width="100%" class=""></v-img>
      </v-card>
    </v-dialog>
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
              ref="blogPhoto"
              @change="fileChange"
              show-size
              outlined
              dense
            ></v-file-input>
          </v-col>
          <v-col sm="12" md="2" cols="12">
            <v-btn
              rounded
              class="primary"
              @click="dialog = true"
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
              v-model="blogHTML"
              @image-added="imageHandler"
            ></vue-editor>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="10">
            <v-btn rounded class="primary" @click="uploadBlog"
              >Publish Blog
            </v-btn>
            <v-btn rounded class="primary ml-2" to="/blog-preview">
              Preview Post
            </v-btn>
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
// import Quill from "quill";
// window.Quill = Quill;
// const ImageResize = require("quill-image-resize-module").default;
// Quill.register("modules/imageResize", ImageResize);
import { VueEditor } from "vue2-editor";

import firebase from "firebase/app";
import db from "../firebase/firebaseInit";
import "firebase/storage";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      timeout: 2500,
      dialog: false,
      updated: false,
      file: "",
      errorMsg: "",
      // editorSettings: {
      //   modules: {
      //     ImageResize: {},
      //   },
      // },
    };
  },
  methods: {
    uploadBlog() {
      if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
        if (this.file) {
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(
            `document/BlogCoverPhoto/${this.$store.state.blogPhotoName}`
          );
          docRef.put(this.file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
            },

            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const timestamp = await Date.now;
              const dataBase = await db.collection("blogPosts").doc();

              dataBase.set({
                blogID: dataBase.id,
                blogHTML: this.blogHTML,
                blogCoverPhoto: downloadURL,
                blogCoverPhotoName: this.blogCoverPhotoName,
                blogTitle: this.blogTitle,
                profileId: this.profileId,
                date: timestamp,
              });
              this.$router.push("/view-blog");
            }
          );
          return;
        } else {
          this.updated = true;
          this.errorMsg = "Please ensure that you have uploaded a cover photo!";
        }
      } else {
        this.updated = true;
        this.errorMsg =
          "Please ensure that Blog Title & Blog Post has been filled";
      }
    },
    fileChange() {
      // this.file = this.$refs.blogPhoto.files[0];  This one is not working
      this.file = this.$refs.blogPhoto.$refs.input.files[0];
      const fileName = this.file.name;
      console.log("File Name", fileName);
      this.$store.dispatch("fileNameChange", this.fileName);
      // Creating the photo URL to activate the preview Photo Button
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
      console.log("File URL", URL.createObjectURL(this.file));
    },
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      console.log("Hello");
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      );
    },
  },
  computed: {
    blogCover() {
      return this.$store.state.blogPhotoFileURL;
    },
    profileId() {
      return this.$store.state.profileId;
    },
    blogCoverPhotoName() {
      return this.$store.state.blogPhotoName;
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
// .imgDialog {
//   max-width: 40% !important;
//   max-height: 60% !important;
// }

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
