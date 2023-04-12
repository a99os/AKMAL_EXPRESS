<template lang="">
  <div
    class="sidebar min-w-[230px] py-[55px] h-screen bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-gray-800 dark:text-white"
  >
    <div class="flex h-full justify-between flex-col">
      <div class="flex gap-[65px] flex-col">
        <a
          href="/admin"
          class="cursor-pointer text-[#013CC6] dark:text-[#618df3] text-center font-medium text-[24px] leading-[36px]"
        >
          <h1>A-EXPRESS.UZ</h1>
        </a>
        <ul class="w-full text-[#8f8e8e]">
          <li class="w-full">
            <router-link
              to="/"
              class="border-l-[4px] pl-[40px] border-transparent mt-[13px] items-center w-full flex gap-[17px] py-[13px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                  fill="#0B63F8"
                />
                <path
                  d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                  fill="#0B63F8"
                />
                <path
                  d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                  fill="#0B63F8"
                />
                <path
                  d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                  fill="#0B63F8"
                />
              </svg>

              <p class="font-normal text-[16px] leading-6">
                {{ $t("dashboard") }}
              </p>
            </router-link>
          </li>
          <li class="w-full">
            <router-link
              to="/addstuff"
              class="border-l-[4px] pl-[40px] border-transparent mt-[13px] items-center w-full flex gap-[17px] py-[13px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.73 3.87519L15.73 3.87519V3.88V4.82C15.73 5.58386 15.1139 6.2 14.35 6.2H9.64001C8.87615 6.2 8.26001 5.58386 8.26001 4.82V3.88C8.26001 3.11959 8.88269 2.5 9.65001 2.5H14.35C15.1183 2.5 15.7373 3.11947 15.73 3.87519Z"
                  stroke="black"
                />
                <path
                  d="M14.35 8.21001C16.2161 8.21001 17.74 6.68615 17.74 4.82001C17.74 4.65347 17.9251 4.51922 18.1077 4.61278C19.3589 5.27946 20.21 6.6023 20.21 8.12001V17.53C20.21 19.7139 18.4238 21.5 16.24 21.5H7.75998C5.57612 21.5 3.78998 19.7139 3.78998 17.53V8.12001C3.78998 6.60229 4.64111 5.27945 5.8923 4.61277C6.07484 4.51923 6.25998 4.65348 6.25998 4.82001C6.25998 6.68615 7.78383 8.21001 9.64998 8.21001H14.35ZM11.6935 17.0836L15.6935 13.0836C16.1788 12.5983 16.1788 11.8017 15.6935 11.3165C15.2083 10.8312 14.4117 10.8312 13.9264 11.3165L10.81 14.4329L10.1935 13.8165C9.70827 13.3312 8.91169 13.3312 8.42642 13.8165C7.94116 14.3017 7.94116 15.0983 8.42642 15.5836L9.92642 17.0836C10.1751 17.3323 10.4945 17.45 10.81 17.45C11.1254 17.45 11.4448 17.3323 11.6935 17.0836Z"
                  stroke="black"
                />
              </svg>

              <p class="font-normal text-[16px] leading-6">
                {{ $t("addstuff") }}
              </p>
            </router-link>
          </li>
          <li class="w-full">
            <router-link
              to="/neworder"
              class="border-l-[4px] pl-[40px] border-transparent mt-[13px] items-center w-full flex gap-[17px] py-[13px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74999V2C8.74999 1.59 8.40999 1.25 7.99999 1.25C7.58999 1.25 7.24999 1.59 7.24999 2V3.56C4.54999 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z"
                  stroke="black"
                />
                <path
                  d="M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z"
                  stroke="black"
                />
                <path
                  d="M20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H12.93C13.62 22 14.1 21.33 13.88 20.68C13.68 20.1 13.51 19.46 13.51 19C13.51 15.97 15.98 13.5 19.01 13.5C19.3 13.5 19.59 13.52 19.87 13.57C20.47 13.66 21.01 13.19 21.01 12.59V10.85C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.02 18.39 8.76 18.5 8.5 18.5C8.24 18.5 7.98 18.39 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.49 16.42 8.93 16.51 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.21 14.71C9.16 14.75 9.11 14.79 9.06 14.83C9 14.87 8.94 14.9 8.88 14.92C8.82 14.95 8.76 14.97 8.7 14.98C8.63 14.99 8.56 15 8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.02 13.06 8.37 12.95 8.7 13.02C8.76 13.03 8.82 13.05 8.88 13.08C8.94 13.1 9 13.13 9.06 13.17C9.11 13.21 9.16 13.25 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71ZM12.71 14.71C12.52 14.89 12.26 15 12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.67 12.92 12.34 12.92 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z"
                  stroke="black"
                />
              </svg>

              <p class="font-normal text-[16px] leading-6">
                {{ $t("new-orders") }}
              </p>
            </router-link>
          </li>
          <li class="w-full">
            <router-link
              to="/orders"
              class="border-l-[4px] pl-[40px] border-transparent mt-[13px] items-center w-full flex gap-[17px] py-[13px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.96 8.96001C19.29 8.22001 18.28 7.79001 16.88 7.64001V6.88001C16.88 5.51001 16.3 4.19001 15.28 3.27001C14.25 2.33001 12.91 1.89001 11.52 2.02001C9.12999 2.25001 7.11999 4.56001 7.11999 7.06001V7.64001C5.71999 7.79001 4.70999 8.22001 4.03999 8.96001C3.06999 10.04 3.09999 11.48 3.20999 12.48L3.90999 18.05C4.11999 20 4.90999 22 9.20999 22H14.79C19.09 22 19.88 20 20.09 18.06L20.79 12.47C20.9 11.48 20.93 10.04 19.96 8.96001ZM11.66 3.41001C12.66 3.32001 13.61 3.63001 14.35 4.30001C15.08 4.96001 15.49 5.90001 15.49 6.88001V7.58001H8.50999V7.06001C8.50999 5.28001 9.97999 3.57001 11.66 3.41001ZM12 18.58C9.90999 18.58 8.20999 16.88 8.20999 14.79C8.20999 12.7 9.90999 11 12 11C14.09 11 15.79 12.7 15.79 14.79C15.79 16.88 14.09 18.58 12 18.58Z"
                  stroke="black"
                />
                <path
                  d="M11.43 16.64C11.24 16.64 11.05 16.57 10.9 16.42L9.91 15.43C9.62 15.14 9.62 14.66 9.91 14.37C10.2 14.08 10.68 14.08 10.97 14.37L11.45 14.85L13.05 13.37C13.35 13.09 13.83 13.11 14.11 13.41C14.39 13.71 14.37 14.19 14.07 14.47L11.94 16.44C11.79 16.57 11.61 16.64 11.43 16.64Z"
                  stroke="black"
                />
              </svg>

              <p class="font-normal text-[16px] leading-6">
                {{ $t("orders") }}
              </p>
            </router-link>
          </li>
          <li class="w-full">
            <button
              @click="clickDrop"
              class="btn border-l-[4px] pl-[40px] border-transparent mt-[13px] items-center w-full flex gap-[17px] py-[13px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
                  stroke="black"
                />
              </svg>

              <p class="btn dropSet font-normal text-[16px] leading-6">
                {{ $t("settings") }}
              </p>
            </button>
            <div class="set h-12 flex-grow group relative">
              <div
                @click="setHidden"
                id="dropSettings"
                class="absolute hidden z-30 w-[180px] border-[2px] ml-[35px] flex-col p-1 rounded-xl dark:bg-slate-900 dark:text-white dark:border-slate-500 bg-[#ffffff9c] backdrop-blur-[6px] items-start focus:outline-none focus:ring-0"
              >
                <button
                  @click="clickLang"
                  class="w-[170px] h-[40px] hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl"
                >
                  {{ $t("lenguage") }}
                </button>
                <select
                  name="lang"
                  id="lang"
                  @change="switchLang"
                  class="hidden ml-2 btn rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-gray-900 dark:text-white"
                  v-model="select"
                >
                  <option class="" value="">{{ $t("tilnitanlash") }}</option>
                  <option class=" " value="uz">🇺🇿 {{ $t("uz") }}</option>
                  <option class=" " value="ru">🇷🇺 {{ $t("ru") }}</option>
                </select>
                <button
                  @click="clickMode"
                  class="w-[170px] h-[40px] hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl"
                >
                  {{ $t("window") }}
                </button>

                <div class="ml-[35px] hidden" id="checkbox">
                  <input
                    type="checkbox"
                    id="switch-button"
                    class="dark-mode hidden"
                    @click="toggleDark()"
                  />
                  <label
                    for="switch-button"
                    class="darklabel w-[90px] h-[35px] block bg-slate-400 rounded-[30px] cursor-pointer text-orange-500-shadow"
                  >
                    <i
                      class="sun bx bxs-sun text-orange-400 text-[35px] translate-x-[50px] transition-[.3s]"
                    ></i>
                    <i
                      class="moon bx bxs-moon text-slate-700 text-[35px] translate-x-[-10px] opacity-0 transition-[.3s] ml-[-5px] text-white-shadow"
                    ></i>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a
        class="pl-[40px] flex gap-[18.25px] cursor-pointer text-[#8f8e8e]"
        href="https://t.me/akex2"
        target="_blank"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0001 2.24997C10.0718 2.24997 8.1867 2.8218 6.58332 3.89314C4.97994 4.96448 3.73026 6.48723 2.9923 8.26881C2.25435 10.0504 2.06126 12.0108 2.43747 13.9021C2.81368 15.7934 3.74227 17.5307 5.10584 18.8943C6.4694 20.2578 8.20668 21.1864 10.098 21.5626C11.9893 21.9388 13.9497 21.7457 15.7313 21.0078C17.5129 20.2698 19.0356 19.0202 20.107 17.4168C21.1783 15.8134 21.7501 13.9283 21.7501 12C21.7472 9.41501 20.719 6.93676 18.8912 5.10891C17.0633 3.28106 14.5851 2.2529 12.0001 2.24997V2.24997ZM12.0002 18C11.7777 18 11.5602 17.934 11.3752 17.8104C11.1902 17.6868 11.046 17.5111 10.9608 17.3055C10.8757 17.1 10.8534 16.8738 10.8968 16.6555C10.9402 16.4373 11.0473 16.2368 11.2047 16.0795C11.362 15.9222 11.5625 15.815 11.7807 15.7716C11.9989 15.7282 12.2251 15.7505 12.4307 15.8356C12.6363 15.9208 12.812 16.065 12.9356 16.25C13.0592 16.435 13.1252 16.6525 13.1252 16.875C13.1252 17.1734 13.0067 17.4595 12.7957 17.6705C12.5847 17.8815 12.2985 18 12.0002 18ZM12.7501 13.4165V13.5004C12.7501 13.6993 12.6711 13.8901 12.5305 14.0308C12.3898 14.1714 12.199 14.2504 12.0001 14.2504C11.8012 14.2504 11.6105 14.1714 11.4698 14.0308C11.3291 13.8901 11.2501 13.6993 11.2501 13.5004V12.7504C11.2501 12.5515 11.3292 12.3608 11.4698 12.2201C11.6105 12.0795 11.8012 12.0004 12.0001 12.0004C12.371 12.0004 12.7335 11.8905 13.0418 11.6844C13.3502 11.4784 13.5905 11.1856 13.7324 10.843C13.8743 10.5003 13.9115 10.1233 13.8391 9.75963C13.7668 9.39592 13.5882 9.06183 13.326 8.7996C13.0637 8.53738 12.7296 8.3588 12.3659 8.28645C12.0022 8.21411 11.6252 8.25124 11.2826 8.39315C10.94 8.53507 10.6472 8.77539 10.4411 9.08373C10.2351 9.39208 10.1251 9.75459 10.1251 10.1254C10.1251 10.3243 10.0461 10.5151 9.90546 10.6558C9.76481 10.7964 9.57404 10.8754 9.37513 10.8754C9.17622 10.8754 8.98545 10.7964 8.8448 10.6558C8.70415 10.5151 8.62513 10.3243 8.62513 10.1254C8.62521 9.49011 8.80462 8.86771 9.14271 8.32982C9.4808 7.79193 9.96385 7.36039 10.5363 7.08484C11.1088 6.80928 11.7474 6.7009 12.3787 6.77216C13.01 6.84341 13.6084 7.09141 14.105 7.48764C14.6016 7.88386 14.9763 8.41221 15.186 9.01193C15.3957 9.61165 15.4318 10.2584 15.2903 10.8777C15.1488 11.4971 14.8353 12.0639 14.3859 12.513C13.9366 12.9621 13.3696 13.2753 12.7501 13.4165Z"
            stroke="black"
          />
        </svg>
        <p class="font-normal text-[16px] leading-6">{{ $t("yordam") }}</p>
      </a>
    </div>
  </div>
</template>
<script>
import { initFlowbite } from "flowbite";
import { loginStore } from "@/stores/Login/login.js";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

export default {
  name: "Sidebar",
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });
    const select = ref("");
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const switchLang = () => {
      locale.value = select.value;
      localStorage.setItem("lang", select.value);
    };
    const checked = true;
    return {
      t,
      locale,
      select,
      switchLang,
      checked,
      toggleDark,
      isDark,
    };
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    exitBtn() {
      localStorage.clear();
      loginStore().isLogin = false;
    },

    clickDrop() {
      const el = document.querySelector("#dropSettings");
      const btn = document.querySelector(".btn");
      if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
        btn.classList.add("router-link-active");
        setTimeout();
      } else {
        el.classList.add("hidden");
        btn.classList.remove("router-link-active");
      }
    },

    clickLang() {
      const lang = document.querySelector("#lang");
      if (lang.classList.contains("hidden")) {
        lang.classList.remove("hidden");
      } else {
        lang.classList.add("hidden");
      }
    },

    clickMode(event) {
      const mode = document.querySelector("#checkbox");
      if (mode.classList.contains("hidden")) {
        mode.classList.remove("hidden");
      } else {
        mode.classList.add("hidden");
      }
    },

    setHidden() {
    },
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("btn")) {
        const btn = document.querySelector(".btn");
        btn.classList.remove("router-link-active");
      }
    });
  },
};
</script>
<style scoped>
svg path {
  stroke: #8f8e8e;
  fill: transparent;
}

.router-link-active p {
  color: #0b63f8;
}

.router-link-active svg path {
  fill: #0b63f8;
  stroke: transparent;
}

.router-link-active {
  border-color: #0b63f8;
}

.router-link-active .fill {
  stroke: #ff9e1b;
  fill: none;
}

.darklabel {
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
}

#switch-button:checked~label>.bxs-sun {
  opacity: 0;
  transform: translateX(0px);
}

#switch-button:checked~label>.bxs-moon {
  opacity: 1;
  transform: translateX(-25px);
}
</style>
