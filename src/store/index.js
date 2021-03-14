import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        username: '',
        tips: {
            visible: false,
            color: 'success',
            text: '',
            time: -1
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        },
        showTips(state, {text, color = 'success', time = 2000}) {
            state.tips = {text, color, time, visible: true}
        }
    },
    actions: {}
});


export default store;