<template>
  <v-app>
    <h1 class="my-16">{{ movie.name }}</h1>
    <v-card
        width="80%"
        color="#f4f7f7"
        class="mx-auto elevation-2 mt-8"
        dark
    >
      <v-row>
        <v-col>
          <v-card-title
          >
            <div style="color: #202124">
              <!--              <div class="headline">-->
              <!--            {{ movie.name }}    -->
              <!--              </div>-->
              <div>导演：{{ movie.directors }}</div>
              <div>主演：{{ primaryActors }}</div>
              <div>类型：{{ movie.genres }}</div>
              <div>语言: {{ movie.language }}</div>
              <div>片长: {{ movie.timelong }}</div>
              <div>上映日期：{{ movie.shoot }}</div>
              <div>剧情简介：{{ movie.descri }}</div>
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
        <v-rating
            background-color="#737373"
            color="yellow accent-4"
            dense
            half-increments
            hover
            size="18"
            v-model="movie.score"
        ></v-rating>
      </v-card-actions>
    </v-card>
    <v-container style="align-self: auto; text-align: center">

      <h1 class="my-16">相似电影</h1>

      <v-row>
        <v-col
            cols="4"
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
import MiscRating from "@/components/MiscRating";

export default {
  name: "Movie",
  components: {MiscRating},
  data: () => ({
    movie: {
      timelong: '',
      descri: '',
      actors: ''
    },
    similarMovies: []
  }),
  methods: {},
  created() {
    getMovieInfo(this.$route.params.mid)
        .then(res => {
          this.movie = res.data.movie
        }).catch(err => console.log(err))
  },

  watch: {
    movie() {
      this.$nextTick(() => {
        getSimilarMovies(this.movie.mid, {num: 9})
            .then(response => {
              this.similarMovies = response.data.movies
            })
            .catch(error => {
              console.log(error)
            })
      })
    }
  },
  computed: {
    primaryActors() {
      let actors = this.movie.actors.split("|")
      let primary = ""
      for (let i = 0; i < actors.length; i++) {
        if (i === 3) {
          break
        }
        primary += actors[i] + " | "
      }
      return primary.substr(0, primary.length - 2)
    }
  }
}
</script>

<style scoped>

</style>