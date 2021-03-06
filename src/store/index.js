import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,

    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
      console.log("Photo Name", state.blogPhotoName);
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
      console.log("Photo URL", state.blogPhotoFileURL);
    },
    newBlogPost(state, payload) {
      state.blogHTML = payload;
      console.log(state.blogHTML);
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
      console.log(state.blogTitle);
    },
    updateUser(state, payload) {
      state.user = payload;
      // console.log("user", this.user);
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
      // console.log(state.editPost);
    },
    setProfileInfo(state, doc) {
      (state.profileId = doc.id),
        (state.profileEmail = doc.data().email),
        (state.profileFirstName = doc.data().firstName),
        (state.profileLastName = doc.data().lastName),
        (state.profileUserName = doc.data().userName);
      // console.log("state name", this.profileFirstName);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUserName(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      // console.log("user Info", dbResults);
    },
    async updateUserSetting({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials");
    },

    // fileNameChanged({ commit, payload }) {
    //   commit("fileNameChange", payload);
    // },
  },
  modules: {},
});
