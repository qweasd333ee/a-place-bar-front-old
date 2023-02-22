<template>
  <td>
    <router-link
        class="text-primary"
        style="text-decoration: none;" :to="'/seats/' + _id">{{ name }}
    </router-link>
  </td>
  <td>{{ floor }}</td>
  <td>{{ category }}</td>
  <td>{{ seatNumber }}</td>
  <td>
    <q-btn color="primary" icon="chair" :label="!using ? '加入訂位' : '使用中'" :disabled="using" @click="editCartSeat({_id, quantity: seatNumber})" />
  </td>
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
  floor: {
    type: String,
    default: ''
  },
  seatNumber: {
    type: Number,
    default: 0
  },
  book: {
    type: Boolean,
    default: false
  },
  using: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
const { editCartSeat } = user
</script>
