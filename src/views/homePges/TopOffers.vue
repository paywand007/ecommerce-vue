<script setup lang="ts">

</script>

<template>
<div class="top-offers">
  <v-container>
    <v-row>
      <v-col cols="4">
 <v-hover v-slot="{isHovering , props}">
   <div class="parent" v-bind="props">
     <img src="https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            :style="`width:100%; scale:${isHovering} ? 1.2 : 1`"
          alt="img"
      />
   </div>
 </v-hover>

      </v-col>
      <v-col cols="4">
  <v-hover>
    <div class="parent">
      <v-img src="https://images.pexels.com/photos/3593986/pexels-photo-3593986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             class="w-100 rounded"

      ></v-img>
    </div>
  </v-hover>
      </v-col>
      <v-col cols="4">
 <v-hover>
   <div class="parent">
     <v-img src="https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="w-100"
     ></v-img>
   </div>
 </v-hover>
      </v-col>
      <v-col cols="6">
        <img src="@/assets/iphones.webp"
               class="w-100 mr-2"
         />
      </v-col>
      <v-col cols="6">
        <img src="@/assets/laptops.webp"
             class="w-100 ml-2"
        />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<style scoped>

</style>