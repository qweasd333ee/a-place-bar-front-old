<template>
  <q-page class="flex flex-center" id="RegisterView">
    <q-card class="row q-pa-md">
      <div class="col-12 column">
        <div class="text-h6 text-center">註冊</div>
        <q-form v-model='valid' @submit='register' class="row">
          <q-input dense class="col col-12" v-model="registerForm.account" label="帳號" :rules="rules.account" maxlength="20" />
          <q-input dense class="col col-12" v-model="registerForm.email" label="信箱" :rules="rules.email" />
          <q-input dense class="col col-12" v-model="registerForm.password" label="密碼" :rules="rules.password" maxlength="20" />
          <q-input dense class="col col-12" v-model="registerForm.passwordConfirm" label="確認密碼" :rules="rules.passwordConfirm" maxlength="20" />
          <q-btn dense type="submit" size="22px" class="q-px-xl q-py-xs sign-up col-12" color="secondary" label="註冊" />
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { isEmail } from 'validator'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()

const valid = ref(false)
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
