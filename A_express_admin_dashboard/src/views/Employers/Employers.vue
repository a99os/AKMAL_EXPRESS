<template>
  <div
    id="addStuffModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
  >
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div
        class="relative bg-[#ffffff9c] backdrop-blur-[6px] rounded-lg shadow dark:bg-gray-700"
      >
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("checkedadded") }}
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="addStuffModal"
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
            data-modal-hide="addStuffModal"
            type="button"
            @click="AddBtn"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ $t("yes") }}
          </button>
          <button
            data-modal-hide="addStuffModal"
            type="button"
            class="text-gray-500 bg-[#ffffff9c] backdrop-blur-[6px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {{ $t("no") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <h1 class="text-[24px] text-[#000000] dark:text-white">
      {{ $t("addstuff") }}
    </h1>
    <form action="#" class="">
      <div class="mt-6 flex gap-5 items-center justify-between">
        <div class="w-full">
          <label for="fullname" class="flex-grow h-12 block w-full">
            <p class="pb-2">{{ $t("fullname") }}</p>
            <input
              type="text"
              name="fullname"
              v-model="full_name"
              autocomplete="off"
              id="fullname"
              :placeholder="$t('paddadminname')"
              class="w-full p-3 focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0"
            />
          </label>
        </div>

        <div class="w-full">
          <label for="username" class="flex-grow h-12 block w-full">
            <p class="pb-2">{{ $t("username") }}</p>
            <input
              type="text"
              v-model="user_name"
              autocomplete="off"
              name="username"
              id="username"
              :placeholder="$t('paddadminusername')"
              class="w-full p-3 focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0"
            />
          </label>
        </div>

        <div class="w-full">
          <label for="adminpass" class="flex-grow h-12 block w-full">
            <p class="pb-2">{{ $t("password") }}</p>
            <input
              type="password"
              name="adminpass"
              autocomplete="off"
              v-model="password"
              id="adminpass"
              placeholder="********"
              class="w-full p-3 focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0"
            />
          </label>
        </div>
        <div
          class="w-full flex items-end justify-end h-[50px] translate-y-[18px] mt-7"
        >
          <button
            data-modal-target="addStuffModal"
            data-modal-toggle="addStuffModal"
            type="submit"
            @click="($event) => $event.preventDefault()"
            class="text-white rounded-lg w-full h-full bg-[#176DFF]"
          >
            {{ $t("add") }}
          </button>
        </div>
      </div>
    </form>
  </div>

  <section
    class="bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-gray-900 mt-[26px] sm:p-5"
  >
    <div class="w-full">
      <!-- Start coding here -->
      <div
        class="bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-gray-800 relative sm:rounded-lg overflow-hidden"
      >
        <div class="overflow-x-auto table_wrapper">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-gray-700 dark:text-gray-400"
            >
              <tr class="border-b">
                <th scope="col" class="px-4 py-3">{{ $t("fullname") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("adddate") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("username") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("status") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("role") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("ordercount") }}</th>
              </tr>
            </thead>
            <tbody v-for="item in emp" :key="item.id">
              <tr class="border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ item.full_name }}
                </th>
                <th class="px-4 py-3">
                  {{ item.createdAt.split("T")[0] }} /
                  {{
                    5 +
                    +item.createdAt.split("T")[1].split(":")[0] +
                    ":" +
                    item.createdAt.split("T")[1].split(":")[1]
                  }}
                </th>
                <td class="px-4 py-3">{{ item.user_name }}</td>
                <td class="px-4 py-3">
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      :id="item.id"
                      @click="toogleBtn"
                      type="checkbox"
                      :disabled="item.is_creator ? true : false"
                      :checked="item.is_active"
                      name=""
                      class="sr-only peer"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#ffffff9c] backdrop-blur-[6px] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{ item.is_active ? "active" : "deactive" }}</span
                    >
                  </label>
                </td>
                <td class="px-4 py-3">
                  {{ item.is_creator ? "SUPERADMIN" : "ADMIN" }}
                </td>
                <td class="px-4 py-3">
                  {{ item.orders.length }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import { initFlowbite } from "flowbite";
import { toast } from "vue3-toastify";
import { employeStore } from "../../stores/Employe/employe";
export default {
  data() {
    return {
      full_name: null,
      password: null,
      user_name: null,
      emp: null,
    };
  },
  methods: {
    async toogleBtn(e) {
      const result = await axios.put("/admin/toggle/" + e.target.id);
      if (result.data === 1) {
        toast.success(
          localStorage.getItem("lang") == "uz"
            ? "Super adminni deaktiv qilib bo'lmaydi"
            : "Super adminni deaktiv qilib bo'lmaydi",
          {
            autoClose: 3000,
          }
        );
      } else if (result.data) {
        toast.success(
          localStorage.getItem("lang") == "uz"
            ? "Admin muvaffaqiyatli aktivlashtirildi"
            : "Администратор успешно активирован",
          {
            autoClose: 3000,
          }
        );
      } else {
        toast.warn(
          localStorage.getItem("lang") == "uz"
            ? "Admin muvaffaqiyatli deaktivatsiya qilindi"
            : "Администратор успешно деактивирован",
          {
            autoClose: 3000,
          }
        );
      }
      await employeStore().getEmployes();
      this.emp = employeStore().employes;
    },
    async AddBtn(e) {
      e.preventDefault();
      if (!this.user_name || !this.password || !this.full_name) {
        if (localStorage.getItem("lang") == "uz") {
          return toast.error("Parol, fullname yoki username kiritilmagan", {
            autoClose: 3000,
          });
        } else {
          return toast.error(
            "Не введен ни пароль, ни полное имя, ни имя пользователя",
            {
              autoClose: 3000,
            }
          );
        }
      }
      const result = await employeStore().addEmploye(
        this.full_name,
        this.user_name,
        this.password
      );
      if (result) {
        return toast.error(result.data.message, {
          autoClose: 3000,
        });
      } else {
        if (localStorage.getItem("lang") == "uz") {
          toast.success("Admin muvaffaqiyatli yaratildi", {
            autoClose: 3000,
          });
        } else {
          toast.success("Администратор успешно создан", {
            autoClose: 3000,
          });
        }
        this.full_name = null;
        this.user_name = null;
        this.password = null;
        await employeStore().getEmployes();
        this.emp = employeStore().employes;
      }
    },
  },
  computed: {
    async getemployes() {
      return this.emp;
    },
  },
  async mounted() {
    initFlowbite();

    await employeStore().getEmployes();
    this.emp = employeStore().employes;
  },
};
</script>
<style scoped>
.table_wrapper {
  min-height: calc(100vh - 400px);
}
</style>
