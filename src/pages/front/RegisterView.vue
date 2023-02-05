<template>
  <div class="q-pa-md" id="LoginView">
    <div class="bg-left">
      <q-img src="../../assets/galata.jpg"></q-img>
    </div>
    <q-card class="row">
      <div class="col-12">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="signUp" label="Sign up" />
        </q-tabs>
      </div>
      <q-separator />
      <div class="col-12 column form">
        <q-tab-panels v-model="tab" animated>
          <!-- login----------------------------------------------------- -->
          <q-tab-panel name="login">
            <div class="text-h6 text-center">Login</div>
            <q-form @submit.prevent="login" class="column">
              <q-input
                dense
                ref="inputRef"
                v-model="LoginForm.account"
                label="Account"
                :rules="rules.account"
              />
              <q-input
                dense
                ref="inputRef"
                v-model="LoginForm.password"
                :type="isPwd ? 'password' : 'text'"
                label="password"
                :rules="rules.password"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-btn
                dense
                type="submit"
                size="22px"
                class="q-px-xl q-py-xs"
                color="secondary"
                label="Login"
              />
            </q-form>
          </q-tab-panel>

          <!-- sign up--------------------------------------------------- -->
          <q-tab-panel name="signUp">
            <div class="text-h6 text-center">Sign up</div>
            <q-form v-model="valid" @submit.prevent="register" class="row">
              <q-input
                dense
                class="col col-12"
                ref="inputRef"
                v-model="signUpForm.account"
                label="Account name"
                :rules="rules.account"
              />
              <q-input
                dense
                class="col col-12"
                ref="inputRef"
                v-model="signUpForm.email"
                label="email"
                :rules="rules.email"
              />
              <q-input
                dense
                class="col col-12"
                ref="inputRef"
                v-model="signUpForm.password"
                :type="isPwd ? 'password' : 'text'"
                label="password"
                :rules="rules.password"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-btn
                dense
                type="submit"
                size="22px"
                class="q-px-xl q-py-xs sign-up col-12"
                color="secondary"
                label="Sign up"
              />
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card>
  </div>
</template>

<style scoped></style>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { isEmail } from 'validator'
import { api } from '../../boot/axios.js'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'

import Swal from 'sweetalert2'

export default defineComponent({
  name: 'LoginView',
  setup () {
    const router = useRouter()
    const user = useUserStore()

    const inputRef = ref(null)

    const signUpForm = reactive({
      email: '',
      account: '',
      password: ''
    })

    const LoginForm = reactive({
      account: '',
      password: ''
    })

    const rules = reactive({
      account: [
        (v) => !!v || 'Account name is required',
        (v) =>
          (v.length >= 4 && v.length <= 20) ||
          'account name should be in 4-20 characters',
        (v) =>
          /^[a-zA-Z0-9]+$/.test(v) ||
          'account should only include English characters and numbers'
      ],
      email: [
        (v) => !!v || 'email is required',
        (v) => isEmail(v) || 'please enter with email type'
      ],
      password: [
        (v) => !!v || 'password is required',
        (v) =>
          (v.length >= 4 && v.length <= 20) ||
          'password should be in 4-20 characters',
        // .test() 把 v 替換成正則表達式出來的元素
        (v) =>
          /^[a-zA-Z0-9]+$/.test(v) ||
          'password should only include English characters and numbers'
      ]
    })

    const register = async () => {
      console.log('ok')
      try {
        await api.post('/users', signUpForm)
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Sign up successfully'
        })
        router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'failed',
          text:
            error.isAxiosError && error.response.data
              ? error.response.data.message
              : 'error occurs'
        })
      }
    }

    const login = () => {
      user.login(LoginForm)
    }

    return {
      tab: ref('login'),
      signUpForm,
      LoginForm,
      rules,
      inputRef,
      isPwd: ref(true),
      register,
      login,

      reset () {
        inputRef.value.resetValidation()
      }
    }
  }
})
</script>
