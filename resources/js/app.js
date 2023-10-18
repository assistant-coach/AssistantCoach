import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from "./pages/Home.vue";
import App from "./app.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
    ],
});

const app= createApp(App);

app.use(router);

app.mount('#app');
