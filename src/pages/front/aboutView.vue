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
            <p>入口處招牌</p>
          </div>
          <div class="col-4 q-px-md text-2">
            <q-img src="~/assets/CarouselPic/pic27.jpeg"/>
          </div>
          <div class="col-5 q-mx-auto q-px-md self-center text-3">
            <h4 class="q-mb-md">一個地方</h4>
            <p class="text-h6 text">
              秉持著生活結合工作回歸大自然的信念<br>
              生活總是忙碌的，白晝下人們各自擁有精彩的生活，在這日新月異的時代更是拉緊發條，為生活忙碌付出、為目標努力向前。當黃昏沉落、夜幕拉下，哪怕拖著疲憊的身軀．也因夜晚伴隨著酒精昇華，把每一個人引領凝聚到了「一個地方」。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="section02">
      <div class="container">
        <div class="row">
          <div class="col-4 q-px-lg">
            <q-card class="my-card" flat>
              <q-img src="~/assets/CarouselPic/pic6.jpeg" height="300px"/>
              <q-card-section>
                <div class="text-overline text-orange-9">Bartender</div>
                <div class="text-h5 q-mt-sm q-mb-xs">阿宗
                </div>
                <div class="text-caption text-grey text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-px-lg">
            <q-card class="my-card" flat>
              <q-img src="~/assets/CarouselPic/pic7.jpeg" height="300px"/>
              <q-card-section>
                <div class="text-overline text-orange-9">Bartender</div>
                <div class="text-h5 q-mt-sm q-mb-xs">勝揚</div>
                <div class="text-caption text-grey text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-px-lg">
            <q-card class="my-card" flat>
              <q-img src="~/assets/CarouselPic/pic8.jpeg" height="300px"/>
              <q-card-section>
                <div class="text-overline text-orange-9">Bartender</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Allen</div>
                <div class="text-caption text-grey text">
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
            <q-icon
            class="q-mb-xl"
            name="mdi-glass-cocktail" size="50px"
            color="orange" />
            <div class="text-h6 q-mb-xl text">
              大家知道我們為什麼取名叫一個地方嗎？<br>
              說起來這其實源自於小琉球人類們的口頭禪<br>
              當你問起：你要去哪？ &nbsp; 回答則是：一個地方<br>
              因為懶得跟你說要去哪裡 所以只好說一個地方<br>
              當somewhere 變成a.place 就是一個應該要來的地方了<br>
            </div>
            <div class="text-h6 text-orange">
              - 金罵有閒 趕緊來喝
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section04">
      <div class="container">
        <div class="row items-center justify-between">
          <div class="col-md-6 q-px-md">
            <q-img src="~/assets/CarouselPic/pic28.jpeg"/>
          </div>
          <div class="col-md-5 q-px-md">
            <p class="text-h4">
              Lorem ipsum dolor sit amet consectetur.
              </p>
            <p class="text-h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum ad, veritatis unde vitae quos saepe suscipit distinctio eos eaque perspiciatis nesciunt non eum recusandae voluptatum optio eius animi explicabo!
            </p>
            <q-btn outline label="聯絡我們" to="/contact" />
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
