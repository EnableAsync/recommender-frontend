<template>
  <v-app>
    <router-view>
    </router-view>
    <v-snackbar v-model="tips.visible" :timeout="tips.time" :color="tips.color">
      {{ tips.text }}
    </v-snackbar>
  </v-app>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'App',

  data: () => ({}),
  computed: {
    ...mapState(['tips'])
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  }
};
</script>

<style>
.v-snack__content {
  text-align: center;
}
</style>
