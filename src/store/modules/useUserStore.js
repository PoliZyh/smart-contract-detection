import { defineStore } from 'pinia'


export default defineStore('user', {
    state: () => ({
        hasLogin: false
    }),

    actions: {
        login: () => {
            this.hasLogin = true
            sessionStorage.setItem('hasLogin', 'true')
        },
        logout: () => {
            this.hasLogin = false
            sessionStorage.setItem('hasLogin', 'false')
        }
    },

    getters: {
        isLogin: (state) => {
            return state.hasLogin || sessionStorage.getItem('hasLogin')
        }
    }
    
})