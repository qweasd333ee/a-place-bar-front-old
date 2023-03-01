<template>
  <td>{{ name }}</td>
  <td>{{ floor }}</td>
  <td>{{ category }}</td>
  <td>{{ seatNumber }}</td>
  <td>
    <q-btn color="warning" icon="chair" :to="'/seats/' + _id" />
  </td>
</template>

<script setup>
// import { useUserStore } from 'src/stores/user'

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
  date: {
    type: String,
    default: '123'
  },
  category: {
    type: String,
    default: ''
  }
})

// const user = useUserStore()
// const { editCartSeat } = user
</script>
