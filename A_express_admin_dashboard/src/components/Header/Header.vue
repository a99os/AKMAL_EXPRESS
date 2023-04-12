<template lang="">
  <div
    id="exitModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
  >
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-[#ffffff9c] backdrop-blur-[6px] rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("logout") }}
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="exitModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">{{ $t("closem") }}</span>
          </button>
        </div>
        <!-- Modal body -->

        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="exitModal"
            type="button"
            @click="exitBtn"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ $t("yes") }}
          </button>
          <button
            data-modal-hide="exitModal"
            type="button"
            class="text-gray-500 bg-[#ffffff9c] backdrop-blur-[6px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {{ $t("no") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <header class="flex justify-between pt-[56px] pb-[40px]">
    <div
      class="w-full h-[52px] dark:bg-slate-900 flex justify-between items-center"
    >
      <label
        for="search"
        class="px-[22px] py-4dark:bg-slate-900 dark:border dark:border-white dark:bg-slate-900 flex items-center focus:ring-2 focus:ring-[#013CC6] search h-full w-[655px] bg-[#ffffff9c] backdrop-blur-[6px]"
      >
        <img src="../../assets/icon/search.svg" alt="search" />
        <input
          id="search"
          :placeholder="$t('search')"
          type="search"
          class="flex-grow outline-none focus:ring-0 border-none bg-transparent dark:placeholder:text-slate-600 placeholder:text-[#ADA7A7]"
        />
      </label>
      <div class="flex gap-5 items-center">
        <div
          class="cursor-pointer dark:bg-transparent border relative w-[52px] group hover:bg-[#f8f4e3] h-[52px] bg-[url('@/assets/icon/notification.svg')] bg-[#ffffff9c] backdrop-blur-[6px] rounded-[3px] bg-center bg-no-repeat"
        >
          <div
            class="absolute w-[10px] h-[10px] rounded-full bg-[#FFBC0F] z-10 -top-[5px] -right-[5px]"
          ></div>
        </div>
        <div class="">
          <p class="text-[#013CC6] dark:text-[#618df3] text-lg">
            @{{ getUsername }}
          </p>
          <p>{{ getRole }}</p>
        </div>

        <div
          class="relative cursor-pointer w-[52px] h-[52px] rounded-[3px] bg-[url('@/assets/images/ProfileAvtar.jpg')] bg-center bg-no-repeat"
        >
          <!-- <div
            class="absolute -bottom-28 flex flex-col gap-2 right-0 w-[200px] bg-[#ffffff9c] backdrop-blur-[6px] p-5"
          >
            <p>Log out</p>
          </div> -->
        </div>
        <div
          data-modal-target="exitModal"
          data-modal-toggle="exitModal"
          class="cursor-pointer relative border dark:bg-transparent flex group dark:hover:bg-[#aca99f] hover:bg-[#f8f4e3] justify-center duration-100 items-center w-[52px] h-[52px] bg-[#ffffff9c] backdrop-blur-[6px] rounded-[3px] bg-center bg-no-repeat"
        >
          <i
            class="bx bx-log-out text-2xl dark:text-white font-medium text-[#4d4b4b] duration-100"
          ></i>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { loginStore } from "../../stores/Login/login";
export default {
  name: "Header",
  data() {
    return {
      selected: null,
      isShow: false,
      countries: [
        "Toshkent viloyati",
        "Samarqand viloyati",
        "Andijon viloyati",
        "Buxoro viloyati",
        "Navoiy viloyati",
        "Qoraqolpog’iston Respublikasi",
        "Farg’ona viloyati",
        "Namangan viloyati",
        "Surxandaryo viloyati",
        "Xorazm viloyati",
        "Jizzax viloyati",
        "Sirdaryo",
        "Qashqadaryo viloyati",
      ],
    };
  },
  computed: {
    getUsername() {
      return localStorage.getItem("username");
    },
    getRole() {
      return localStorage.getItem("role") == "1" ? "SUPERADMIN" : "ADMIN";
    },
  },
  methods: {
    select(e) {
      if (this.selected == e.target.textContent) {
        this.selected = null;
      } else {
        this.selected = e.target.textContent;
      }
    },
    clickBtn() {
      this.isShow ? (this.isShow = false) : (this.isShow = true);
    },
    exitBtn() {
      localStorage.clear();
      window.location.replace("/");
      loginStore().isLogin = false;
    },
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("selectOption")) {
        this.isShow = false;
      }
    });
  },
};
</script>
<style scoped>
img {
  pointer-events: none;
}

.search {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>
