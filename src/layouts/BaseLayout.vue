<template>
  <v-app id="BaseLayout">
    <v-app-bar
        app
        color="white"
    >
      <v-toolbar-title class="align-self-center">电影推荐系统</v-toolbar-title>

      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            :key="i"
            @click="$router.push(item.routerPath)"
            v-for="(item, i) in items"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>


      <!--      <v-text-field-->
      <!--          hide-details-->
      <!--          label="Search"-->
      <!--          append-icon="search"-->
      <!--          v-model="searchText"-->
      <!--          ref="search"-->
      <!--          single-line-->
      <!--          outlined-->
      <!--          rounded-->
      <!--          clearable-->
      <!--          @keyup.enter="search"-->
      <!--      ></v-text-field>-->

      <v-text-field
          class="mx-2"
          flat
          hide-details
          label="Search"
          append-icon="search"
          v-model="searchText"
          clearable
          outlined
          single-line
          dense

      ></v-text-field>


      <v-btn class="ma-2" color=" darken-2" dark @click="logout">
        <v-icon dark left>home</v-icon>

      </v-btn>


    </v-app-bar>

    <v-main>
      <keep-alive>
        <transition mode="out-in" name="fade-transform">
          <router-view/>
        </transition>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "BaseLayout",
  data: () => ({
    items: [
      {
        name: "热门电影",
        routerPath: "/hot"
      },
      {
        name: "排行榜",
        routerPath: "/rank",
        children: [
          {
            name: "test",
            goto: '#test'
          }
        ]
      },
      {
        name: "猜你喜欢",
        routerPath: "/recommend"
      }
    ],
    searchText: "",
    choices: [],
    showSelect: true
  }),
  watch: {
    searchText: 'inputHandler'
  },
  methods: {
    search() {
      this.$refs.search.blur()
      console.log(this.searchText)// this.$router.push()
    },
    logout() {
      this.$store.commit("setUsername", "")
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .2s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

.border-list {
  border: 1px solid #eee !important;
}
</style>
