<template>
  <v-app id="rank">
    <v-container style="align-self: auto; text-align: center">

      <v-chip-group
          active-class="primary--text"
          column
      >
        <v-chip
            :key="index"
            v-for="(genre,index) in genres"
            @click="onGenreSearch(genre)"
        >
          {{ genre }}
        </v-chip>
      </v-chip-group>

      <h1 class="my-16">{{ curGenre }}</h1>
      <v-row>
        <v-col :key="i" v-for="(movie,i) in movies" cols="4">
          <MiscRating
              color="#f4f7f7"
              :movie="movie"
          ></MiscRating>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MiscRating from "../components/MiscRating";
import {getGenresMovies, getTopAllMovies} from "@/api/movie"
import getMoviePoster from "../utils/get-movie-poster";

export default {
  name: "Rank",
  components: {MiscRating},
  created() {
    this.getTopMovies(this.movieCnt)
  },
  data: () => ({
    genres: ['All', 'Western', 'War', 'Comedy', 'Crime', 'Music', 'Action', 'Fantasy', 'Romance', 'Mystery', 'Animation', 'Adventure', 'Drama', 'Documentary', 'Horror', 'Thriller'],
    curGenre: 'All',
    movies: [{
      name: '',
      directors: '',
      score: 5.0,
      shoot: ''
    }],
    movieCnt: 30
  }),
  methods: {
    getTopMovies(num){
      getTopAllMovies({
        num: num
      }).then(response => {
        this.movies = response.data.movies.map(movie => {
          movie.score = movie.score.toFixed(1)
          movie.image = getMoviePoster(movie.mid)
          return movie
        })
      }).catch(err => {
        console.log(err)
      })
    },
    onGenreSearch(genre) {
      this.curGenre = genre
      if (genre !== "All") {
        getGenresMovies({
          category: genre,
          num: this.movieCnt
        })
            .then(response => {
              this.movies = response.data.movies.map(movie => {
                movie.score = movie.score.toFixed(1)
                movie.image = getMoviePoster(movie.mid)
                return movie
              })
            })
            .catch(error => {
                  console.log(error)
                }
            )
      } else {
        this.getTopMovies(this.movieCnt)
      }
    }
  }
};
</script>

<style scoped>
</style>
