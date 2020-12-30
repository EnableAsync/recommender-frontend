<template>
  <v-app>

    <v-card
        color="#f4f7f7"
        class="mx-auto elevation-2 mt-8"
        dark
    >
      <v-row>
        <v-col>
          <v-card-title
          >
            <div style="color: #202124">
              <div class="headline">
                {{ movie.name }}
              </div>
              <v-spacer></v-spacer>
              <div>{{ movie.directors }}</div>
              <div>{{ movie.descri }}</div>
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
        给电影打分
        <v-spacer></v-spacer>
        <span class="black--text text--lighten-2 caption mr-2">
        ({{ movie.score }})
      </span>
        <v-rating
            background-color="#737373"
            color="yellow accent-4"
            dense
            half-increments
            hover
            size="18"
            :number="movie.score"
        ></v-rating>
      </v-card-actions>
    </v-card>


    <v-container style="align-self: auto; text-align: center">

      <h1 class="my-16">相似电影</h1>

      <v-row>
        <v-col
            :key="i"
            v-for="(movie,i) in similarMovies"
        >
          <MiscRating color="#f4f7f7"
                      :movie="movie"></MiscRating>
        </v-col>
      </v-row>

    </v-container>

  </v-app>
</template>

<script>
import {getMovieInfo, getSimilarMovies} from "@/api/movie";
import getMoviePoster from "../utils/get-movie-poster";
import MiscRating from "@/components/MiscRating";

export default {
  name: "Movie",
  components: {MiscRating},
  data: () => ({
    movie: {},
    similarMovies: []
  }),
  methods: {},
  created() {
    getMovieInfo(this.$route.params.mid)
        .then(res => {
          this.movie = res.data.movie
          this.movie.image = getMoviePoster(this.movie.mid)
        }).catch(err => console.log(err))
  },

  watch: {
    movie() {
      this.$nextTick(() => {
        getSimilarMovies(this.movie.mid, {num: 9})
            .then(response => {
              this.similarMovies = response.data.movies.map(movie => {
                movie.score = movie.score.toFixed(1)
                movie.image = getMoviePoster(movie.mid)
                return movie
              })
            })
            .catch(error => {
              console.log(error)
            })
      })
    }
  }
}
</script>

<style scoped>

</style>