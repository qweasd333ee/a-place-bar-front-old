<template>
  <q-page id="about-view">
    <header id="header">
      <div class="text-white text-center text-h3 background">
        關於我們
      </div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-2 q-px-md text-1">
            <hr class="hr">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-4 q-px-md text-2">
            <q-img src="@/assets/CarouselPic/pic18.jpeg"/>
          </div>
          <div class="col-5 q-mx-auto q-px-md self-center text-3">
            <h4>Lorem, ipsum dolor.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio totam nemo consequatur rem unde enim sapiente reprehenderit quae excepturi minus, eius tempore facilis ipsum perspiciatis officiis, eaque, accusamus eos aspernatur.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="section02">
      <div class="container">
        <div class="row">
          <div class="col-4 q-px-lg">
            <q-card class="my-card" flat bordered>
              <q-img src="@/assets/CarouselPic/pic6.jpeg" height="300px"/>
              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-px-lg">
            <q-card class="my-card" flat bordered>
              <q-img src="@/assets/CarouselPic/pic7.jpeg" height="300px"/>
              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-px-lg">
            <q-card class="my-card" flat bordered>
              <q-img src="@/assets/CarouselPic/pic8.jpeg" height="300px"/>
              <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <section id="section03">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-8 text-center">
            <q-icon name="mdi-glass-cocktail" size="50px" color="orange" class="q-mb-xl" />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate expedita odit odio laboriosam reiciendis dolor fuga numquam, mollitia in laudantium, ad accusantium sapiente recusandae assumenda dignissimos dicta natus labore.
            </div>
            <div class="q-mt-xl text-grey-7">
              - kaixuan
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section04">
      <div class="container">
        <div class="row items-center justify-between">
          <div class="col-md-6 q-px-md">
            <q-img src="@/assets/CarouselPic/pic28.jpeg"/>
          </div>
          <div class="col-md-5 q-px-md">
            <p class="text-h6">
              Lorem ipsum dolor sit amet consectetur.
              </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum ad, veritatis unde vitae quos saepe suscipit distinctio eos eaque perspiciatis nesciunt non eum recusandae voluptatum optio eius animi explicabo!
            </p>
            <q-btn outline label="查看更多資訊" to="/about" />
          </div>
        </div>
      </div>
    </section>
    <section id="section05">
      <div class="row">
        <iframe class="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58903.755422165894!2d121.4346960671015!3d22.672993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f8db0ec0247df%3A0x1845566a395c520c!2z5LiA5YCL5Zyw5pa5IGHCt3BsYWNlIEJBUg!5e0!3m2!1szh-TW!2stw!4v1676620444130!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  </q-page>
</template>
