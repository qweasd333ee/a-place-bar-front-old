<template>
  <q-page id="home-view">
    <header id="section01" class="row">
      <div class="col-12 banner">
      </div>
    </header>
    <section id="section02" class="row">
      <div class="col-12">
        <q-card square flat class="text-center">
          <q-card-section>
            <div class="text-h4">
              酒逢知己飲，詩向會人吟。
            </div>
          </q-card-section>
          <q-card-section class="text-h6">
            素未謀面的我們，此時此刻都在這段時間內一起享受綠島獨特的情調，在「一個地方」把酒言歡，感受著生活的美好，工作的充實，以及回歸自然的本質。
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section id="section03" class="row">
      <div class="col-5">
        <q-img class="cover" src="@/assets/CarouselPic/pic8.jpeg" />
      </div>
      <div class="col-7">
        <q-card square flat class="column flex-center">
          <q-card-section>
            <div class="text-h4">
              訂位
            </div>
          </q-card-section>
          <q-card-section class="text-h6">
            我們沒有限制喝酒時間，建議提前訂位，確保有位子，當天位子保留10分鐘。
          </q-card-section>
          <q-card-section>
            <q-btn outline label="立即訂位" to="/seat" />
          </q-card-section>
        </q-card>
        <q-card square flat class="column flex-center">
          <q-card-section>
            <div class="text-h6">營業時間</div>
          </q-card-section>
          <q-card-section>
            每日19:30~01:00
          </q-card-section>
          <q-card-section>
            <q-btn outline label="查看更多資訊" to="/about" />
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section id="section04" class="row">
      <div class="col-7">
        <q-card class="column flex-center" square flat style="height: 100%;">
          <q-card-section class="text-h6">
            菜單
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
          <q-card-section>
            <q-btn outline label="查看更多資訊" to="/product" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-5 pic">
        <q-img class="cover" src="@/assets/CarouselPic/pic9.jpeg" />
      </div>
    </section>
    <section id="section05">
      <div class="container">
        <div class="row">
          <h4 class="col-12 text-center">lorem feg</h4>
          <p class="col-12 text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="column">
          <img class="cell" src="@/assets/CarouselPic/pic24.jpeg">
          <img class="cell" src="@/assets/CarouselPic/pic16.jpeg">
          <img class="cell" src="@/assets/CarouselPic/pic34.jpeg">
          <div class="flex-break"></div>
          <img class="cell" src="@/assets/CarouselPic/pic30.jpeg">
          <img class="cell" src="@/assets/CarouselPic/pic18.jpeg">
          <img class="cell" src="@/assets/CarouselPic/pic31.jpeg">
          <div class="flex-break"></div>
          <img class="cell" src="@/assets/CarouselPic/pic17.jpeg">
          <img class="cell" src="@/assets/CarouselPic/pic27.jpeg">
          <img class="cell" src="@/assets/CarouselPic/pic28.jpeg">
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
</script>
