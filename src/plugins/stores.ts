
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => ({ drawer: false }),

  actions: {
    changeDrawer() {
     this.drawer=!this.drawer;
    },
  },
})