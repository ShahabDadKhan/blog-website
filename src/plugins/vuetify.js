import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#303030",
        secondary: "#1eb8b8",
        accent: "#8c9eff",
        error: "#b71c1c",
        background: "#303030",
        // textfieldBackground: "rgb(232, 240, 254)",
      },
    },
  },
});
