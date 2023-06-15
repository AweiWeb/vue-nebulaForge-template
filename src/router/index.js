import { createWebHashHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/view/Home/index.vue'),
    },
  ],
});

export default router;
