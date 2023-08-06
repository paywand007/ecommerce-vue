
import { defineStore } from 'pinia'
import axios from "axios";
import type {Product} from "@/plugins/types";

export const useStore = defineStore('counter', {
  state: ()  => ({

    drawer: false ,
    item :[] as Product[],
    newitem :[] as Product[],
  }),

  actions: {
    changeDrawer():void {
     this.drawer=!this.drawer;
    },
    async getProducts():Promise<void>   {
      await axios.get('https://dummyjson.com/products').then(res=>  this.item = res.data.products.slice(0,9) )
    },
    async getNewProduct():Promise<void>{
  await axios.get('https://dummyjson.com/products').then((res)=> this.newitem=res.data.products.filter((item)  =>item.category==='laptops'))
}
  },
})