import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {name: 'Main'}
  },
  { path: '/main', 
    name: 'Main',
    component: () => import('@/views/MainPage')
  },
  {
    path: '/exhibition',
    name: 'Exhibition',
    component: () => import('@/views/ExhibitionPage')
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('@/views/StudyPage')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/ShoppingPage')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('@/views/WatchingPage')
  },

  { path: '/:pathMatch(.*)*', redirect: {name: 'Main'} }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
