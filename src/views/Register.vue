<template>
  <v-container fluid class="container">
    <v-row class="form">
      <v-col offset-sm="1" md="3" cols="8">
        <div class="mb-8 mt-10 text-center">
          <span>
            Already have an account?
            <router-link to="/login" class="link">
              Login
            </router-link>
          </span>
        </div>
        <h2 class="text-center">Create Your FireBlog Account</h2>
        <form>
          <v-text-field
            v-model="firstName"
            :error-messages="firstNameErrors"
            label="First Name"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-account"
            required
            @input="$v.firstName.$touch()"
            @blur="$v.firstName.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            :error-messages="lastNameErrors"
            label="Last Name"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-account"
            required
            @input="$v.lastName.$touch()"
            @blur="$v.lastName.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="userName"
            :error-messages="userNameErrors"
            label="Username"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-account"
            required
            @input="$v.userName.$touch()"
            @blur="$v.userName.$touch()"
          ></v-text-field>
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
            <div class="mt-2">
              <v-btn
                style="width:25%"
                color="primary"
                large
                min-width="110px"
                rounded
                @click.prevent="register"
              >
                SIGN UP
              </v-btn>
            </div>
          </div>
        </form>
      </v-col>
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
import db from "../firebase/firebaseInit";

export default {
  mixins: [validationMixin],

  data: () => ({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    show: false,
  }),
  validations: {
    firstName: { required, maxLength: maxLength(6) },
    lastName: { required, maxLength: maxLength(10) },
    userName: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(6) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  // mounted() {
  //   console.log(this.submit);
  // },

  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength &&
        errors.push("Name must be at most 6 characters long");
      !this.$v.firstName.required && errors.push("Name is required.");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push("Name must be at most 6 characters long");
      !this.$v.lastName.required && errors.push("Name is required.");
      return errors;
    },
    userNameErrors() {
      const errors = [];
      if (!this.$v.userName.$dirty) return errors;
      !this.$v.userName.maxLength &&
        errors.push("Name must be at most 6 characters long");
      !this.$v.userName.required && errors.push("Name is required.");
      return errors;
    },
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
        errors.push("password must be less characters long");
      !this.$v.password.required && errors.push("password is required.");
      return errors;
    },
  },

  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== ""
      ) {
        // this.$v.$touch();
        const result = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        const dataBase = await db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push("/");
        return;
      }
    },
    submit() {
      this.$v.$touch();
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep input {
  margin-top: 0px !important;
}

h2 {
  font-size: 40px;
  margin-bottom: 40px;

  @media (max-width: 1060px) and (min-width: 960px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
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

::v-deep .v-text-field__details {
  margin: 0px !important;
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
    clip-path: none;
  }
}
</style>
