<template>
  <q-page id="home-view">
    <section id="section01" class="row">
      <div class="col-12">
        <q-carousel
          animated
          v-model="slide"
          swipeable
          infinite
          :autoplay="5000"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide :name="1" img-src="@/assets/CarouselPic/pic1.jpeg" />
          <q-carousel-slide :name="2" img-src="@/assets/CarouselPic/pic2.jpeg" />
          <q-carousel-slide :name="3" img-src="@/assets/CarouselPic/pic3.jpeg" />
          <q-carousel-slide :name="4" img-src="@/assets/CarouselPic/pic4.jpeg" />
          <q-carousel-slide :name="5" img-src="@/assets/CarouselPic/pic5.jpeg" />
        </q-carousel>
      </div>
    </section>
    <section id="section02" class="row">
      <div class="flex flex-center text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolorum est placeat illum? Quo cumque sapiente modi quam dolores consequuntur atque, itaque ea, labore rem veritatis tenetur ut optio dolor.
      </div>
    </section>
    <section id="section03" class="row">
      <div class="col-6">
        <q-parallax src="@/assets/CarouselPic/pic7.jpeg" />
      </div>
      <div class="col-6">
        <q-card square flat>
          <q-card-section>
            <div class="text-h6">
              訂位
            </div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
          <q-card-section>
            <q-btn outline label="訂位" to="/seat" />
          </q-card-section>
        </q-card>
        <q-card class="text-white" square flat style="height: 50%;">
          <q-card-section>
            <div class="text-h6">營業時間</div>
          </q-card-section>
          <q-card-section>
            每日19:30~01:00
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section id="section04" class="row">
      <div class="col-6 text">
        <q-card class="text-white flex flex-center" square flat style="height: 100%;">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 text">
        <q-parallax src="@/assets/CarouselPic/pic6.jpeg"/>
      </div>
    </section>
    <section id="section05" class="row">
      <div class="col-12">
        <q-parallax src="@/assets/CarouselPic/pic1.jpeg">
        </q-parallax>
      </div>
    </section>
    <section id="section06">
      <div class="container">
        <div class="row">
          <h4 class="col-12 text-center">lorem feg</h4>
          <p class="col-12 text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="row">
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic1.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic2.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic3.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic4.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic5.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic6.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic7.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic8.jpeg">
          </div>
          <div class="pic col-4">
            <img src="@/assets/CarouselPic/pic9.jpeg">
          </div>
        </div>
      </div>
    </section>
    <section id="section07">
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>
