<template>
    <v-app id="search" style="align-self: auto; text-align: center">
        <h1 class="my-16">搜索：{{ searchText }}</h1>
        <v-row style="justify-content:space-between;flex-flow:row wrap;">
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
                this.searchText = this.$route.query.q
                getSearchMovies(this.$route.query.q)
                    .then(res => {
                        this.movies = res.data.movies
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