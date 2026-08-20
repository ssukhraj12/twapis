import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state:{
        user: window.APP_USER || JSON.parse(localStorage.getItem('user') || 'null'),
        cdn:"https://cdn.truewebcart.com/",
    },
    mutations:{
        SET_USER(state, user){
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        LOGOUT(state){
            state.user = null
        },
    },
    getters:{
        user:state => state.user,
        isAuthenticated: state => !!state.user,
    },
    actions:{
        async logout({commit}){
            await axios.post('/logout')
            commit('LOGOUT');
            window.location.href = '/login';
        },
    }
})

export default store;
