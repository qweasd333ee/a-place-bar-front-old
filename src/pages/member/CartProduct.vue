<template>
  <q-page id="member-card-product">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class=" col-12 text-white text-center text-h3 text">訂餐確認
          </div>
          <div class="col-12 q-mb-xl">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>圖片</th>
                  <th>名稱</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(product, idx) in CartProduct" :key="product._id" :class="{'bg-red': !product.p_id.sell}">
                  <td>
                    <q-img :src="product.p_id.image" :ratio="1" width="150px"/>
                  </td>
                  <td>{{ product.p_id.name }}</td>
                  <td>{{ product.p_id.price }}</td>
                  <td>
                    <q-btn color="warning" label="-" @click="updateCart(idx, -1)" />
                    &nbsp;{{ product.quantity }}&nbsp;
                    <q-btn color="warning" label="+" @click="updateCart(idx, 1)"/>
                  </td>
                  <td>{{ product.quantity * product.p_id.price }}</td>
                  <td>
                    <q-btn color="red" @click="updateCart(idx, product.quantity * -1)" label="刪除" />
                  </td>
                </tr>
                <tr v-if="CartProduct.length === 0">
                  <td class="text-center text-h6" colspan="6">沒有訂餐</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
          <div class="col-12 text-center">
            <h5 class="q-mb-lg text-white">總金額 {{ totalPrice }}</h5>
            <q-btn class="q-mb-lg" color="warning" label="結帳" :disabled="!canCheckout" @click="onCheckoutBtnClick" />
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
const { editCartProduct, checkout } = user

const CartProduct = reactive([])

const updateCart = async (idx, quantity) => {
  await editCartProduct({ _id: CartProduct[idx].p_id._id, quantity })
  CartProduct[idx].quantity += quantity
  if (CartProduct[idx].quantity <= 0) {
    CartProduct.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/member/orders')
}

const totalPrice = computed(() => {
  return CartProduct.reduce((total, current) => {
    return total + (current.p_id.price * current.quantity)
  }, 0)
})

const canCheckout = computed(() => {
  return CartProduct.length > 0 && !CartProduct.some(product => {
    return !product.p_id.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/CartProduct')
    CartProduct.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
