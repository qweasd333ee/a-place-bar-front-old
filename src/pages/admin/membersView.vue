<template>
  <q-page id="admin-members-view">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-white text-h3 text">會員管理</div>
          <div class="col-12">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>帳號</th>
                  <th>姓名</th>
                  <th>信箱</th>
                  <th>電話</th>
                  <th>地址</th>
                  <th>性別</th>
                  <th>年齡</th>
                  <th>刪除</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="user in users" :key="user._id">
                  <td>{{ user.account }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.address }}</td>
                  <td>{{ user.gender }}</td>
                  <td>{{ user.age }}</td>
                  <td>
                    <q-btn color="red" icon="mdi-trash-can" @click="deleteUser(user._id)" />
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
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
</script>
