import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import WebHeader from "../components/WebHeader.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "Login", component: Login },
        { path: "/Home", name: "Home", component: Home },
        { path: "/Home/:id", name: "HomeAdmin", component: Home },
        // { path: "/Login", name: "Login", component: "Login" },
        { path: "/WebHeader", name: "WebHeader", component: WebHeader },

    ]
})
export default router;