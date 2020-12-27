import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '../layouts/BaseLayout'
import Recommend from "../pages/Recommend";
import Rank from "../pages/Rank";

Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        component: BaseLayout,
        redirect: 'Recommend',
        children: [
            {
                path: "/recommend",
                component: Recommend
            },
            {
                path: "/rank",
                component: Rank
            }
        ]
    },

];

const router = new Router({
    mode: "history",
    routes: constantRoutes
});

export default router;