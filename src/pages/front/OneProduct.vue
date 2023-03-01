<template>
  <q-page id="one-product">
    <header id="header" v-if="$q.screen.gt.sm">
      <div class="text-white text-center text-h3 background">餐點介紹</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 q-px-sm q-pr-lg">
            <q-img :src="product.image" :ratio="1" fit="cover"/>
          </div>
          <div class="col-12 col-md-6 q-px-sm q-pl-lg">
            <q-card id="card">
              <q-card-section class="column text-center">
                <h3 class="q-pb-xl">{{ product.name }}</h3>
                <h6 class="q-pb-xl text-h4">{{ product.description }}</h6>
                <p class="q-pb-xl text-body1">${{ product.price }}</p>
                <q-form class="justify-end" v-model="valid" @submit="submitCart">
                  <q-input class="q-pb-xl" filled v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]" />
                  <q-btn label="加入購物車" type="submit" color="warning"/>
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
const { editCartProduct } = user

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

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  // console.log(valid.value)
  // if (!valid.value) return
  editCartProduct({ _id: product._id, quantity: quantity.value })
}

(async function () {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = '購物網 | ' + product.name
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
