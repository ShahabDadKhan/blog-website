<template>
  <v-container fluid class="container">
    <v-row class="form">
      <v-col offset-sm="1" md="3" cols="8">
        <h2 class="text-center mt-16">Reset Password</h2>
        <div class="mb-8 text-center">
          <span>
            Forgot your passowrd? Enter your email to reset it
          </span>
        </div>
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
          <!-- <v-text-field
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
          ></v-text-field> -->

          <div class="text-center py-3 d-flex flex-column ">
            <div>
              <v-dialog transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    style="width:25%"
                    color="primary"
                    large
                    min-width="110px"
                    rounded
                    v-bind="attrs"
                    v-on="on"
                    @click="submit"
                    >RESET</v-btn
                  >
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="primary" dark
                      >Opening from the top</v-toolbar
                    >
                    <v-card-text>
                      <div class="text-h2 pa-12">Hello world!</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="dialog.value = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
            <!-- <div class="">
              <v-btn
                style="width:25%"
                color="primary"
                large
                min-width="110px"
                rounded
                @click="submit"
              >
                RESET
              </v-btn>
            </div> -->
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
    // password: { required, maxLength: maxLength(6) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    // password: "",
    email: "",
    // show: false,
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    // passwordErrors() {
    //   const errors = [];
    //   if (!this.$v.password.$dirty) return errors;
    //   !this.$v.password.maxLength &&
    //     errors.push("password must be at most 6 characters long");
    //   !this.$v.password.required && errors.push("password is required.");
    //   return errors;
    // },
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
  margin-bottom: 20px;
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
