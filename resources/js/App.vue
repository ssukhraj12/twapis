<template>
    <v-app>
        <v-navigation-drawer
            color="grey-lighten-5"
            v-model="drawer"
            :permanent="isDesktop"
            :width="225">
            <v-list density="compact" nav color="primary" class="fill-height flex flex-col" activeClass="bg-blue-lighten-4">
                <v-list-item title="TWAPIS">
                </v-list-item>
                <v-divider/>
                <v-list-item :to="{name:'AdminDashboard'}" title="Dashboard" prependIcon="mdi-finance"/>
                <v-list-item :to="{name:'ProductsList'}" title="Products" prependIcon="mdi-package-variant"/>
                <v-list-item :to="{name:'OrdersList'}" title="Orders" prependIcon="mdi-cart-arrow-down"/>
                <v-list-item :to="{name:'InventoryList'}" title="Inventory" prependIcon="mdi-format-list-numbered"/>
                <v-list-item :to="{name:'CustomersList'}" title="Customers" prependIcon="mdi-account-group"/>
                <v-list-item :to="{name:'LiveViewPage'}" title="Anaytics" prependIcon="mdi-google-analytics"/>
                <v-list-item :to="{name:'ShopSettings'}" title="Theme" prependIcon="mdi-store-settings"/>
                <v-spacer/>
                <v-divider/>
                <v-list-item :to="{name:'SettingsPage'}" title="Settings" prependIcon="mdi-cog"/>
                <v-list-item prepend-icon="mdi-logout">
                    <template #title>
                        <v-btn @click="logout" variant="tonal" color="red" block title="Logout">Logout</v-btn>
                    </template>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main class="py-1">
            <div class="px-1">
                Main App File
                <router-view/>
                <v-btn>Try Button</v-btn>
            </div>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data(){
        return{
            cdn:this.$store.state.cdn,
            drawer:false,
        }
    },
    computed:{
        isDesktop() {
            return this.$vuetify.display.mdAndUp;
        },
    },
    watch: {
        isDesktop(val) {
            this.drawer = val; // open by default on desktop
        }
    },
    mounted() {
        this.drawer = this.isDesktop;
    },
    methods:{
        async logout(){
            await axios.post('/logout')
                .then(()=>{
                    this.$store.commit('LOGOUT');
                    window.location.href = '/login';
                })
        }
    }
}
</script>

<style scoped>

</style>
