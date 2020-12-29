<template>
  <v-app id="inspire">
<!--    <div style="display: flex; flex-direction: column; align-items: center;">-->
<!--      <Notification></Notification>-->
<!--    </div>-->

    <v-app-bar
      app
      color="blue darken-3"
      dark
      clipped-left
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">推荐系统</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--      <v-btn-->
      <!--          icon-->
      <!--          large-->
      <!--      >-->
      <!--        <v-avatar-->
      <!--            size="32px"-->
      <!--            item-->
      <!--        >-->
      <!--          <v-img-->
      <!--              src="../assets/logo.svg"-->
      <!--              alt="Vuetify"-->
      <!--          ></v-img>-->
      <!--        </v-avatar>-->
      <!--      </v-btn>-->
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>登录</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="用户名"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="密码"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="onLogin">登录</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  // import {login} from '../api/login'
  // import md5 from 'js-md5';
  // import qs from 'qs'
  // import {notify} from "../components/notification";
  // import Notification from "../components/notification/Notification";

  // import router from "../routers";

  export default {
    // components: {Notification},
    data: () => ({
      username: 'admin',
      password: 'admin'
    }),
    methods: {
      onLogin() {
        this.$router.push('/hot')
      }
      // onLogin() {
      //   login(qs.stringify({
      //     username: this.username,
      //     password: md5(this.password)
      //   }))
      //     .then(res => {
      //       if (res.data.code === 0) {
      //         notify('success', '登录成功');
      //         this.$router.push('/register');
      //         // this.close();
      //       } else if (res.data.code === 10001) {
      //         notify('error', '账号或密码错误');
      //       } else {
      //         notify('error', res.data.code + '错误');
      //       }
      //     })
      //     .catch(reason => {
      //       notify('error', '[登录失败]' + reason)
      //     });
      // }
    }
  }
</script>
