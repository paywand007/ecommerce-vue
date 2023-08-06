<script setup lang="ts">
import {useStore} from "@/plugins/stores/productStore";
import {computed, ref} from "vue";

const store=useStore()
const  items=computed(()=>[
  {
    name: 'EN',
    id: 1,
  },
  {
    name: 'KU ',
    id: 2,
  }
])
interface  Lang{
  name:string,
  id:number
}
const selectedLnag=ref<Lang>({})
</script>

<template>
<div class="nav-bar" >
  <v-app-bar height="fit-content">
    <v-container fluid  >
      <v-row   >
        <v-col class="d-flex " cols="3" >
          <v-img

              width="50"
              height="70"

              src="data:image/png;base64,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"
          ></v-img>

        </v-col>
        <v-col cols="5  ">


                <v-text-field

                    rounded
                    variant="solo"
                    label="Search here"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                      class="py-2 px5 bg-white"

                ></v-text-field>


        </v-col>
        <v-col cols="4">
          <div class="parent d-flex justify-space-between align-center">
            <div class="available text-center align-content-center my-3" style="cursor: pointer">
              <span>  available at 5/5</span>
              <br>
           <strong>   099 88 99 99</strong>
            </div>
            <div class="wishlist d-flex flex-column align-center " style="cursor: pointer" >
              <v-icon size="30" style="cursor: pointer">mdi-heart</v-icon>
              <span>You Liked </span>
            </div>
            <div class="wishlist d-flex flex-column align-center" style="cursor: pointer">
              <v-icon size="30"  >mdi-account</v-icon>
              <span>Sing In </span>
            </div>
            <div class="wishlist d-flex flex-column align-center" style="cursor: pointer">
              <v-badge content="2" location="right top" offset-x="-22" color="red"></v-badge>
              <v-icon size="30"    @click="store.changeDrawer">mdi-cart-outline</v-icon>

              <span>Your Cart</span>
            </div>
            <div class="wishlist d-flex   align-center" style="cursor: pointer ; gap:10px" id="lang-btn">

              <v-icon size="30" >mdi-web</v-icon>
               <v-icon>    mdi-menu-down</v-icon>
<v-menu activator="#lang-btn">
  <v-list  >
    <v-list-item v-for="item in items" :key="item.id" :value="item">
      <v-list-item-title style="cursor: pointer">{{item.name}}</v-list-item-title>
      </v-list-item>

  </v-list>
{{selectedLnag  }}
</v-menu>

            </div>
          </div>
        </v-col>
        <v-col cols="7">
<ul class="links d-flex justify-space-evenly align-self-start text-black   text-center" style="list-style: none;  ">
  <li class="text-h5 font-weight-bold" style="cursor: pointer">Smart Phones</li>
  <li class="text-h5 font-weight-bold" style="cursor: pointer">Laptops</li>
  <li class="text-h5 font-weight-bold" style="cursor: pointer">furnitrue</li>
  <li class="text-h5 font-weight-bold" style="cursor: pointer">Men's</li>
  <li class="text-h5 font-weight-bold" style="cursor: pointer">Bag's</li>
  <li class="text-h5 font-weight-bold" style="cursor: pointer">watch's</li>

</ul>

        </v-col>

      </v-row>
    </v-container>
<!--    <v-app-bar-nav-icon @click="store.changeDrawer"></v-app-bar-nav-icon>-->
  </v-app-bar>
</div>
</template>

<style scoped>

</style>