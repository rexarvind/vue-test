import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about/',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ]
});

// window.popStateDetected = false
// window.addEventListener('popstate', () => {
//     window.popStateDetected = true
//     console.log('going back');
// })

// router.beforeEach(function (to, from, next) {
//     const isItBackButton = window.popStateDetected
//     if (isItBackButton) {
//         console.log('back')
//     } else {
//         console.log('next')
//     }
//     console.log(isItBackButton)
//     next()
//     to.meta.transition = isItBackButton ? 'route-back' : 'route-next'
//     window.popStateDetected = false
// });


// router.beforeEach(function (to, from, next) {
//     console.log(to, from);
//     if(history.state.back){
//         next();
//     } else {
//         next();
//     }
// });

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  to.meta.transition = toDepth < fromDepth ? 'route-back' : 'route-next';
});

export default router
