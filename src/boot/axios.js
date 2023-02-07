import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useUserStore } from 'src/stores/user'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

// 呼叫 axios ---> interceptors.request ---> 送出請求 ---> interceptors.response ---> 呼叫的地方
apiAuth.interceptors.request.use(config => {
  // 一定要放在裡面
  const user = useUserStore()
  config.headers.authorization = `Bearer ${user.token}`
  return config
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$apiAuth = apiAuth
})

export { api, apiAuth }
