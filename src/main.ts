import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Eskimo from './components/Eskimo.vue'
import Eskimo2 from './components/Eskimo2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Eskimo},
        {path:'/xxx',component:Eskimo2}
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')

