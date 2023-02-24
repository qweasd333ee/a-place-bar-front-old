<template>
  <q-page id="login-view">
    <div class="bg-left">
      <q-img src="../../assets/CarouselPic/pic1.jpeg"></q-img>
    </div>
    <div class="container">
      <q-card class="row">
        <div class="col-12 tab">
          <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" narrow-indicator align="justify">
            <q-tab name="登入" label="登入" />
            <q-tab name="註冊" label="註冊" />
          </q-tabs>
        </div>
        <div class="col-12 column form">
          <q-tab-panels v-model="tab" animated >
            <q-tab-panel name="登入" >
              <q-form v-model='valid' @submit='login' class="column">
                <q-input dense v-model="loginForm.account" label="帳號" :rules="rules.account" maxlength="20" />
                <q-input dense v-model="loginForm.password" label="密碼" :rules="rules.password" maxlength="20" />
                <q-btn dense type="submit" size="22px" color="secondary" label="登入" />
              </q-form>
            </q-tab-panel>
            <q-tab-panel name="註冊">
              <q-form v-model='valid' @submit='register' class="column">
                <q-input dense v-model="registerForm.account" label="帳號" :rules="rules.account" maxlength="20" />
                <q-input dense v-model="registerForm.email" label="信箱" :rules="rules.email" />
                <q-input dense v-model="registerForm.password" label="密碼" :rules="rules.password" maxlength="20" />
                <q-input dense v-model="registerForm.passwordConfirm" label="確認密碼" :rules="rules.passwordConfirm" maxlength="20" />
                <q-btn dense type="submit" size="22px" color="secondary" label="註冊" />
              </q-form>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { isEmail } from 'validator'
import { api } from '../../boot/axios'
import { useUserStore } from '../../stores/user'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()
const tab = ref('登入')
const valid = ref(false)
const loginForm = reactive({
  account: '',
  password: ''
})
const registerForm = reactive({
  email: '',
  account: '',
  password: '',
  passwordConfirm: ''
})

const rules = {
  account: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    // .test() 把 v 替換成正則表達式出來的元素
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號僅能為英文大小寫及數字'
  ],
  email: [
    v => !!v || '欄位必填',
    v => isEmail(v) || '信箱格式錯誤'
  ],
  password: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼僅能為英文大小寫及數字'
  ],
  passwordConfirm: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼僅能為英文大小寫及數字',
    v => (v === registerForm.password) || '密碼不一致'
  ]
}

const login = async () => {
  await user.login(loginForm)
}

const register = async () => {
  // if (!valid.value) return
  try {
    await api.post('/users', registerForm)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
</script>
