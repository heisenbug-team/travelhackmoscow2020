import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
})

Router.beforeEach((to, from, next) => {
  const publicPages = ['/register', '/login', '/chat']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if (authRequired && !loggedIn) {
    return next('/register')
  }

  next()
})

export default Router
