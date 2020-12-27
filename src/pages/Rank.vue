<template>
    <v-app id="rank">
        <v-container style="align-self: auto; text-align: center">

            <v-chip-group
              active-class="primary--text"
              column
            >
                <v-chip
                  :key="index"
                  v-for="(tag,index) in ranks.ranks"
                >
                    {{ tag.genre }}
                </v-chip>
            </v-chip-group>

            <h1 class="my-16">排行榜</h1>
            <v-row>
                <v-col :key="i" v-for="i in 3">
                    <MiscRating
                      color="#f4f7f7"
                      director="test"
                      name="Test"
                      rating=4.3
                      year="2020"
                    ></MiscRating>
                </v-col>
            </v-row>
            <h1 class="my-16">排行榜</h1>
            <v-row>
                <v-col :key="i" v-for="i in 3">
                    <MiscRating
                      color="#f4f7f7"
                      director="test"
                      name="Test"
                      rating=4.3
                      year="2020"
                    ></MiscRating>
                </v-col>
            </v-row>
            <h1 class="my-16">排行榜</h1>
            <v-row>
                <v-col :key="i" v-for="i in 3">
                    <MiscRating
                      color="#f4f7f7"
                      director="test"
                      name="Test"
                      rating=4.3
                      year="2020"
                    ></MiscRating>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import MiscRating from "../components/MiscRating";

    export default {
        name: "Rank",
        components: {MiscRating},
        data: () => ({
            ranks:
                {
                    "code": 0,
                    "ranks": [
                        {
                            "genre": "drama",
                            "moves": [
                                {
                                    "mid": 1,
                                    "name": "name",
                                    "director": "director",
                                    "shoot": 2015,
                                    "rating": 4.0
                                }
                            ]
                        },
                        {
                            "genre": "action",
                            "moves": [
                                {
                                    "mid": 1,
                                    "name": "name",
                                    "director": "director",
                                    "shoot": 2015,
                                    "rating": 4.0
                                }
                            ]
                        }
                    ]
                },
        }),
    };
</script>

<style scoped>
</style>
