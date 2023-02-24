import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, apiAuth } from '../boot/axios.js'
import Swal from 'sweetalert2'
import { LocalStorage, Notify } from 'quasar'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const address = ref('')
  const gender = ref('')
  const age = ref(0)
  const creitcard = ref('')
  const CartProduct = ref(0)
  const CartSeat = ref(0)
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
      name.value = data.result.name
      email.value = data.result.email
      phone.value = data.result.phone
      address.value = data.result.address
      gender.value = data.result.gender
      age.value = data.result.age
      creitcard.value = data.result.creitcard
      CartProduct.value = data.result.CartProduct
      CartSeat.value = data.result.CartSeat
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
      name.value = ''
      email.value = ''
      phone.value = ''
      address.value = ''
      gender.value = ''
      age.value = 0
      creitcard.value = ''
      role.value = 0
      CartProduct.value = 0
      CartSeat.value = 0
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
      name.value = data.result.name
      email.value = data.result.email
      phone.value = data.result.phone
      address.value = data.result.address
      gender.value = data.result.gender
      age.value = data.result.age
      creitcard.value = data.result.creitcard
      CartProduct.value = data.result.CartProduct
      CartSeat.value = data.result.CartSeat
      role.value = data.result.role
    } catch (error) {
      logout()
    }
  }

  async function editCartProduct ({ _id, quantity }) {
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      this.router.push('/login')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/CartProduct', { p_id: _id, quantity: parseInt(quantity) })
      CartProduct.value = data.result
      // Swal.fire({
      //   icon: 'success',
      //   title: '成功',
      //   text: '加入購物車成功'
      // })
      if (quantity >= 1) {
        Notify.create({
          message: '已增加',
          color: 'green'
        })
      } else if (quantity < 0) {
        Notify.create({
          message: '已減少',
          color: 'red'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  async function editCartSeat ({ _id, quantity, date, name, phone, email }) {
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      this.router.push('/login')
      return
    }
    try {
      console.log(email)
      const { data } = await apiAuth.post('/users/CartSeat', { s_id: _id, quantity: parseInt(quantity), date, name, phone, email })
      CartSeat.value = data.result
      // Swal.fire({
      //   icon: 'success',
      //   title: '成功',
      //   text: '加入購物車成功'
      // })
      if (quantity >= 1) {
        Notify.create({
          message: '已新增訂位人數',
          color: 'green'
        })
      } else if (quantity < 0) {
        Notify.create({
          message: '已減少訂位人數',
          color: 'red'
        })
      }
    } catch (error) {
      console.log(error)
      console.log(error?.response)
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const checkout = async () => {
    try {
      await apiAuth.post('/orders')
      CartProduct.value = 0
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '結帳成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const booking = async () => {
    try {
      await apiAuth.post('/bookings')
      CartSeat.value = 0
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '訂位成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  return {
    token,
    account,
    email,
    CartProduct,
    CartSeat,
    role,
    login,
    logout,
    isLogin,
    isAdmin,
    avatar,
    getUser,
    editCartProduct,
    editCartSeat,
    checkout,
    booking
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
