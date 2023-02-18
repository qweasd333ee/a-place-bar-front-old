<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <h5 class="text-center">訂位
        </h5>
        <q-markup-table>
          <thead class="text-center">
            <tr>
              <th>帳號</th>
              <th>信箱</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="user in users" :key="user._id">
              <td>{{ user.account }}</td>
              <td>{{ user.email }}</td>
              <td>
                <q-btn color="primary" icon="edit" @click="deleteUser(user._id)" />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from 'src/boot/axios'

const users = reactive([])

const getUsers = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.splice(0, users.length)
    users.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
getUsers()

const deleteUser = async (id) => {
  try {
    await apiAuth.delete('/users/' + id)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    getUsers()
  } catch (error) {
    await Swal.fire({
      icon: 'success',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}
</script>
