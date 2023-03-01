<template>
  <q-page id="all-product">
    <header id="header">
      <div class="text-white text-center text-h3 background">餐點介紹</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center text-white">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <div class="q-mb-md text-h4">餐點分類</div>
            <p class="q-mb-xl text-h6">我們的酒吧提供炸物和各式調酒，包括shot、茶酒、特調、奶酒、無酒精等，供您根據自己的口味和需求進行選擇。無論您喜歡清淡的口感還是濃烈的味道，我們都有合適的飲品供您品嚐。期待您的光臨，一同享受美食和美酒！</p>
          </div>
        </div>
        <div class="row">
          <q-card flat class="col-12">
            <q-tabs v-model="tab" dense active-color="warning" indicator-color="warning" narrow-indicator align="center">
              <q-tab name="shot" label="shot" />
              <q-tab name="茶酒" label="茶酒" />
              <q-tab name="特調" label="特調" />
              <q-tab name="奶酒" label="奶酒" />
              <q-tab name="啤酒" label="啤酒" />
              <q-tab name="無酒精" label="無酒精" />
              <q-tab name="拼盤" label="拼盤" />
              <q-tab name="單點" label="單點" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated >
              <q-tab-panel class="row" :name="tab">
                <div v-for="product in filterData" :key="product" class="col-12 col-md-6">
                <div class=" q-px-md">
                  <ProductCard v-bind="product"></ProductCard>
                </div>
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
import { ref, reactive, computed } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from 'src/components/ProductCard.vue'

const tab = ref('shot')
const products = reactive([])

const filterData = computed(() => {
  return products.filter((item) => item.category === tab.value)
});

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
