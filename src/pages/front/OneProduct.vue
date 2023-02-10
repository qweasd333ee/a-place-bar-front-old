<template>
  <div id="product">
    <q-card class="q-pa-xl">
      <q-card-section class="text-center">
        <q-img :src="product.image" :ratio="1" fit="cover"/>
        <h5>{{ product.name }}</h5>
        <p>${{ product.price }}</p>
        <p>{{ product.description }}</p>
        <q-form v-model="valid" @submit="submitCart">
          <q-input v-model.number="quantity" label="數量" :rules="[rules.required, rules.number]" />
          <q-btn label="加入購物車" type="submit" color="primary"/>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
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
const { editCart } = user

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
  editCart({ _id: product._id, quantity: quantity.value })
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
