<template>
  <v-app id="rank">
    <v-container style="align-self: auto; text-align: center">

      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>

      <h1 class="my-16">排行榜</h1>
      <v-row>
        <v-col :key="i" v-for="i in 3">
          <MiscRating
            color="#f4f7f7"
            director="test"
            name="Test"
            rating="4.3"
            year="2020"
          ></MiscRating>
        </v-col>
      </v-row>
      <h1 class="my-16">排行榜</h1>
      <v-row>
        <v-col :key="i" v-for="i in 3">
          <MiscRating
            color="#f4f7f7"
            director="test"
            name="Test"
            rating="4.3"
            year="2020"
          ></MiscRating>
        </v-col>
      </v-row>
      <h1 class="my-16">排行榜</h1>
      <v-row>
        <v-col :key="i" v-for="i in 3">
          <MiscRating
            color="#f4f7f7"
            director="test"
            name="Test"
            rating="4.3"
            year="2020"
          ></MiscRating>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import MiscRating from "../components/MiscRating";

  export default {
    name: "Rank",
    components: {MiscRating},
  };
</script>

<style scoped>
</style>
