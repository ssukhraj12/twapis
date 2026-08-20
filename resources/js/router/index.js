import { createRouter, createWebHistory} from "vue-router";
import store from '../store/index.js';

const routes = [

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach(async (to,from,next)=>{

    next()
})

export default router;
