
<template>
<div class="catagories">
  <v-container fluid="">
    <h2 class="text-center text-h3 py-8 ma-5 font-weight-bold text-error" >Top Catagories</h2>
    <v-row>
      <v-col cols="2" v-for="(pic,i) in topCats" :key="i" >
        <v-card class="text-center font-weight-bold text-h4" elevation="0">
          <v-hover v-slot="{isHovering,props}">
          <img :src="pic.image" :alt="pic.image"
   :style="` cursor:pointer; border-radius: 5px;transition: 0.5s all ease-in-out;  scale:${isHovering ?   1.05 :1 } `" v-bind="props"/>

          </v-hover>
          <v-card-text  class="text-center font-weight-bold  text-h6">{{pic.title}}</v-card-text>
        </v-card>
      </v-col>


    </v-row>
  </v-container>
</div>


</template>
<script setup lang="ts">
import {ref} from "vue";

const topCats=ref([
  {

    title:'mobile',
    image:'https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263'
  } , {

    title:'laptop',
    image: 'https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209'
  },  {

    title:'tv',
    image:' https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137'
  } , {

    title:'pc',
    image:'https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840'
  },{

    title:'audio & videon ',
    image:' https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791'
  },{

    title:'gaming category ',
    image:' https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635'
  },{

    title:'home appliances ',
    image:'  https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882'
  },{

    title:'kitchen  ',
    image:' https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410 '
  },{

    title:'cameras  ',
    image:'https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515 '
  },{

    title:'consume  ',
    image:' https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964'
  },{

    title:'smart  ',
    image:' https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828'
  },{

    title:'accessories ',
    image:'  https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367'
  }
])
</script>

<style scoped>

</style>