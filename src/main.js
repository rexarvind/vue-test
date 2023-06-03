import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// router.beforeEach((to, from, next) => {
//     if (window.event.type == 'popstate'){
//         next(false);
//     } else{
//         next();
//     }
// });
