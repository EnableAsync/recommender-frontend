<template>
    <v-card
      :color="color"
      class="mx-auto elevation-2"
      dark
    >
        <!--          style="max-width: 400px;"-->
        <v-row>
            <v-col>
                <v-card-title>
                    <div style="color: #202124">
                        <div class="headline">
                            {{ name }}
                        </div>
                        <div>{{director}}</div>
                        <div>({{year}})</div>
                    </div>
                </v-card-title>
            </v-col>
            <v-img
              class="shrink ma-2"
              contain
              height="125px"
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
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
              v-model.number="rating"
            ></v-rating>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "MiscRating",
        props: {
            rating: String,
            name: String,
            director: String,
            year: String,
            color: String
        },
    }
</script>

<style scoped>

</style>