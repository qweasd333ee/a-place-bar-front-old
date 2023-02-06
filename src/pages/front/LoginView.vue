<template>
  <q-page class="flex flex-center" id="LoginView">
    <q-card class="row q-pa-md">
      <div class="col-12 column">
        <div class="text-h6 text-center">登入</div>
        <q-form v-model='valid' @submit='login' class="row">
          <q-input dense class="col col-12" v-model="loginForm.account" label="帳號" :rules="rules.account" maxlength="20" />
          <q-input dense class="col col-12" v-model="loginForm.password" label="密碼" :rules="rules.password" maxlength="20" />
          <q-btn dense type="submit" size="22px" class="q-px-xl q-py-xs sign-up col-12" color="secondary" label="登入" />
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '../../stores/user'

const user = useUserStore()

const valid = ref(false)
const loginForm = reactive({
  account: '',
  password: ''
})

const rules = {
  account: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號僅能為英文大小寫及數字'
  ],
  password: [
    v => !!v || '欄位必填',
    v => (v.length >= 4 && v.length <= 20) || '長度必須為 4 ~ 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼僅能為英文大小寫及數字'
  ]
}

const login = async () => {
  await user.login(loginForm)
}
</script>
