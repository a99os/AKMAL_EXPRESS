<template lang="">
  <div class="bg-[#F9F9F9] w-screen h-screen flex items-center justify-center">
    <div
      class="mx-auto relative flex items-center justify-center gap-10 h-full"
    >
      <div class="">
        <h1
          class="font-bold leading-9 h-[42px] text-3xl text-[#4763E4] font-['Inter'] ml-32"
        >
          ADMIN DASHBOARD
        </h1>
        <form action="" class="relative py-[40px] flex gap-[23px] flex-col">
          <p class="-mb-3 h-[19px] text-[16px] leading-[19px]">
            Enter username
          </p>
          <input
            type="text"
            v-model="user_name"
            placeholder="Enter username"
            class="border text-[16px] leading-8 font-normal placeholder:text-[#4F4F4F] rounded-[12px] outline-none border-[#5C73DB] px-[20px] h-[51px] w-[520px]"
          />
          <p class="-mb-3 h-[19px] text-[16px] leading-[19px]">
            Enter user password
          </p>
          <input
            type="password"
            placeholder="Enter user password"
            class="border text-[16px] leading-8 font-normal placeholder:text-[#4F4F4F] rounded-[12px] outline-none border-[#5C73DB] px-[20px] h-[51px] w-[520px]"
            v-model="password"
          />
          <button
            @click="loginBtn"
            type="submit"
            v-ripple="'rgba(255, 255, 255, 0.35)'"
            class="button flex justify-evenly items-center py-[15px] bg-[#4763E4] rounded-[12px]"
          >
            <p
              class="uppercase font-normal font-['Inter'] text-[24px] leading-8 text-white"
            >
              Kirish
            </p>
          </button>
          <a class="cursor-pointer" href="https://t.me/akex2" target="_blank">
            <p class="text-[#5C73DB] text-[16px] text-center">
              muammo bo’yicha murojat
            </p>
          </a>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { loginStore } from "../stores/Login/login";
import { toast } from "vue3-toastify";

export default {
  name: "AdminLogin",
  data() {
    return {
      user_name: null,
      password: null,
    };
  },
  methods: {
    async loginBtn(e) {
      e.preventDefault();
      if (!this.user_name || !this.password) {
        return toast.error("Parol yoki username kiritilmagan", {
          autoClose: 3000,
        });
      }
      const result = await loginStore().login(this.user_name, this.password);
      if (result) {
        return toast.error(result.data.message, {
          autoClose: 3000,
        });
      } else {
        window.location.reload();
      }
    },
  },
};
</script>
<style scoped></style>
