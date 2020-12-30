<template>
    <v-card
      :color="color"
      class="mx-auto elevation-2"
      dark
      style="max-width: 400px; max-height: 300px;"
    >
        <v-row>
            <v-col>
                <v-card-title
                  @click="getMovie()"
                >
                    <div style="color: #202124">
                        <div class="headline">
                            {{ movie.name }}
                        </div>
                        <div>{{movie.directors}}</div>
                        <div>({{movie.shoot}})</div>
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
        ({{ rating }})
      </span>
            <v-rating
              background-color="#737373"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="18"
              v-model="movie.rating"
            ></v-rating>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "MiscRating",
        props: {
            movie: {},
            color: String,
        },
        methods: {
            getMovie(mid) {

            }
        }
    }
</script>

<style scoped>

</style>