<script setup lang="ts">

</script>

<template>
<div class="features">
    <v-container>
      <v-row>
        <v-col >
          <div class="parent d-flex justify-space-between" >
            <span ><v-icon size="90">mdi-moped-outline</v-icon>Free shipping & Returns</span>
            <span class="second"><v-icon size="90">mdi-medal</v-icon>Lowest Price</span>
            <span class="second" ><v-icon size="90"  >mdi-star</v-icon>most Sell</span>


          </div>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

<style lang="scss">
.features{
  .second{
    position: relative;
    &::before{
      content: '';
      position: absolute;
      background-color:rgb(69,69,69) ;
      left:-50%;
      top: 50%;
      transform:translateY(-50%);
      width: 2px;
      height: 50%;

    }
  }
}
</style>