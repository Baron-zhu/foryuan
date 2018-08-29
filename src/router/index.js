import Vue from 'vue'
import Router from 'vue-router'
import PagesIndex from '@/pages/Index'
import PagesLogin from '@/pages/Login'
import PagesRegister from '@/pages/Register'
import PagesPersonal from '@/pages/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PagesIndex',
      component: PagesIndex
    },
    {
      path: '/login',
      name: 'PagesLogin',
      component: PagesLogin
    },
    {
      path: '/register',
      name: 'PagesRegister',
      component: PagesRegister
    },
    {
      path: '/personal',
      name: 'PagesPersonal',
      component: PagesPersonal
    },
    
  ]
})
