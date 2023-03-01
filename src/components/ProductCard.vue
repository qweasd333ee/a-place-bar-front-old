<template>
  <q-card class="ProductCard row items-center q-py-md" flat square>
    <div class="col-2">
      <q-img :src="image" :ratio="1" fit="cover"/>
    </div>
    <div class="col-8 q-px-md">
      <q-item-label class="text-h5 q-mb-md">
        <router-link
        class="text-warning"
        style="text-decoration: none;" :to="'/products/' + _id">{{ name }}
        </router-link>
      </q-item-label>
      <q-item-label class="text-body1">
        <p style="white-space: pre;">{{ description }}</p>
      </q-item-label>
    </div>
    <div class="col-2 q-px-md text-center">
      <q-item-label class="text-h6 q-mb-md">
        ${{ price }}
      </q-item-label>
        <q-item-label>
          <q-btn color="warning" icon="shopping_cart" @click="editCartProduct({_id, quantity: 1})" />
        </q-item-label>
    </div>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user.js'

defineProps({
  _id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
const { editCartProduct } = user
</script>
