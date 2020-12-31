<template>
    <v-app>
        <v-card
          :color="color"
          class="mx-auto elevation-2"
          dark
          style="max-width: 400px; max-height: 300px;"
        >
            <v-row>
                <v-col>
                    <v-card-title
                      @click="getMovie(movie.mid)"
                    >
                        <div style="color: #202124">
                            <div class="headline">
                                {{ movie.name }}
                            </div>
                            <div>{{movie.directors}}</div>
                            <!--                        <div>({{movie.shoot}})</div>-->
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
                  hover
                  size="18"
                  v-model="movie.score"
                ></v-rating>
            </v-card-actions>
        </v-card>

        <v-row>
            <v-col
              :key="i"
              align-self="center"
              v-for="(m,i) in recs"
            >
                <v-card
                  class="mx-auto elevation-2"
                  color="purple"
                  dark
                  style="max-width: 400px; max-height: 300px;"
                >
                    <v-row>
                        <v-col
                        >
                            <v-card-title
                              @click="getMovie(m.mid)"
                            >
                                <div style="color: #202124">
                                    <div class="headline">
                                        {{ m.name }}
                                    </div>
                                    <div>{{m.directors}}</div>
                                    <!--                        <div>({{movie.shoot}})</div>-->
                                </div>
                            </v-card-title>
                        </v-col>
                        <v-img
                          :src="m.image"
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
                          hover
                          size="18"
                          v-model="movie.score"
                        ></v-rating>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-app>

</template>

<script>
    import {getStreamMovie, rateToMovie} from "../api/movie";
    import getMoviePoster from "../utils/get-movie-poster";

    export default {
        name: "MiscRating",
        props: {
            movie: {},
            color: String,
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
        watch: {
            "movie.score": function (newVal) {
                if (this.first) {
                    this.first = false;
                    return
                }
                console.log(newVal);
                console.log("set score")
                let username = this.$store.state.username
                if (username == null || username === '') {
                    username = "1@qq.com"
                }
                rateToMovie(this.movie.mid, newVal * 2, username)
                // .then(res => {
                //     console.log(res.data);
                // })
                console.log("start get")
                getStreamMovie(username, 5)
                    .then(rres => {
                        console.log(rres.data)
                        this.recs = rres.data.movies.map(movie => {
                            movie.score = movie.score.toFixed(1)
                            movie.image = getMoviePoster(movie.mid)
                            return movie
                        })
                    })
                console.log("finish get")
            },
        },
        computed: {
            // score: {
            //     get: function() {
            //         return parseFloat(this.movie.score)
            //     },
            //     set: function(val) {
            //         console.log("set score")
            //         this.movie.score = val
            //         let username = getUsername()
            //         rateToMovie(this.movie.mid, val, username)
            //         .then(res => {
            //             console.log(res.data);
            //         }).catch()
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>