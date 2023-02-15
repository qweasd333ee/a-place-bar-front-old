<template>
  <q-layout id="front-layout" view="hHh Lpr lff">
    <q-header elevated >
      <q-toolbar>
        <q-btn class="menu" v-if="$q.screen.lt.md" dense flat round icon="menu" @click="drawer = !drawer"/>
        <q-toolbar-title>
          <img src="@/assets/LogoPic/logo2.jpg" style="width: 50px;">
        </q-toolbar-title>
        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <q-btn flat to="">
            關於我們
          </q-btn>
          <q-btn flat to="/product">
            餐點介紹
          </q-btn>
          <q-btn flat to="/seat">
            線上訂位
          </q-btn>
        </div>
        <q-space />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn class="register" v-if="!isLogin" flat to="/register" name="註冊" label="註冊"/>
          <q-btn class="login" v-if="!isLogin" flat to="/login" name="登入" label="登入" />
          <q-btn class="admin" v-if="isLogin && isAdmin" flat to="/admin" name="管理" label="管理" />
          <q-btn class="CartProduct" v-if="isLogin" flat  name="CartProduct" icon="local_bar">
            <q-badge color="red" rounded floating :label="CartProduct" />
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup v-if="isLogin" to="/CartProduct">
                  <q-item-section>
                    訂餐
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup v-if="isLogin" to="/orders">
                  <q-item-section>
                    訂餐清單
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn class="CartSeat" v-if="isLogin" flat name="CartSeat" icon="chair">
            <q-badge color="red" rounded floating :label="CartSeat" />
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup v-if="isLogin" to="/CartSeat">
                  <q-item-section>
                    訂位
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup v-if="isLogin" to="/bookings">
                  <q-item-section>
                    訂位清單
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn class="logout" v-if="isLogin" flat icon="person">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup v-if="isLogin">
                  <q-item-section>
                    會員中心
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup v-if="isLogin" @click="logout">
                  <q-item-section>
                    登出
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

      </q-toolbar>

    </q-header>

    <q-drawer
        v-if="$q.screen.lt.md"
        v-model="drawer"
        show-if-above
        :width="200"
        bordered
        class="bg-grey-3"
      >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple to="">
            <q-item-section>
              關於我們
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/product">
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
<style lang="scss">
#front-layout {
  .q-toolbar {
    background-color: #000000;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
const user = useUserStore()
const { isLogin, isAdmin, CartProduct, CartSeat } = storeToRefs(user)
const { logout } = user
const drawer = ref(false)

</script>
