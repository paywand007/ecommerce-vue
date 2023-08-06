<script setup lang="ts">
import {useStore} from "@/plugins/stores/productStore";

const store= useStore()
</script>

<template>
<div class="app-drawer">
  <v-navigation-drawer   v-model="store.drawer" location="right" >
<h1>Your Items In The Cart</h1>
  </v-navigation-drawer>
</div>
</template>

<style scoped>

</style>