<template>
  <q-page id="admin-bookings-view">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-white text-h3 text">訂位管理</div>
          <div class="col-12">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>ID</th>
                  <th>姓名</th>
                  <th>日期、時間</th>
                  <th>電話</th>
                  <th>信箱</th>
                  <th>訂位人數</th>
                  <th>座位編號</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="booking in bookings" :key="booking._id">
                  <td>{{ booking._id }}</td>
                  <td>{{ booking.seats[0].name }}</td>
                  <td>{{ new Date(booking.seats[0].date).toLocaleString() }}</td>
                  <td>{{ booking.seats[0].phone }}</td>
                  <td>{{ booking.seats[0].email }}</td>
                  <td>{{ booking.seats[0].s_id.seatNumber }}</td>
                  <td>
                    <div v-for="seat in booking.seats" :key="seat._id">
                      {{ seat.s_id.name }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'

const bookings = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/bookings/all')
    bookings.push(...data.result.map(booking => {
      booking.totalPerson = booking.seats.reduce((total, current) => total + current.quantity, 0)
      return booking
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
