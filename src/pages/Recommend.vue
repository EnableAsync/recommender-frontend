<template>
  <v-app id="recommend">
    <v-container style="align-self: auto; text-align: center">
      <h1 class="my-16">猜你喜欢</h1>
      <v-row>
        <v-col
            :key="index"
            align-self="center"
            cols="4"
            v-for="(movie,index) in movies"
        >

          <MiscRating
              :color="movie.color"
              :father-method="getNewRecs"
              :movie="movie"
          ></MiscRating>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import MiscRating from "../components/MiscRating";
import {getRecommendedMovies, getStreamMovie, rateToMovie} from "../api/movie";

export default {
  name: "Recommend",
  components: {MiscRating},
  data: () => ({
    movies: [
      {
        name: '',
        directors: '',
        score: 5.0,
        shoot: ''
      }
    ],
    recs: [],
  }),
  methods: {
    getRecs() {
      let username = this.$store.state.username
      if (username == null || username === '') {
        username = "1@qq.com"
      }
      let count = 5
      getRecommendedMovies({username: username, num: count})
          .then(res => {
            this.movies = res.data.movies
            this.movies.map(movie => {
              movie.color = "#f4f7f7"
              return movie
            })
          }).catch(error => {
        console.log(error)
      })
    },
    getNewRecs(movie, newVal) {
      // if (this.first) {
      //     this.first = false;
      //     return
      // }
      let username = this.$store.state.username
      if (username == null || username === '') {
        username = "1@qq.com"
      }
      rateToMovie(movie.mid, newVal * 2, username)
      // .then(res => {
      //     console.log(res.data);
      // })
      getStreamMovie(username, 5)
          .then(rres => {
            console.log(rres.data)
            let index = this.movies.indexOf(movie)
            let recs = rres.data.movies
            recs.map(movie => {
              movie.color = "#9575cd"
              return movie
            })
            console.log(rres)
            recs.forEach(m => this.movies.splice(index + 1, 0, m))

            // this.movies.splice(index, recs)
          })
    }
  },
  created() {
    this.getRecs()
  }
}
</script>

<style scoped>

</style>