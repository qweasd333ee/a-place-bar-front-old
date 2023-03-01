<template>
  <q-page id="admin-seats-view">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-white text-h3 text">座位管理</div>
          <div class="col-12 text-right">
            <q-btn color="warning" label="新增座位" @click="openDialog(-1)" class="q-mb-md"/>
            <q-dialog v-model="form.dialog" persistent>
              <q-card style="width: 700px; max-width: 80vw;">
                <q-toolbar class="bg-primary text-white">
                  <q-toolbar-title>
                    <div class="text-center">{{ form._id.length > 0 ? '編輯座位' : '新增座位' }}</div>
                  </q-toolbar-title>
                </q-toolbar>
                <q-form v-model="form.valid" @submit="submit">
                  <q-card class="q-pa-md">
                    <q-card-section class="q-pt-none">
                      <q-input filled v-model="form.name" autofocus label="編號" :rules="[rules.required]" />
                      <q-input filled v-model="form.floor" autofocus label="樓層" :rules="[rules.required]" />
                      <q-select style="margin-bottom: 1.2rem;" filled v-model="form.category" :options="category" label="分類" />
                      <q-input filled v-model="form.seatNumber" autofocus label="位數" :rules="[rules.required]" />
                      <q-checkbox style="margin-bottom: 1.2rem;" v-model="form.book" label="是否開放" />
                      <q-checkbox style="margin-bottom: 1.2rem;" v-model="form.using" label="是否使用中" />
                    </q-card-section>
                    <q-card-actions align="center">
                      <q-btn type="submit" label="確定" color="positive" />
                      <q-btn @click="form.dialog = false" label="取消" color="negative"/>
                    </q-card-actions>
                  </q-card>
                </q-form>
              </q-card>
            </q-dialog>
          </div>
          <div class="col-12">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>編號</th>
                  <th>樓層</th>
                  <th>位數</th>
                  <th>分類</th>
                  <th>是否開放</th>
                  <th>是否使用中</th>
                  <th>編輯</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(seat, idx) in seats" :key="seat._id">
                  <td>{{ seat.name }}</td>
                  <td>{{ seat.floor }}</td>
                  <td>{{ seat.seatNumber }}</td>
                  <td>{{ seat.category }}</td>
                  <td>
                    <q-toggle v-model="seat.book" color="green"/>
                  </td>
                  <td>
                    <q-toggle v-model="seat.using" color="green"/>
                  </td>
                  <td>
                    <q-btn color="warning" icon="edit" @click="openDialog(idx)" />
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
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const category = ['吧檯', '小桌', '中桌', '大桌']

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const seats = reactive([])
const form = reactive({
  _id: '',
  name: '',
  floor: '',
  seatNumber: 0,
  book: false,
  using: false,
  category: '',
  valid: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.floor = ''
    form.seatNumber = 0
    form.book = false
    form.using = false
    form.category = ''
    form.valid = false
    form.idx = -1
  } else {
    form._id = seats[idx]._id
    form.name = seats[idx].name
    form.floor = seats[idx].floor
    form.seatNumber = seats[idx].seatNumber
    form.book = seats[idx].book
    form.using = seats[idx].using
    form.category = seats[idx].category
    form.valid = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  // if (!form.valid) return

  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('floor', form.floor)
  fd.append('seatNumber', form.seatNumber)
  fd.append('book', form.book)
  fd.append('using', form.using)
  fd.append('category', form.category)
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/seats', fd)
      seats.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/seats/' + form._id, fd)
      seats[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

(async () => {
  try {
    const { data } = await apiAuth.get('/seats/all')
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
