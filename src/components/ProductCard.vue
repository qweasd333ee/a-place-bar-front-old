<template>
  <div>
    <q-card class="ProductCard">
      <q-card-section>
        <q-img :src="image" :ratio="1" fit="cover"/>
      </q-card-section>
      <q-card-section>
        <q-item-label>
          <router-link class="text-primary text-h6" style="text-decoration: none;" :to="'/products/' + _id">{{ name }}</router-link>
        </q-item-label>
        <q-item-label>
          ${{ price }}
        </q-item-label>
        <q-item-label>
          <p style="white-space: pre;">{{ description }}</p>
        </q-item-label>
        <q-item-label>
          <q-btn color="primary" icon="shopping_cart" label="加入購物車" @click="editCart({_id, quantity: 1})" />
        </q-item-label>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user'

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
const { editCart } = user
</script>
