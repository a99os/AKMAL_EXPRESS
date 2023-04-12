<template>
  <div
    class="w-screen h-screen bg-transparent flex justify-center items-center bg-white"
  >
    <div
      class="w-[96%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
    >
      <div>
        <h1 class="text-[#4763E4] font-bold text-[30px] mb-8 text-center">
          A-EXPRESS
        </h1>
      </div>
      <form action="">
        <div>
          <label class="block w-full mb-1" for="OrderID">Enter Order Id</label>
          <input
            type="text"
            id="OrderID"
            v-model="id"
            placeholder="Enter Order ID :"
            class="w-full block rounded-md border-[#5C73DB] outline-none"
          />
        </div>
        <div class="btn">
          <button
            class="btn w-full bg-[#4763E4] px-2 py-2 flex justify-center items-center text-white rounded-lg mt-4"
            @click="addBtn"
            type="submit"
          >
            Tekshirish
          </button>
          <a
            href="https://t.me/akex2"
            target="_blank"
            class="text-[#5C73DB] block text-center mt-2"
            >muammo bo'yicha ma'lumot</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { toast } from "vue3-toastify";
import axios from "@/Service/axios.js";
import { orderStore } from "@/stores/store.js";
export default {
  name: "UserView",
  data() {
    return {
      id: null,
      data: null,
    };
  },

  methods: {
    async addBtn(e) {
      e.preventDefault();
      if (!this.id) {
        return toast.error("Id kiriting!!!");
      } else {
        if (this.id[0] == "#") {
          this.id = this.id.slice(1);
        }
        const result = await axios.get("/order/" + this.id);
        if (result.data.status == 404) {
          toast.warn("Hech nima topilmadi!!!");
        } else {
          orderStore().data = result.data;
          this.$router.push({ path: "/" + this.id });
        }
      }
    },
  },
};
</script>
<style></style>
