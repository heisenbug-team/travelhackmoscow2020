const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      { path: 'register', component: () => import('pages/auth/register/index.vue') },
      { path: 'login', component: () => import('pages/auth/login/index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/error/404.vue')
  })
}

export default routes
