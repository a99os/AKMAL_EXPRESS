import { defineStore } from "pinia";
import axios from "../../Service/axios";
export const orderStore = defineStore("order", {
  state: () => {
    return {
      orders: null,
      name: null,
      order_id: null,
      datePick: null,
      order_status: null,
      page: 1,
      total_pages: 0,
      admin: null,
      chartOrder: { order: [], days: [] },
    };
  },
  getters: {
    getterorder(state) {
      return state.orders;
    },
  },
  actions: {
    async addOrder(data) {
      try {
        const order = await axios.post("/order", data);
        if (order?.status == 400) {
          return order;
        } else if (order?.status == 201) {
          const operation = await axios.post("/operation", {
            order_id: order.data[1][0].id,
            status_id: 1,
            operation_date: new Date(),
            description: "new order",
          });
          this.getorder();
          order;
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getorder() {
      try {
        const result = await axios.post("/order/getAll", {
          full_name: this.name,
          status_id: this.order_status,
          id: this.order_id,
          datePick: this.datePick,
          admin: this.admin,
          page: this.page,
        });
        this.orders = result.data.orders;
        this.total_pages = result.data.pages;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
