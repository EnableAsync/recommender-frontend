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
                      :movie="movie"
                      color="#f4f7f7"
                    ></MiscRating>
                </v-col>
            </v-row>
        </v-container>

    </v-app>
</template>

<script>
    import MiscRating from "../components/MiscRating";
    import {getRecommendedMovies} from "../api/movie";
    import getMoviePoster from "../utils/get-movie-poster";

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
        }),
        methods: {
            getRecs() {
                let username = this.$store.state.username
                if (username == null || username === '') {
                    username = "1@qq.com"
                }
                console.log(username);
                let count = 9
                getRecommendedMovies({username: username, num: count})
                    .then(res => {
                        this.movies = res.data.movies.map(movie => {
                            movie.score = movie.score.toFixed(1)
                            movie.image = getMoviePoster(movie.mid)
                            return movie
                        })
                    }).catch(error => {
                    console.log(error)
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