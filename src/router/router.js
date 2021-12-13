import VueRouter from "vue-router";


export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: () => import('../components/prepareView/MethodCard')
        },
        {
            path: '/Mine',
            component: () => import('../components/prepareMine/prepareApp')
        }
    ]
})
