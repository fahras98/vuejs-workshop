import { createRouter, createWebHashHistory } from "vue-router";
import Forgot from "../views/Forgot.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";


const routes = [{
        path: "/Forgot",
        name: "Forgot",
        component: Forgot,
    },
    {
        path: "/SignUp",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/",
        name: "SignIn",
        component: SignIn,
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;