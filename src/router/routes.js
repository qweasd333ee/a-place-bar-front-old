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
        path: 'seats/:id',
        name: 'oneSeat',
        component: () => import('pages/front/OneSeat.vue'),
        meta: {
          title: '一個地方 | 線上訂位',
          login: false,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/front/AboutView.vue'),
        meta: {
          title: '一個地方 | 關於我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('pages/front/ContactView.vue'),
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
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('pages/admin/HomeView.vue'),
        meta: {
          title: '一個地方 | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('pages/admin/ProductsView.vue'),
        meta: {
          title: '一個地方 | 餐點管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('pages/admin/OrdersView.vue'),
        meta: {
          title: '一個地方 | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'seats',
        name: 'admin-seats',
        component: () => import('pages/admin/SeatsView.vue'),
        meta: {
          title: '一個地方 | 座位管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'bookings',
        name: 'admin-bookings',
        component: () => import('pages/admin/BookingsView.vue'),
        meta: {
          title: '一個地方 | 訂位管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'members',
        name: 'members',
        component: () => import('pages/admin/MembersView.vue'),
        meta: {
          title: '一個地方 | 會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('pages/admin/StatisticsView.vue'),
        meta: {
          title: '一個地方 | 營業統計',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/member',
    component: () => import('layouts/MenberLayout.vue'),
    children: [
      {
        path: '',
        name: 'member-home',
        component: () => import('pages/member/HomeView.vue'),
        meta: {
          title: '一個地方｜會員中心',
          login: true,
          admin: false
        }
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('pages/member/MembersView.vue'),
        meta: {
          title: '一個地方｜會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: 'CartProduct',
        name: 'CartProduct',
        component: () => import('pages/member/CartProduct.vue'),
        meta: {
          title: '一個地方 | 訂餐確認',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('pages/member/OrdersView.vue'),
        meta: {
          title: '一個地方 | 訂餐明細',
          login: true,
          admin: false
        }
      },
      {
        path: 'CartSeat',
        name: 'CartSeat',
        component: () => import('pages/member/CartSeat.vue'),
        meta: {
          title: '一個地方 | 訂位確認',
          login: true,
          admin: false
        }
      },
      {
        path: 'bookings',
        name: 'bookings',
        component: () => import('pages/member/BookingsView.vue'),
        meta: {
          title: '一個地方 | 訂位明細',
          login: true,
          admin: false
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
