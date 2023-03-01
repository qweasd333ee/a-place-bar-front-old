<template>
  <q-layout id="member-layout" view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>
          <a href="/">
            <img src="~/assets/LogoPic/logo6.png" />
          </a>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding style="height: calc(100% - 150px); margin-top: 150px;">
          <q-item clickable v-ripple to="/member/member">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>會員資料</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/member/CartProduct">
            <q-badge color="red" rounded floating :label="CartProduct" />
            <q-item-section avatar>
              <q-icon name="local_bar" />
            </q-item-section>
            <q-item-section>訂餐確認</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/member/orders">
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section>訂餐明細</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/member/CartSeat">
            <q-item-section avatar>
              <q-icon name="chair" />
            </q-item-section>
            <q-item-section>訂位確認</q-item-section>
            <q-badge color="red" floating rounded :label="CartSeat" />
          </q-item>
          <q-item clickable v-ripple to="/member/bookings">
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section>訂位明細</q-item-section>
          </q-item>
        </q-list>
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent text-center">
            <q-avatar size="60px" class="q-mb-sm">
              <img :src="avatar">
            </q-avatar>
            <div class="text-weight-bold text-white" v-html="account"></div>
          </div>
        </q-img>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const drawer = ref(false)
const user = useUserStore()
const { avatar, account, CartProduct, CartSeat } = storeToRefs(user)

</script>
