<template>
  <q-page id="home-view">
    <header id="section01" class="row items-end">
      <video autoplay muted loop class="bg-video">
        <source src="@/assets/CarouselPic/video.mp4" type="video/mp4">
      </video>
      <div class="mask"></div>
      <div class="container q-mt-xl">
        <div class="row justify-center">
          <div class="content col-12 text-center q-my-auto">
            <p class="q-mb-lg">
              <span class="text-orange">BAR</span>
              /RESTAURANT
            </p>
            <q-img class="q-mb-xl" src="@/assets/LogoPic/logo3.png" width="500px" />
            <p class="text q-mb-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, facilis ullam. A deleniti blanditiis soluta repudiandae iusto voluptas ipsum quia, debitis suscipit, eligendi voluptatibus.</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-around">
          <div class="col text-left">
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
          <div class="col text-right">
            <p>
              <q-icon left color="orange" class="q-mr-md" name="mdi-map-marker" />
              951台東縣綠島鄉52之1號
            </p>
          </div>
        </div>
      </div>
    </header>
    <section id="section02" class="row">
      <div class="col-12">
        <q-card square flat class="text-center">
          <q-card-section class="text-h4">
            酒逢知己飲，詩向會人吟
          </q-card-section>
          <q-card-section class="text-h6">
            素未謀面的我們，此時此刻都在這段時間內一起享受綠島獨特的情調，在「一個地方」把酒言歡，感受著生活的美好，工作的充實，以及回歸自然的本質。
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section id="section03" class="row">
      <div class="col-12 col-sm-5">
        <q-img class="cover" src="@/assets/CarouselPic/pic10.jpeg" />
      </div>
      <div class="col-12 col-sm-7">
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
            <div class="text-h4">營業時間</div>
          </q-card-section>
          <q-card-section class="text-h6">
            每日19:30~01:00
          </q-card-section>
          <q-card-section>
            <q-btn outline label="查看更多資訊" to="/about" />
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section id="section04" class="row">
      <div class="col-12 col-sm-7">
        <q-card class="column flex-center text-center" square flat style="height: 100%;">
          <q-card-section class="text-h6">
            一杯酒的用心 除了調製過程外 還有恰到好處的裝飾 讓喝酒時視覺味覺嗅覺堆疊出多重層次的饗宴 我們調的不是酒 是愛
          </q-card-section>
          <q-card-section>
            <q-btn outline label="餐點介紹" to="/product" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-5 pic">
        <q-img class="cover" src="@/assets/BartendingPic/酒13.jpeg" />
      </div>
    </section>
    <section id="section05">
      <div class="container">
        <div class="row">
          <h4 class="col-12 text-center q-mb-lg">關於</h4>
          <p class="col-12 text-center q-mb-xl">
            一個人可以走得很快 但一群人可以走得很遠
            <br>
            願那些相聚與重逢，能留在你們心裡的一個地方
          </p>
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
