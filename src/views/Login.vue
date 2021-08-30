<template>
  <v-container fluid class="container">
    <v-row class="form">
      <v-col offset-sm="1" md="3" cols="8">
        <div class="mb-8 mt-10 text-center">
          <span>
            Don't have an account?
            <router-link to="#" class="link">
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
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="Password"
            type="password"
            :error-messages="passwordErrors"
            :counter="6"
            label="Password"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <div class="text-center py-3 d-flex flex-column ">
            <div>
              <router-link to="#" class="link">
                Forget Your Password?
              </router-link>
            </div>
            <div class="mt-7">
              <v-btn style="width:25%" class="mr-4" @click="submit">
                SIGN IN
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

  validations: {
    password: { required, maxLength: maxLength(6) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    password: "",
    email: "",
  }),

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
