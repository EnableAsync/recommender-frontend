<template>
  <v-app id="BaseLayout">
    <v-app-bar
        app
        color="white"
    >
      <v-toolbar-title class="align-self-center" style="width: 200px; margin-right: 180px">电影推荐系统
      </v-toolbar-title>

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

      <v-text-field
          @keypress.enter="search"
          append-icon="search"
          class="mx-2"
          clearable
          dense
          flat
          hide-details
          label="Search"
          outlined
          single-line
          v-model="searchText"
      ></v-text-field>


      <v-btn @click="logout" class="ma-2" color="darken-2" dark>
        <v-icon dark>home</v-icon>

      </v-btn>


    </v-app-bar>

    <v-main style="width: 1280px; margin: 20px auto;">
      <keep-alive>
        <transition mode="out-in" name="fade-transform">
          <router-view :key="$route.fullPath"/>
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
  methods: {
    search() {
      this.$router.push({
        path: '/search',
        query: {
          q: this.searchText
        }
      }).catch(() => {
      });
      // this.$refs.search.blur()
      // console.log(this.searchText)// this.$router.push()
      // getSearchMovies(this.searchText)
      //   .then(res => {
      //     console.log(res)
      //   })
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
