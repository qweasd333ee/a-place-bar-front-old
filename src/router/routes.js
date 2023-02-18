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
        path: 'CartProduct',
        name: 'CartProduct',
        component: () => import('pages/front/CartProduct.vue'),
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
          title: '一個地方 | 訂餐清單',
          login: true,
          admin: false
        }
      },
      {
        path: 'seat',
        name: 'seat',
        component: () => import('pages/front/AllSeat.vue'),
        meta: {
          title: '一個地方 | 線上訂位',
          login: false,
          admin: false
        }
      },
      {
        path: 'CartSeat',
        name: 'CartSeat',
        component: () => import('pages/front/CartSeat.vue'),
        meta: {
          title: '一個地方 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'bookings',
        name: 'bookings',
        component: () => import('pages/front/bookingsView.vue'),
        meta: {
          title: '一個地方 | 訂位清單',
          login: true,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/front/aboutView.vue'),
        meta: {
          title: '一個地方 | 關於我們',
          login: false,
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
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('../pages/admin/OrdersView.vue'),
        meta: {
          title: '一個地方 | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'seats',
        name: 'admin-seats',
        component: () => import('../pages/admin/seatsView.vue'),
        meta: {
          title: '一個地方 | 座位管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'bookings',
        name: 'admin-bookings',
        component: () => import('../pages/admin/bookingsView.vue'),
        meta: {
          title: '一個地方 | 訂位管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'members',
        name: 'members',
        component: () => import('../pages/admin/membersView.vue'),
        meta: {
          title: '一個地方 | 會員管理',
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
