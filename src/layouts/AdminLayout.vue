<template>
  <q-layout id="admin-layout" view="hHh Lpr lff">
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
          <q-item clickable v-ripple to="/admin/products">
            <q-item-section avatar>
              <q-icon name="restaurant" />
            </q-item-section>
            <q-item-section>餐點管理</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/orders">
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section>訂餐管理</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/seats">
            <q-item-section avatar>
              <q-icon name="chair" />
            </q-item-section>
            <q-item-section>座位管理</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/bookings">
            <q-item-section avatar>
              <q-icon name="airline_seat_recline_extra" />
            </q-item-section>
            <q-item-section>訂位管理</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/members">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>會員管理</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/statistics">
            <q-item-section avatar>
              <q-icon name="bar_chart" />
            </q-item-section>
            <q-item-section>營業統計</q-item-section>
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
const { avatar, account } = storeToRefs(user)

</script>
