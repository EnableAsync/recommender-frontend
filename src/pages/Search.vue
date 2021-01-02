<template>
    <v-app id="search" style="align-self: auto; text-align: center">
        <h1 class="my-16">搜索：{{ searchText }}</h1>
        <v-row>
            <v-col :key="i" cols="4" v-for="(movie,i) in movies">
                <MiscRating
                  :movie="movie"
                  color="#f4f7f7"
                ></MiscRating>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import {getSearchMovies} from "../api/movie";
    import MiscRating from "../components/MiscRating";
    import getMoviePoster from "../utils/get-movie-poster";

    export default {
        name: "Search",
        components: {MiscRating},
        data: () => ({
            searchText: '',
            movies: [],
        }),
        created() {
            this.search()
        },
        methods: {
            search() {
                console.log(this.$route.query.q)
                this.searchText = this.$route.query.q
                getSearchMovies(this.$route.query.q)
                    .then(res => {
                        this.movies = res.data.movies.map(movie => {
                            movie.score = movie.score.toFixed(1)
                            movie.image = getMoviePoster(movie.mid)
                            return movie
                        })
                    })
            }
        },
        watch: {
            '$route': 'search'
        }
    }
</script>

<style scoped>

</style>