import { createRouter, createWebHistory} from "vue-router";
import store from '../store/index.js';
import AdminDashboard from "../admin/AdminDashboard.vue";
import ProductsList from "../admin/product/ProductsList.vue";
import OrdersList from "../admin/orders/OrdersList.vue";
import CustomersList from "../admin/customers/CustomersList.vue";
import LiveViewPage from "../admin/analytics/LiveViewPage.vue";
import ShopSettings from "../admin/shop/ShopSettings.vue";
import InventoryList from "../admin/stock/InventoryList.vue";
import SettingsPage from "@/admin/settings/SettingsPage.vue";

const routes = [
    {path:'/dashboard',name:'AdminDashboard',component:AdminDashboard},
    {path:'/products',name:'ProductsList',component:ProductsList},
    {path:'/orders',name:'OrdersList',component:OrdersList},
    {path:'/customers',name:'CustomersList',component:CustomersList},
    {path:'/analytics',name:'LiveViewPage',component:LiveViewPage},
    {path:'/inventory',name:'InventoryList',component:InventoryList},
    {path:'/shop/settings',name:'ShopSettings',component:ShopSettings},
    {path:'/settings',name:'SettingsPage',component:SettingsPage},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach(async (to,from,next)=>{

    next()
})

export default router;
