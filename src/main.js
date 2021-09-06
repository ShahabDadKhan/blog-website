import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import vuetify from "./plugins/vuetify";
import { VueEditor, Quill } from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      VueEditor,
      Quill,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
