

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
            }
        ]
    }
]


export {
    constantRoutes
}