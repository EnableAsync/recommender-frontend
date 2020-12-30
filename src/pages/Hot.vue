<template>
  <v-app id="rank">


    <v-container style="align-self: auto; text-align: center">


      <v-chip-group
          active-class="primary--text"
          column
      >
        <v-chip
            :key="index"
            @click="onChaneType(type)"
            v-for="(type,index) in types"
        >
          {{ type }}
        </v-chip>
      </v-chip-group>
      <h1 class="my-16">{{this.curType}}</h1>

      <v-row>
        <v-col
            :key="i"
            v-for="(movie,i) in movies"
        >
          <MiscRating color="#f4f7f7" :director=movie.directors :name=movie.name :rating=movie.score
                      :year=movie.shoot></MiscRating>
        </v-col>
      </v-row>

    </v-container>

  </v-app>
</template>

<script>
import MiscRating from "../components/MiscRating";
import {getRecentlyHotMovies,getHistoryHotMovies} from "@/api/movie"


export default {
  name: "Rank",
  data() {
    return {
      movies: [
        {
          name: '',
          directors: '',
          score: 5.0,
          shoot: ''
        }
      ],
      types: ["近期热门", "历史热门"],
      curType: "近期热门",
      movieCnt: 9,
      func:{
        recentFunc: getRecentlyHotMovies,
        historyFunc: getHistoryHotMovies,
      }
    }
  },
  methods: {
    onChaneType(type) {
      this.curType = type
      if (type === "近期热门") {  // 近期热门电影
        this.getMovies(this.func.recentFunc,this.movieCnt)
      } else {                 // 历史热门电影
        this.getMovies(this.func.historyFunc,this.movieCnt)
      }
    },
    getMovies(func,num) {
      func({num: num}
      )
          .then(response => {
            this.movies = response.data.movies.map(movie => {
              movie.score = movie.score.toFixed(1)
              return movie
            })
          })
          .catch(error => {
            console.log(error)
          })
    },

  },
  created() {
    this.getMovies(this.func.recentFunc,this.movieCnt)
  },
  components: {MiscRating}
}
</script>

<style scoped>


</style>