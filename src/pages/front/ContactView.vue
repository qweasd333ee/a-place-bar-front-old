<template>
  <q-page id="contact-view">
    <header id="header" v-if="$q.screen.gt.sm">
      <div class="text-white text-center text-h3 background">聯絡我們</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <div class="text-h4 q-mb-lg">Lorem ipsum dolor sit amet.</div>
            <p class=" q-mb-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, assumenda quae in earum vero voluptatem nihil, voluptates libero repellat atque corrupti corporis tempore reiciendis ea dignissimos culpa maxime ut. Nostrum?</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 order-last q-px-lg">
            <div class="q-mb-lg text-h6">write us</div>
            <div class="q-mb-lg text-body1">admin@admin.com</div>
            <div class="q-mb-lg text-h6">call us</div>
            <div class="q-mb-lg text-body1">0965-603-279</div>
            <div class="q-mb-lg text-h6">visit us</div>
            <div class="q-mb-lg text-body1">951台東縣綠島鄉52之1號</div>
            <div class="q-mb-lg text-h6">social links</div>
            <div class="q-mb-lg">
            <a href="/">
              <q-icon class="q-mr-lg" name="mdi-twitter" />
            </a>
            <a href="https://www.facebook.com/a.place.2020/">
              <q-icon class="q-mr-lg" name="mdi-facebook" />
            </a>
            <a href="https://www.instagram.com/a.place_bar/">
              <q-icon class="q-mr-lg" name="mdi-instagram" />
            </a>
          </div>
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
                <q-input v-model="text" filled rows="10" type="textarea" label="信息" />
              </div>
              <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>
