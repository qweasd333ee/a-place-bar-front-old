<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="primary" label="新增餐點" @click="openDialog(-1)" />
        <q-dialog v-model="form.dialog" persistent>
          <q-card style="width: 700px; max-width: 80vw;">
            <q-toolbar class="bg-primary text-white">
              <q-toolbar-title>
                <div>{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</div>
              </q-toolbar-title>
            </q-toolbar>
            <q-form v-model="form.valid" @submit="submit">
              <q-card>
                <q-card-section class="q-pt-none">
                  <q-input v-model="form.name" autofocus label="名稱" :rules="[rules.required]" />
                  <q-input v-model="form.price" autofocus label="價格" :rules="[rules.required, rules.price]" />
                  <q-input v-model="form.description" autofocus type="textarea" label="說明" :rules="[rules.required]" />
                  <q-select v-model="form.categories" :categories="categories" label="分類" />
                  <q-checkbox v-model="form.sell" label="上架" />
                  <q-file dense v-model="form.image" autofocus label="照片" />
                </q-card-section>
                <q-card-actions vertical align="center">
                  <q-btn flat type="submit" :loading="form.loading" label="確定" v-colse-popup />
                  <q-btn flat @click="form.dialog = false" label="取消" v-colse-popup/>
                </q-card-actions>
              </q-card>
            </q-form>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import { apiAuth } from '@/plugins/axios'
import { reactive } from 'vue'
// import Swal from 'sweetalert2'

const categories = ['shot', '茶酒', '特調', '奶酒', '啤酒', '無酒精', '拼盤', '單點']
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
  loading: false,
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
    form.loading = false
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
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

// const submit = async () => {
//   if (!form.valid) return

//   form.loading = true

//   // fd.append(key, value)
//   const fd = new FormData()
//   fd.append('name', form.name)
//   fd.append('price', form.price)
//   fd.append('description', form.description)
//   fd.append('image', form.image)
//   fd.append('sell', form.sell)
//   fd.append('category', form.category)

//   try {
//     if (form._id.length === 0) {
//       const { data } = await apiAuth.post('/products', fd)
//       products.push(data.result)
//       Swal.fire({
//         icon: 'success',
//         title: '成功',
//         text: '新增成功'
//       })
//     } else {
//       const { data } = await apiAuth.patch('/products/' + form._id, fd)
//       products[form.idx] = data.result
//       Swal.fire({
//         icon: 'success',
//         title: '成功',
//         text: '編輯成功'
//       })
//     }
//     form.dialog = false
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error?.response?.data?.message || '發生錯誤'
//     })
//   }

//   form.loading = false
// }

// (async () => {
//   try {
//     const { data } = await apiAuth.get('/products/all')
//     products.push(...data.result)
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error?.response?.data?.message || '發生錯誤'
//     })
//   }
// })()
</script>
