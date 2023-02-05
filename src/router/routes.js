const routes = [
  {
    path: '/',
    component: () => import('layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/front/HomeView.vue'),
        meta: {
          title: '一個地方'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/front/RegisterView.vue'),
        meta: {
          title: '一個地方 | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/front/LoginView.vue'),
        meta: {
          title: '一個地方 | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'product',
        component: () => import('pages/front/ProductView.vue'),
        meta: {
          title: '一個地方 | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('pages/front/CartView.vue'),
        meta: {
          title: '一個地方 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('pages/front/OrdersView.vue'),
        meta: {
          title: '一個地方 | 訂單',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
