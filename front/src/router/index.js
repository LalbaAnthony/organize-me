import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../pages/TasksList.vue'),
    },
    {
      path: '/habits',
      name: 'habits',
      component: () => import('../pages/HabitsList.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/Settings.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../pages/ErrorNotFound.vue'),
    },
  ],
})

export default router