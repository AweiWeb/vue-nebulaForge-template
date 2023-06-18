import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
            path: '/login',
            component: () => import('../view/Login/index.vue'),
            meta: {title: '登录页面'}
        },
      {   
          // 组件的父级路由，其他组件全挂载在上面
            path: '/',
            component: () => import('../view/Layout/index.vue'),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    component: () => import('../view/Home/index.vue'),
                    meta: {title: '主页'}
                },
                {
                    path: '/intro',
                    component: () => import('../view/Introduce/index.vue')
                },
                {
                    path: '/person',
                    component: () => import('../view/Personal/index.vue')
                },
                {
                    path: '/play',
                    component: () => import('../view/Play/index.vue')
                },
                {
                    path: '/approve',
                    component: () => import('../view/approve/index.vue')
                }
            ]
        }
    ]
});

// const whiteList = ['/login', '/404'];

// 导航前置守卫
router.beforeEach(() => {
    // 这里进行守卫
    // 如果，没有登录，就跳回登录页面
    // 判断有无token进行拦截
});
export default router;
