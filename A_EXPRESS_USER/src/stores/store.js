import { defineStore } from "pinia";
export const orderStore = defineStore("order", {
  state: () => {
    return {
      data: null,
    };
  },
});
