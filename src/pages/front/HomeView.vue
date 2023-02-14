<template>
  <q-page id="home-view">
    <section id="section01" class="row">
      <div class="col-12">
        <q-parallax>
          <img src="@/assets/CarouselPic/pic1.jpeg" width="1200" height="1000">
        </q-parallax>
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
        <q-card class="my-card" square flat style="height: 50%;">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
        <q-card class="my-card text-white" square flat style="height: 50%;">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section id="section04" class="row">
      <div class="col-6 text">
        <q-card class="my-card text-white flex flex-center" square flat style="height: 100%;">
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
  </q-page>
</template>

<style lang="scss" scoped>
#section02 {
  background: #e1d0b6;
  .text {
    margin: 150px;
  }
}
#section03 {
  .q-card:nth-child(1) {
    background: #e1d0b6;
  }
  .q-card:nth-child(2) {
    background: #20241a;
  }
}
#section04 {
  background: #20241a;
  .q-card {
    background: #20241a;
  }
  .text {
    margin: 150px 0;
  }
}
</style>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>
