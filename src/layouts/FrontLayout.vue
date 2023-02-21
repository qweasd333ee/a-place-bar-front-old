<template>
  <q-layout id="front-layout" view="hHh Lpr lff">
    <q-header elevated reveal>
      <q-toolbar >
        <div class="toolbar-left-link" v-if="$q.screen.gt.sm">
          <q-btn flat to="/about">
            關於我們
          </q-btn>
          <q-btn flat to="/product">
            餐點介紹
          </q-btn>
          <q-btn flat to="/seat">
            線上訂位
          </q-btn>
        </div>
        <q-space v-if="$q.screen.gt.sm"/>
        <q-toolbar-title class="flex flex-center">
          <a href="/">
            <q-img class="q-mx-auto" src="@/assets/LogoPic/logo2.jpg" />
          </a>
        </q-toolbar-title>
        <q-space v-if="$q.screen.gt.sm"/>
        <div class="toolbar-right-link" v-if="$q.screen.gt.sm">
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
        <q-btn class="menu" v-if="$q.screen.lt.md" dense flat round icon="menu" @click="drawer = !drawer"/>
      </q-toolbar>

    </q-header>

    <q-drawer
        side="right"
        v-if="$q.screen.lt.md"
        v-model="drawer"
        show-if-above
        :width="200"
        bordered
        class="bg-grey-3"
      >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple to="/about">
            <q-item-section>
              關於我們
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/product">
            <q-item-section>
              餐點介紹
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/seat" >
            <q-item-section>
              線上訂位
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-black">
      <div v-if="$q.screen.gt.xs" class="q-pa-md row footer">
        <div class="footerCol col-3 row">
          <div class="col-12 footerLogo">
            <q-img src="@/assets/LogoPic/logo2.jpg" style="height: 50px; width: 50px;" />
          </div>

          <div class="col-12 footerIcons">
            <q-icon name="mdi-instagram"></q-icon>
            <q-icon name="mdi-facebook"></q-icon>
            <q-icon name="mdi-twitter"></q-icon>
            <q-icon name="mdi-google-plus"></q-icon>
          </div>
        </div>

        <div class="footerCol col-3 contact">
          <p>聯絡我們</p>
          <p><q-icon name="mdi-phone" />0965-603-279</p>
          <p><q-icon name="mdi-gmail" />a.place.greenisland@gmail.com</p>
        </div>
        <div class="footerCol col-3 copyRight">
          <p>Designed by kaixuan</p>
          <p>Copyright <q-icon name="mdi-copyright"></q-icon>2023 a-place-bar</p>
        </div>
      </div>

<!-- iPhone -->
      <div v-if="$q.screen.lt.sm" class="q-pa-md row footer smallFooter">
        <div class="col-12 footerLogo">
            <q-img src="@/assets/LogoPic/logo2.jpg" style="height: 50px; width: 50px;" />
        </div>
        <div class="col-12 footerIcons">
            <q-icon name="mdi-instagram"></q-icon>
            <q-icon name="mdi-facebook"></q-icon>
            <q-icon name="mdi-twitter"></q-icon>
            <q-icon name="mdi-google-plus"></q-icon>
        </div>
        <div class="col-12 row contact">
          <div class="col-6"><q-icon name="mdi-phone"></q-icon>0965-603-279</div>
          <div class="col-6"><q-icon name="mdi-gmail"></q-icon>a.place.greenisland@gmail.com</div>
        </div>
        <div class="col-12 copyRight">
          <p>Designed by kaixuan</p>
          <p>Copyright <q-icon name="mdi-copyright"></q-icon>2023 a-place-bar</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
const user = useUserStore()
const { isLogin, isAdmin, CartProduct, CartSeat } = storeToRefs(user)
const { logout } = user
const drawer = ref(false)

</script>
