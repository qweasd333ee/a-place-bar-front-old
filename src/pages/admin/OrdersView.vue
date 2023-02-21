<template>
  <q-page class="q-pa-md">
    <q-table
            :grid="$q.screen.lt.md"
            title="訂單管理"
            :rows="orders"
            :columns="columns"
            row-key="name"
            :filter="filter"
            >
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                <q-icon name="search" />
                </template>
            </q-input>
        </template>
    </q-table>
    <div class="row">
      <div class="col-12">
        <h5 class="text-center">訂單</h5>
        <q-markup-table>
          <thead class="text-center">
            <tr>
              <th>ID</th>
              <th>日期</th>
              <th>使用者</th>
              <th>金額</th>
              <th>商品</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="order in orders" :key="order._id">
              <td>{{ order._id }}</td>
              <td>{{ new Date(order.date).toLocaleDateString() }}</td>
              <td>{{ order.u_id.account }}</td>
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
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'

const filter = ref('')
const orders = reactive([])

const columns = [
  {
    name: 'ID',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row._id,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'date',
    align: 'center',
    field: row => new Date(row.date).toLocaleDateString(),
    label: '訂單日期'
  },
  {
    name: 'account',
    align: 'center',
    field: row => row.u_id.account,
    label: '訂單帳戶'
  },
  {
    name: 'edit',
    label: 'total',
    field: row => row.products.p_id.name + ' * ' + row.products.quantity,
    sortable: true
  }
]

for (const totalProduct in orders) {
  console.log(totalProduct)
}

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
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
