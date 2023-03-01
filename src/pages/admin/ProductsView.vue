<template>
  <q-page id="admin-products-view">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-white text-h3 text">餐點管理</div>
          <div class="col-12 text-right">
            <q-btn color="warning" label="新增餐點" @click="openDialog(-1)" class="q-mb-md"/>
            <q-dialog v-model="form.dialog" persistent>
              <q-card style="width: 700px; max-width: 80vw;">
                <q-toolbar class="bg-warning text-white">
                  <q-toolbar-title>
                    <div class="text-center">{{ form._id.length > 0 ? '編輯餐點' : '新增餐點' }}</div>
                  </q-toolbar-title>
                </q-toolbar>
                <q-form v-model="form.valid" @submit="submit">
                  <q-card class="q-pa-md">
                    <q-card-section class="q-pt-none">
                      <q-input filled v-model="form.name" autofocus label="名稱" :rules="[rules.required]" />
                      <q-input filled v-model="form.price" autofocus label="價格" :rules="[rules.required, rules.price]" />
                      <q-select style="margin-bottom: 1.2rem;" filled v-model="form.category" :options="category" label="分類" />
                      <q-input filled v-model="form.description" autofocus type="textarea" rows="3" label="說明" :rules="[rules.required]" />
                      <q-checkbox style="margin-bottom: 1.2rem;" v-model="form.sell" label="上架" />
                      <v-image-input style="width: 200px;" v-model="form.image" removable :max-file-size="1" />
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
                  <th>照片</th>
                  <th>名稱</th>
                  <th>價格</th>
                  <th>分類</th>
                  <th>上架</th>
                  <th>編輯</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(product, idx) in products" :key="product._id">
                  <td>
                    <q-img :src="product.image" :ratio="1" width="150px"/>
                  </td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.category }}</td>
                  <td>
                    <q-toggle v-model="product.sell" color="green"/>
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

const category = ['shot', '茶酒', '特調', '奶酒', '啤酒', '無酒精', '拼盤', '單點']

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  category: '',
  valid: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category
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
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
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
    const { data } = await apiAuth.get('/products/all')
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
