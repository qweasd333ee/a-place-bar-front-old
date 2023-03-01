<template>
  <q-page id="contact-view">
    <header id="header" v-if="$q.screen.gt.sm">
      <div class="text-white text-center text-h3 background">聯絡我們</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <div class="text-h4 q-mb-lg">聯絡資訊</div>
            <p class="text-h6 q-mb-xl">如果您有任何意見或建議，歡迎您隨時與我們聯繫，我們會認真聆聽您的想法，為您提供更好的服務。謝謝您的支持，我們期待著您的光臨！</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 order-last q-px-lg info">
            <div class="q-mb-sm text-h6">聯絡信箱</div>
            <div class="q-mb-xl text-body1">a.place.greenisland@gmail.com</div>
            <div class="q-mb-sm text-h6">聯絡電話</div>
            <div class="q-mb-xl text-body1">0965-603-279</div>
            <div class="q-mb-sm text-h6">聯絡地址</div>
            <div class="q-mb-xl text-body1">951台東縣綠島鄉52之1號</div>
            <div class="q-mb-sm text-h6">營業時間</div>
            <div class="q-mb-xl text-body1">週一至週日，晚上19:30至01:00</div>
            <!-- <div class="q-mb-lg">
            <a href="/">
              <q-icon class="q-mr-lg" name="mdi-twitter" />
            </a>
            <a href="https://www.facebook.com/a.place.2020/">
              <q-icon class="q-mr-lg" name="mdi-facebook" />
            </a>
            <a href="https://www.instagram.com/a.place_bar/">
              <q-icon class="q-mr-lg" name="mdi-instagram" />
            </a>
          </div> -->
          </div>
          <div class="col-md-9 q-px-lg">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <div class="q-mb-lg">
                <q-input v-model="text" filled type="text" label="姓名" />
              </div>
              <div class="q-mb-lg">
                <q-input v-model="text" filled type="text" label="信箱" />
              </div>
              <div class="q-mb-lg">
                <q-input v-model="text" filled rows="11" type="textarea" label="信息" />
              </div>
              <div>
                <q-btn label="送出" type="submit" color="warning"/>
                <q-btn label="重設" type="reset" color="warning" flat class="q-ml-sm" />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>
