<template>
  <v-app id="BaseLayout">
    <v-app-bar
        app
        color="white"
    >
      <!--            <v-toolbar-title class="align-self-center">电影推荐系统</v-toolbar-title>-->

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

      <div v-on:keyup.enter="search">
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-text-field
                class="mx-4"
                flat
                hide-details
                label="Search"
                append-icon="search"
                solo-inverted
                v-model="searchText"
                ref="search"
                v-on="on"
            ></v-text-field>
          </template>
          <v-list v-if="choices.length > 0" class="border-list" dense>
            <v-list-item v-for="(choice, index) in choices" :key="index" @click="itemClick(choice)">
              <v-list-item-title>{{ choice.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>


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
        name: "近期热门",
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
        name: "推荐电影",
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
    itemClick(choice) {
      this.searchText = choice.name
      this.$refs.search.blur()
      // this.$router.push()
    },
    inputHandler(text) {
      if (text.trim() !== '') {
        this.showSelect = true
        setTimeout(() => {
          this.getEntity()
        }, 300)
      }
    },
    getEntity() {
      // 请求接口更新choices数据
      this.choices = [
        {
          key: '1234',
          name: '1234'
        },
        {
          key: 'abc',
          name: 'abc'
        }
      ]
    },
    search() {
      this.$refs.search.blur()
      console.log(this.searchText)
      // this.$router.push()
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
