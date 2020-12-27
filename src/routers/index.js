import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '../layouts/BaseLayout'
import Recommend from "../pages/Recommend";
import Rank from "../pages/Rank";
import Hot from "../pages/Hot";

Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        component: BaseLayout,
        redirect: 'hot',
        children: [
            {
                path: "/recommend",
                component: Recommend
            },
            {
                path: "/rank",
                component: Rank
            },
            {
                path: "/hot",
                component: Hot
            }
        ]
    },

];

const router = new Router({
    mode: "history",
    routes: constantRoutes
});

export default router;