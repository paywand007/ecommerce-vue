<script setup lang="ts">

import {ref} from "vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
import AppNav from "@/components/global/AppNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import TopOffers from "@/views/homePges/TopOffers.vue";

const drawer=ref(false)

</script>

<template>
<div class="layout">

  <v-layout class="position-relative">
<CartDrawer/>

    <v-main  style="padding-top:200px"  >
  <slot></slot>
    </v-main>
<AppNav/>
    <AppFooter/>

  </v-layout>
</div>
</template>

