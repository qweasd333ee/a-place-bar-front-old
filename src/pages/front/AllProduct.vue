<template>
  <q-page id="all-product">
    <header id="header">
      <div class="text-white text-center text-h3 background">餐點介紹</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <h4 class="q-mb-md">餐點分類</h4>
            <p class="q-mb-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat soluta dignissimos autem sit ullam cumque, possimus ducimus rerum dolorem veniam labore sapiente animi voluptas, dolor eligendi quae inventore. Corrupti, accusamus?</p>
          </div>
        </div>
        <div class="row">
          <q-card flat>
            <q-tabs v-model="tab" dense class="text-grey q-mb-lg" active-color="primary" indicator-color="primary" narrow-indicator align="center">
              <q-tab name="酒" label="酒" />
              <q-tab name="炸物" label="炸物" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated >
              <q-tab-panel name="酒" class="row">
                <div v-for="product in products" :key="product._id" class="col-12 col-md-6">
                  <ProductCard v-bind="product" class="q-px-md"></ProductCard>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from 'src/components/ProductCard.vue'

const tab = ref('酒')
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
