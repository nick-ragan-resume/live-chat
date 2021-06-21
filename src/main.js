import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css
import './assets/main.css'

// hault app until firebase establishes the initial connection with our app
import { projectAuth } from './firebase/config'

let app 

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})



