<template>
  <q-page id="one-seat">
    <header id="header" v-if="$q.screen.gt.sm">
      <div class="text-white text-center text-h3 background">線上訂位</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center">
          <div class="col-8 q-px-sm">
            <q-card id="card">
              <q-card-section class="column text-center">
                <h3 class="q-pb-xl">{{ seat.floor + ' ' + seat.name + ' ' + seat.category }}</h3>
                <q-form class="justify-end" v-model="valid" @submit="submitCart">
                  <q-input label="姓名" filled v-model="name" :rules="[rules.required]" />
                  <q-input label="電話" filled v-model="phone" :rules="[rules.required]" />
                  <q-input label="信箱" filled v-model="email" :rules="[rules.required, rules.email]" />
                  <q-input label="座位數" filled v-model.number="seat.seatNumber" :rules="[rules.required, rules.number]" />
                  <q-input label="訂位日期、時間" filled v-model="date" :rules="[rules.required]">
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              ></q-btn>
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-time
                            v-model="date"
                            mask="YYYY-MM-DD HH:mm"
                            format24h
                            now-btn
                          >
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-btn :label="!seat.using ? '加入訂位' : '使用中'" type="submit" color="warning" :disabled="seat.using"/>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from 'src/boot/axios'
import { Swal } from 'sweetalert2'
import { isEmail } from 'validator'
import { useUserStore } from 'src/stores/user'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCartSeat } = user

const valid = ref(false)
// const quantity = ref(0)
const name = ref('')
const phone = ref('')
const email = ref('')
const date = ref('')

const seat = reactive({
  _id: '',
  name: '',
  floor: '',
  seatNumber: 0,
  using: true,
  book: true,
  category: ''
})

const rules = {
  required (v) {
    return !!v || '欄位必填'
  },
  number (v) {
    return v > 0 || '人數錯誤'
  },
  email (v) {
    return isEmail(v) || '信箱格式錯誤'
  }
}

const submitCart = () => {
  editCartSeat({ _id: seat._id, quantity: seat.seatNumber, date: date.value, name: name.value, phone: phone.value, email: email.value })
}

(async function () {
  try {
    const { data } = await api.get('/seats/' + route.params.id)
    seat._id = data.result._id
    seat.name = data.result.name
    seat.floor = data.result.floor
    seat.seatNumber = data.result.seatNumber
    seat.using = data.result.using
    seat.book = data.result.book
    seat.category = data.result.category

    document.title = '購物網 | ' + seat.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.go(-1)
  }
})()
</script>
