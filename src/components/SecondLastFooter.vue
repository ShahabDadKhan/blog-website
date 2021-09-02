<template>
  <v-container fluid class="py-16">
    <v-row class="py-16" align="center">
      <v-col offset-sm="2" cols="12" sm="3">
        <h2>NEVER MISS A POST. REGISTER FOR YOUR FREE ACCOUNT TODAY!</h2>
      </v-col>
      <v-col offset-sm="3" cols="12" sm="3" class="d-flex justify-center">
        <v-btn
          height="40"
          to="/register"
          rounded
          color="black white--text"
          class="pa-2 mx-3"
          ><h4>REGISTER FOR FIREBLOG</h4>
          <v-icon size="20">mdi-arrow-right</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 31px;
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 960px) {
    display: flex;
    justify-content: center;
    text-align: initial;
    font-size: 40px;
  }
}
h4 {
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
}
</style>
