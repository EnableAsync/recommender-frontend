<template>
  <v-card
      :color="color"
      class="mx-auto rating"
      rounded="lg"
  >
    <v-row>
      <v-col>
        <v-card-title
            @click="getMovie(movie.mid)"
        >
          <div style="color: #202124">
            <div class="headline"
                 style="text-align: left; height: 120px; overflow: hidden;">
              {{ movie.name }}
            </div>
            <div style="margin-top: 5px; text-align: left; height: 48px; font-size: 1rem; overflow: hidden;line-height: 1.5rem">{{ movie.directors }}</div>
          </div>
        </v-card-title>
      </v-col>
      <v-img
          :src="movie.image"
          class="shrink ma-2"
          contain
          height="125px"
          style="flex-basis: 125px"
      ></v-img>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4" style="color: #202124">
      <v-spacer></v-spacer>
      <span class="black--text text--lighten-2 caption mr-2">
        ({{ movie.score }})
      </span>
      <v-tooltip top color="yellow darken-1">
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs"
                v-on="on">
                      <v-rating
                          background-color="#737373"
                          color="yellow accent-4"
                          dense
                          hover
                          size="18"
                          v-model="movie.score"
                          @input="fatherMethod(movie, movie.score)"
                      ></v-rating>
          </span>
        </template>
        发表评分
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
// import {getStreamMovie, rateToMovie} from "../api/movie";
// import getMoviePoster from "../utils/get-movie-poster";

export default {
  name: "MiscRating",
  props: {
    movie: {},
    color: String,
    fatherMethod: {
      type: Function,
      default: null,
    }
  },
  data: () => ({
    recs: [],
    first: true,
  }),
  methods: {
    getMovie(mid) {
      this.$router.push(`/movie/${mid}`).catch(() => {
      });
    }
  },
}
</script>

<style scoped>
.rating {
  max-width: 400px;
  max-height: 300px;
  margin-bottom: 28px;
  cursor: pointer;
  transition: .4s ease all;
}

.rating:hover {
  box-shadow: 2px 2px 12px 0px #ddd !important;
}
</style>