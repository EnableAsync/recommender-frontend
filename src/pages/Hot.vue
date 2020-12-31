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
      <h1 class="my-16">{{ this.curType }}</h1>

      <v-row>
        <v-col
            cols="4"
            :key="i"
            v-for="(movie,i) in movies"
        >
          <MiscRating color="#f4f7f7"
                      :movie="movie"
          ></MiscRating>
        </v-col>
      </v-row>

    </v-container>

    <v-dialog v-model="dialog" persistent max-width="550">
      <v-card>
        <v-card-title>请选择你感兴趣的电影类别</v-card-title>
        <v-divider></v-divider>
        <v-container fluid>
          <v-row>
            <v-checkbox
                :key="index"
                v-for="(genre,index) in genres"
                v-model="selected" :label=genre :value=genre
            ></v-checkbox>
          </v-row>


        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
<!--          <v-btn color="green darken-1" text @click="dialog = false">取消</v-btn>-->
          <v-btn color="green darken-1" text @click="addPref">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import MiscRating from "../components/MiscRating";
import {getRecentlyHotMovies, getHistoryHotMovies} from "@/api/movie"
import {checkNew, addPrefGenres} from "@/api/user";
import getMoviePoster from "../utils/get-movie-poster";


export default {
  name: "Rank",
  data() {
    return {
      dialog: false,
      genres: ['Western', 'War', 'Comedy', 'Crime', 'Music', 'Action', 'Fantasy', 'Romance', 'Mystery', 'Animation', 'Adventure', 'Drama', 'Documentary', 'Horror', 'Thriller'],
      selected: ['Western'],
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
      func: {
        recentFunc: getRecentlyHotMovies,
        historyFunc: getHistoryHotMovies,
      }
    }
  },
  methods: {
    onChaneType(type) {
      this.curType = type
      if (type === "近期热门") {  // 近期热门电影
        this.getMovies(this.func.recentFunc, this.movieCnt)
      } else {                 // 历史热门电影
        this.getMovies(this.func.historyFunc, this.movieCnt)
      }
    },
    getMovies(func, num) {
      func({num: num}
      )
          .then(response => {
            this.movies = response.data.movies.map(movie => {
              movie.score = movie.score.toFixed(1)
              movie.image = getMoviePoster(movie.mid)
              return movie
            })
          })
          .catch()
    },
    addPref() {
      this.dialog = false
      addPrefGenres({
        username: this.$store.state.username,
        genres: this.preference
      }).then(response => {
        if (response.data.success) {
          alert("添加偏好成功")
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {

    preference: {
      get: function () {
        let selected = this.selected
        let result = ""
        for (let i = 0; i < selected.length; i++) {
          result = result.concat(selected[i])
          if (i !== selected.length - 1)
            result = result.concat(",")
        }
        return result
      }
    }
  },
  created() {
    this.getMovies(this.func.recentFunc, this.movieCnt)
    checkNew({
      username: this.$store.state.username
    }).then(response => {
      if (response.data.new) {
        this.dialog = true
      }
    })
  },
  components: {MiscRating}
}
</script>

<style scoped>


</style>