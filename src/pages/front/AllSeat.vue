<template>
  <q-page id="seat" class="flex flex-center">
    <div class="text-center text-h5 q-my-lg">線上訂位</div>
    <div v-for="seat in seats" :key="seat._id" >
      <SeatBtn :class="{'bg-red': seat.using, 'bg-green': !seat.using}" v-bind="seat"></SeatBtn>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import SeatBtn from 'src/components/SeatBtn.vue'

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
#seat {
  div:nth-child(2) {
    button {
      position: absolute;
      top: 15%;
      left: 70%;
    }
  }
  div:nth-child(3) {
    button {
      position: absolute;
      top: 15%;
      left: 75%;
    }
  }
  div:nth-child(4) {
    button {
      position: absolute;
      top: 15%;
      left: 80%;
    }
  }
  div:nth-child(5) {
    button {
      position: absolute;
      top: 15%;
      left: 85%;
    }
  }
}
</style>
