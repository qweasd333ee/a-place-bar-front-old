<template>
  <q-page id="one-seat">
    <header id="header" v-if="$q.screen.gt.sm">
      <div class="text-white text-center text-h3 background">餐點介紹</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-8 q-px-sm">
            <q-card id="card">
              <q-card-section class="column text-center">
                <h3 class="q-pb-xl">{{ seat.name }}</h3>
                <h6 class="q-pb-xl">樓層{{ seat.floor }}</h6>
                <p class="q-pb-xl">座位上限人數{{ seat.seatNumber }}</p>
                <q-form class="justify-end" v-model="valid" @submit="submitCart">
                  <q-input v-model.number="quantity" label="數量" :rules="[rules.required, rules.number]" />
                  <q-btn label="加入購物車" type="submit" color="primary"/>
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
import { useUserStore } from 'src/stores/user'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCartSeat } = user

const valid = ref(false)

const quantity = ref(0)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const seat = reactive({
  _id: '',
  name: '',
  floor: '',
  seatNumber: 0,
  using: true,
  book: true,
  category: ''
})

const submitCart = () => {
  // console.log(valid.value)
  // if (!valid.value) return
  editCartSeat({ _id: seat._id, quantity: quantity.value })
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
