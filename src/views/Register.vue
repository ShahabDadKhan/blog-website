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
            :error-messages="nameErrors"
            label="First Name"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-account"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            :error-messages="nameErrors"
            label="Last Name"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-account"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="userName"
            :error-messages="nameErrors"
            label="Username"
            class=""
            filled
            background-color="rgb(232, 240, 254)"
            outlined
            prepend-inner-icon="mdi-account"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
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
            v-model="Password"
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
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <div class="text-center py-3 d-flex flex-column ">
            <div class="mt-2">
              <v-btn
                style="width:25%"
                color="primary"
                large
                min-width="110px"
                rounded
                @click="submit"
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
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data: () => ({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    show: false,
    // nameRules: [
    //   (v) => !!v || "Name is required",
    //   (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    // ],
  }),
  validations: {
    // firstName: { required, minLength: minLength(6) },
    name: { required, maxLength: maxLength(10) },
    password: { required, maxLength: maxLength(6) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
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
      !this.$v.password.maxLength &&
        errors.push("password must be at most 6 characters long");
      !this.$v.password.required && errors.push("password is required.");
      return errors;
    },
  },

  methods: {
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

// ::v-deep #input-24 {
//   margin-top: 0px !important;
// }

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
