<template>
  <q-btn color="primary" style="width: 80px; height: 80px; border-radius: 50%;" @click="alert = true">{{ name }}</q-btn>
  <q-dialog v-model="alert" @click="alert = true">
    <q-card>
      <q-card-section>
        <router-link class="text-primary text-h6" style="text-decoration: none;" :to="'/seats/' + _id">{{ name }}</router-link>
      </q-card-section>
      <q-card-section>
        樓層:{{ floor }}
      </q-card-section>
      <q-item-label>
        位數:{{ seatNumber }}
      </q-item-label>
      <q-card-actions>
        <q-btn color="primary" icon="shopping_cart" label="訂位" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
// import { useUserStore } from 'src/stores/user'
const alert = ref(false)

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

// const user = useUserStore()
// const { editCart } = user
</script>
