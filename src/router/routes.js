const routes = [
  {
    path: '/',
    component: () => import('layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/front/HomeView.vue'),
        meta: {
          title: '一個地方',
          login: false,
          admin: false
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
        path: 'product',
        name: 'product',
        component: () => import('pages/front/AllProduct.vue'),
        meta: {
          title: '一個地方 | 餐點介紹',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'OneProduct',
        component: () => import('pages/front/OneProduct.vue'),
        meta: {
          title: '一個地方 | 餐點',
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
    path: '/admin',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('../pages/admin/HomeView.vue'),
        meta: {
          title: '一個地方 | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('../pages/admin/ProductsView.vue'),
        meta: {
          title: '一個地方 | 餐點管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: '一個地方 | 404',
      login: false,
      admin: false
    }
  }
]

export default routes
