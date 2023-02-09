<template>
  <q-page id="product" class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <div class="text-center text-h5 q-my-lg">餐點介紹</div>
      </div>
      <div v-for="product in products" :key="product._id" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <ProductCard v-bind="product" class="q-mx-md q-mb-md"></ProductCard>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from 'src/components/ProductCard.vue'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
