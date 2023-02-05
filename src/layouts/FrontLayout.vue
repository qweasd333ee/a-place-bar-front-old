<template>
  <q-layout view="hHh Lpr lff" id="main-layout">
    <q-header elevated class="text-white">
      <q-toolbar>
        <q-btn class="menu" v-if="$q.screen.lt.md" dense flat round icon="menu" @click="drawerOpen = !drawerOpen"/>
        <q-toolbar-title>
          <router-link to="/">一個地方</router-link>
        </q-toolbar-title>

        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <q-btn flat to="/" class="text-white">
            首頁
          </q-btn>
          <q-btn flat to="/BlogAll" class="text-white">
            關於我們
          </q-btn>
          <q-btn flat to="/ToursAll" class="text-white">
            餐點介紹
          </q-btn>
          <q-btn flat to="/TransportAll" class="text-white">
            線上訂位
          </q-btn>
          <q-btn flat to="/Top10" class="text-white">
            購物車
          </q-btn>
          <q-btn flat to="/ActivitiesAll" class="text-white">
            會員中心
          </q-btn>
        </div>

        <q-space />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">

          <!-- <q-btn flat v-if="isLogin && isAdmin" to="/admin" label="admin" class="admin"/>
          <q-btn flat v-if="isLogin" to="/cart" icon="shopping_cart" class="shoppingCart"/> -->
          <q-btn flat to="/login" name="login" label="登入" class="login"/>
          <q-btn flat to="/register" name="register" label="註冊" class="login"/>
        </div>

      </q-toolbar>

    </q-header>

    <q-drawer
        v-model="drawerOpen"
        show-if-above
        :width="200"
        bordered
        class="bg-grey-3"
      >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple to="/">
            <q-item-section>
              首頁
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="">
            <q-item-section>
              關於我們
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="">
            <q-item-section>
              餐點介紹
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="" >
            <q-item-section>
              線上訂位
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="" >
            <q-item-section>
              購物車
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="" >
            <q-item-section>
              會員中心
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
</style>

<script setup>
import { ref } from 'vue'
const drawerOpen = ref(false)
</script>
