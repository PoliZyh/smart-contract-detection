

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
            }
        ]
    }
]


export {
    constantRoutes
}