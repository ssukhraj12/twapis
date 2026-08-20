import './bootstrap.js';
import 'vuetify/dist/vuetify.min.css';
import {createApp, defineAsyncComponent} from "vue";
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import vuetify from "./vuetify.js";
// const VueApexCharts = defineAsyncComponent(() =>
//     import("vue3-apexcharts")
// );
import Toast,{useToast} from "vue-toastification";
import 'vue-toastification/dist/index.css';
const options = {
    position: 'bottom-right',
    timeout: 1000,
    closeOnClick: true,
    pauseOnHover: true,
};

const app = createApp(App)
app.use(Toast,options);
app.config.globalProperties.$toast = useToast();
window.Toast = useToast();
// app.use(VueApexCharts);
app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');
