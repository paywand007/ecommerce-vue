<template>
  <div class="new-products">
    <v-container fluid="true">  <v-row>
      <v-col cols="9" >
        <Swiper :pagination="{el:'.swiper-pagination' ,clickable:true}"
                :modules="modeles"
                :slides-per-view="3"
                :space-between="20"

                :autoplay="{delay:3000}"
        >
          <SwiperSlide v-for="data in store.newitem" :key="data.id"
          ><v-card elevation="0" class="pb-5">

            <v-hover v-slot="{isHovering,props}">
              <img :src=" shownItem[data.title] ? shownItem[data.title] :  data.thumbnail" :alt="data.title"
                   class="w-75 "
                   :style="`height: 200px; border-radius: 5px; cursor:pointer; transition: 0.5s all ease-in-out; scale:${isHovering ?   1.05 :1 }`" v-bind="props"/>
            </v-hover>
            <v-card-text class="pl-0">{{ data.description.split(" ").length <=10 ? data.description : data.description.split(" ").slice(0,9).join( " ") + "..." }}</v-card-text>
            <v-rating v-model="data.rating"
                      half-increments :readonly="true"
                      color="yellow-darken-3"
                      size="x-sm"
                      density="compact"
            ></v-rating>

            <v-card-text>
              <span class="text-decoration-line-through font-weight-bold ">{{data.price}} $</span> From   <span class="text-red font-weight-bold "> {{data.price - data.price * (data.discountPercentage / 100)}}  </span > $
            </v-card-text>
            <v-btn-toggle v-model="shownItem[data.title] ">
              <v-btn class="d-flex flex-column" v-for="(pic,i) in data.images" :value="pic"   :key="i"
                     :ripple="false"
              >
                <img :src="pic" :alt="pic" width="40" height="30" style="border-radius: 50%">
              </v-btn>
            </v-btn-toggle>
            <div>
              <v-btn size="large" density="compact" class="py-0 px-9 mb-8  text-center  " style="text-transform: none ; border-radius: 30px" variant="outlined">Chose option</v-btn>
            </div>
          </v-card></SwiperSlide>
          <div class="swiper-prev"></div>
          <div class="swiper-next"></div>
          <div class="swiper-pagination"></div>
        </Swiper>
      </v-col>
      <v-col cols="3">
        <img src="../../assets/images/vr-banner.webp" alt="img" style="width: fit-content"/>

      </v-col>
    </v-row></v-container>
  </div>
</template>

<script setup lang="ts">


import {useStore} from "@/plugins/stores/productStore";
import {onMounted, ref} from "vue";
import axios from "axios";
import {Swiper,SwiperSlide} from "vue-awesome-swiper";
import {Pagination  ,Autoplay} from 'swiper'
const store=useStore();

onMounted(()=>{
  store.getNewProduct()


})

const shownItem=ref<string>({})
const modeles=ref([Pagination,Autoplay])

</script>
<style lang="scss">
.product-swiper{
  .swiper-button-next,  .swiper-button-prev {
    &::after{
      width: 40px;
      height: 40px;
      display: flex;
      padding: 0;
      top: 43%;
      justify-content: center;
      align-items:center;
      font-size: 15px;
      border: 2px solid black;
      border-radius: 50%;
      font-weight: 900;
    }
  }

}
</style>s