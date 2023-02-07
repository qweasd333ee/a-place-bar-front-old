import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, apiAuth } from '../boot/axios.js'
import Swal from 'sweetalert2'
import { LocalStorage } from 'quasar'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const CartProduct = ref(0)
  const role = ref(0)

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })
  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
  })

  async function login (form) {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      CartProduct.value = data.result.CartProduct
      role.value = data.result.role
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登入成功'
      })
      this.router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  async function logout () {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      account.value = ''
      role.value = 0
      CartProduct.value = 0
      this.router.push('/')
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登出成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  async function getUser () {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      CartProduct.value = data.result.CartProduct
      role.value = data.result.role
    } catch (error) {
      logout()
    }
  }

  return {
    token,
    account,
    email,
    CartProduct,
    role,
    login,
    logout,
    isLogin,
    isAdmin,
    avatar,
    getUser
  }
}, {
  persist: {
    key: 'a-place-bar',
    paths: ['token'],
    storage: {
      getItem: (key) => LocalStorage.getItem(key),
      setItem: (key, value) => LocalStorage.set(key, value)
    }
  }
})
