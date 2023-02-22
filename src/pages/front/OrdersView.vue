<template>
  <q-page id="orders">
    <header id="header">
      <div class="text-white text-center text-h3 background">訂餐清單</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>ID</th>
                  <th>日期</th>
                  <th>金額</th>
                  <th>商品</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="order in orders" :key="order._id">
                  <td>{{ order._id }}</td>
                  <td>{{ new Date(order.date).toLocaleDateString() }}</td>
                  <td>{{ order.totalPrice }}</td>
                  <td>
                    <div v-for="product in order.products" :key="product._id">
                      {{ product.p_id.name + ' * ' + product.quantity }}
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

const orders = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
