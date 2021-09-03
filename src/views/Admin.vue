<template>
  <v-container
    fluid
    class="d-flex my-16 flex-column align-center justify-center"
  >
    <v-snackbar
      v-model="updated"
      class="white--text"
      :timeout="timeout"
      min-width="250px"
      top
      right
    >
      Changes were saved!
      <!-- <v-spacer></v-spacer> -->

      <v-btn color="pink" text @click="updated = false">
        Close
      </v-btn>
    </v-snackbar>
    <div class="my-5">
      <p>Administration</p>
    </div>
    <v-card
      class="align-center justify-center text-center"
      width="500px"
      height="100%"
    >
      <div>
        <p class="my-10">Add Admin</p>
      </div>
      <v-card-subtitle>
        <v-text-field
          placeholder="Enter User email to make them an admin"
          background-color="rgb(232, 240, 254)"
          outlined
          required
          v-model="email"
        >
        </v-text-field>
      </v-card-subtitle>
      <!-- <v-card-action class="my-5"> -->
      <v-btn
        style="width:30%"
        class="primary my-5"
        large
        min-width="110px"
        rounded
        disabled
        @click="updateProfile"
      >
        SUBMIT
      </v-btn>
      <!-- </v-card-action> -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      timeout: 2500,
      updated: false,
    };
  },
  computed: {
    userName: {
      get() {
        return this.$store.state.profileUserName;
      },
      set(payload) {
        this.$store.commit("changeUserName", payload);
      },
    },
    email: {
      //   get() {
      //     return this.$store.state.profileEmail;
      //   },
    },
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSetting");
      this.updated = true;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep input {
  margin-top: 0px !important;
}

.v-card__subtitle,
.v-card__text {
  padding: 0px;
  margin: 0px 10px !important;
}

p {
  font-size: 36px;
  font-weight: 300;
}

.v-card {
  background-color: #f1f1f1;
  @media (max-width: 600px) {
    width: 100% !important;
  }
}

// . {
//   padding: 0px;
// }
</style>
