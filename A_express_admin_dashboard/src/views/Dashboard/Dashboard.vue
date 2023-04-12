<template>
  <label for="start_date" class="p-10">
    <p class="pb-2">{{ $t('thirtystatistic') }}</p>
    <VueDatePicker v-model="date1" @update:model-value="onChange" :enable-time-picker="false"
      class="w-[300px] data_picker dark:bg-transparent" />
  </label>
  <Chart :result="result" class="dark:border-white" />
</template>
<script>
import axios from "@/Service/axios";
import Chart from "../../components/Chart/Chart.vue";
import { orderStore } from "../../stores//Order/Order";

export default {
  components: { Chart },
  data() {
    return {
      date1: new Date(),
      result: { days: [], order: [] },
    };
  },
  methods: {
    async onChange() {

      let param = this.date1 ? this.date1 : new Date();
      this.result = await (await axios.post("/order/statistika/" + param)).data;
    },
  },
  async mounted() {
    try {
      let param = this.date1 ? this.date1 : new Date();
      this.result = await (await axios.post("/order/statistika/" + param)).data;
    } catch (error) {
      console.log(error);
    }

    const el = document.querySelector(".dp__pointer")
    el.classList.add("dark:bg-transparent")
    el.classList.add("dark:text-white")
    el.classList.add("py-3")
  },
};
</script>
<style scoped> .data_picker div input {
   padding: 30px !important;
   background-color: aqua !important;
 }

 .dp__pointer {
   padding: 20px;
 }
</style>
