<template>
  <q-page id="member-card-seat">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class=" col-12 text-white text-center text-h3 text">訂位確認
          </div>
          <div class="col-12 q-mb-xl">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>座位編號</th>
                  <th>訂位日期、時間</th>
                  <th>姓名</th>
                  <th>電話</th>
                  <th>信箱</th>
                  <th>訂位人數</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(seat, idx) in CartSeat" :key="seat._id" :class="{'bg-red': !seat.s_id.book}">
                  <td>{{ seat.s_id.name }}</td>
                  <td>{{ new Date(seat.date).toLocaleString() }}</td>
                  <td>{{ seat.name }}</td>
                  <td>{{ seat.phone }}</td>
                  <td>{{ seat.email }}</td>
                  <td>
                    <q-btn color="warning" label="-" @click="updateCart(idx, -1)" />
                    &nbsp;{{ seat.quantity }}&nbsp;
                    <q-btn color="warning" label="+" @click="updateCart(idx, 1)"/>
                  </td>
                  <td>
                    <q-btn color="red" @click="updateCart(idx, seat.quantity * -1)" label="刪除" />
                  </td>
                </tr>
                <tr v-if="CartSeat.length === 0">
                  <td class="text-center text-h6" colspan="7">沒有訂位</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
          <div class="col-12 text-center">
            <h5 class="q-mb-lg text-white">總人數 {{ totalPerson }}</h5>
            <q-btn class="q-mb-lg" color="warning" label="訂位" :disabled="!canBooking" @click="onBookingBtnClick" />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from '../../stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { editCartSeat, booking } = user

const CartSeat = reactive([])
const updateCart = async (idx, quantity) => {
  await editCartSeat({ _id: CartSeat[idx].s_id._id, quantity })
  CartSeat[idx].quantity += quantity
  if (CartSeat[idx].quantity <= 0) {
    CartSeat.splice(idx, 1)
  }
}

async function onBookingBtnClick () {
  await booking()
  router.push('/member/bookings')
}

const totalPerson = computed(() => {
  return CartSeat.reduce((total, current) => {
    return total + (current.quantity)
  }, 0)
})

const canBooking = computed(() => {
  return CartSeat.length > 0 && !CartSeat.some(seat => {
    return !seat.s_id.book
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/CartSeat')
    CartSeat.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
