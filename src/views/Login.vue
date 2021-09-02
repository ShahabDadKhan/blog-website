<template>
  <v-container fluid class="container">
    <v-row class="form">
      <v-col offset-sm="1" md="3" cols="8">
        <div class="mb-8 mt-10 text-center">
          <span>
            Don't have an account?
            <router-link to="/register" class="link">
              Register
            </router-link>
          </span>
        </div>
        <h2 class="text-center">Login to FireBlog</h2>
        <form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-email"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :error-messages="passwordErrors"
            outlined
            filled
            background-color="rgb(232, 240, 254)"
            :counter="6"
            prepend-inner-icon="mdi-lock"
            label="Password"
            required
            @click:append="show = !show"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>

          <div class="text-center py-3 d-flex flex-column ">
            <div>
              <router-link to="/forgot-password" class="link">
                Forget Your Password?
              </router-link>
            </div>
            <div class="mt-7">
              <v-btn
                style="width:25%"
                color="primary"
                large
                min-width="110px"
                rounded
                @click.prevent="signIn"
              >
                SIGN IN
              </v-btn>
            </div>
          </div>
        </form>
      </v-col>
      <v-dialog
        v-model="dialog"
        transition="dialog-top-transition"
        max-width="290"
      >
        <v-card>
          <v-card-text class="pa-16">
            <span>
              {{ errMsg }}
            </span>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  mixins: [validationMixin],

  data: () => ({
    password: "",
    email: "",
    show: false,
    dialog: false,
    errMsg: "",
  }),

  validations: {
    password: { required, minLength: minLength(6) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("password must be at most 6 characters long");
      !this.$v.password.required && errors.push("password is required.");
      return errors;
    },
  },

  methods: {
    signIn() {
      if (this.email !== "" && this.password !== "") {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // console.log(firebase.auth().currentUser);
            this.$router.push("/");
          })
          .catch((err) => {
            this.dialog = true;
            this.errMsg = err.message;
          });
      } else {
        this.$v.$touch();
      }
    },
    // submit() {
    //   this.$v.$touch();
    // },
  },
};
</script>

<style lang="scss" scoped>
::v-deep input {
  margin-top: 0px !important;
}

// ::v-deep #input-24 {
//   margin-top: 0px !important;
// }

h2 {
  font-size: 40px;
  margin-bottom: 40px;
}
.container {
  background-image: url("../assets/background.png");
  background-size: cover;
  height: 100vh;
}

.link {
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  color: black;
  border-bottom: 1px solid transparent;
  transition: 0.4s ease-in-out all;

  &:hover {
    border-bottom-color: black;
  }
}

.form {
  z-index: 10;
  background-color: white;
  clip-path: polygon(0% 0, 40% 0%, 37% 100%, 0 100%);
  height: 100vh;
  align-items: center;

  @media (max-width: 960px) {
    align-items: flex-start;
    justify-content: center;
    padding-top: 1%;
    clip-path: polygon(0% 0, 100% 0%, 100% 60%, 0 75%);
  }

  @media (max-width: 530px) {
    clip-path: polygon(0% 0, 100% 0%, 100% 70%, 0 85%);
  }
}
</style>
