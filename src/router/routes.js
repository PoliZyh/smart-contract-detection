

const constantRoutes = [
    {
        path: '',
        name: 'layout',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home/index.vue')
            },
            {
                path: 'commit',
                name: 'commit',
                component: () => import('@/views/Commit/index.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () => import('@/views/Login/index.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/views/Register/index.vue')
            },
            {
                path: 'history',
                name: 'history',
                component: () => import('@/views/History/index.vue')
            }
        ]
    }
]


export {
    constantRoutes
}