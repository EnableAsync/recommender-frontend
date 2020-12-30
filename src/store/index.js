import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        username: '',
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        }
    },
    actions: {}
});

export default store;