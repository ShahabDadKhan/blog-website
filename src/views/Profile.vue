<template>
  <v-container
    fluid
    class="d-flex my-10 flex-column align-center justify-center"
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
    <div>
      <p>Account Settings</p>
    </div>
    <v-card
      class="align-center justify-center text-center"
      width="500px"
      height="100%"
    >
      <v-avatar size="60" class="pa-10 my-5 font-weight-bold black white--text">
        {{ profileInitials }}
      </v-avatar>
      <v-card-text class="text-left">
        First Name
      </v-card-text>
      <v-card-subtitle>
        <v-text-field
          filled
          background-color="rgb(232, 240, 254)"
          outlined
          required
          v-model="firstName"
        >
        </v-text-field>
      </v-card-subtitle>

      <v-card-text class="text-left">
        Last Name
      </v-card-text>
      <v-card-subtitle>
        <v-text-field
          filled
          background-color="rgb(232, 240, 254)"
          outlined
          required
          v-model="lastName"
        >
        </v-text-field>
      </v-card-subtitle>

      <v-card-text class="text-left">
        Username
      </v-card-text>
      <v-card-subtitle>
        <v-text-field
          filled
          background-color="rgb(232, 240, 254)"
          outlined
          required
          v-model="userName"
        >
        </v-text-field>
      </v-card-subtitle>

      <v-card-text class="text-left">
        Email
      </v-card-text>
      <v-card-subtitle>
        <v-text-field
          filled
          background-color="rgb(232, 240, 254)"
          outlined
          disabled
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
        @click="updateProfile"
      >
        SAVE CHANGE
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
    profileInitials() {
      return this.$store.state.profileInitials;
    },
    firstName: {
      get() {
        return this.$store.state.profileFirstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.profileLastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    userName: {
      get() {
        return this.$store.state.profileUserName;
      },
      set(payload) {
        this.$store.commit("changeUserName", payload);
      },
    },
    email: {
      get() {
        return this.$store.state.profileEmail;
      },
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
.v-card__subtitle,
.v-card__text {
  padding: 0px;
  margin: 0px 10px;
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

.v-avatar {
  font-size: 28px;
}

// . {
//   padding: 0px;
// }
</style>
