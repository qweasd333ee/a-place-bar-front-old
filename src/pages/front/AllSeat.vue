<template>
  <q-page id="all-seat">
    <header id="header">
      <div class="text-white text-center text-h3 background">線上訂位</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row">
          <q-markup-table class="col-12">
            <thead class="text-center">
              <tr>
                <th>座位編號</th>
                <th>樓層</th>
                <th>分類</th>
                <th>座位上限</th>
                <th>訂位</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="seat in seats" :key="seat._id">
                <SeatTable v-bind="seat"></SeatTable>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import SeatTable from 'src/components/SeatTable.vue'

const seats = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/seats')
    seats.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

</script>

<style lang="scss">
</style>
