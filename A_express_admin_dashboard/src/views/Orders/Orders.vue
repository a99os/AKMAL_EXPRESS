<template>
  <div class="w-full">
    <div class="flex justify-between">
      <h1 class="text-[24px] text-[#000000] dark:text-white">
        {{ $t("orderlist") }}
      </h1>
      <div class="flex gap-x-6">
        <div class="flex items-center flex-col justify-center">
          <h4 class="text-[14px] text-[#000000] dark:text-white">
            0-60 {{ $t("day") }}
          </h4>

          <div class="w-20 h-10 bg-green-50 dark:bg-green-900 shadow-lg"></div>
        </div>
        <div class="flex items-center flex-col justify-center">
          <h4 class="text-[14px] text-[#000000] dark:text-white">
            60-90 {{ $t("day") }}
          </h4>

          <div
            class="w-20 h-10 bg-yellow-100 dark:bg-yellow-900 shadow-lg"
          ></div>
        </div>
        <div class="flex items-center flex-col justify-center">
          <h4 class="text-[14px] text-[#000000] dark:text-white">
            90 {{ $t("days") }}
          </h4>

          <div class="w-28 h-10 bg-red-100 dark:bg-red-900 shadow-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-[22px] py-6 justify-between">
      <div class="w-full">
        <label for="orderer" class="h-12 block flex-grow">
          <p class="pb-2">{{ $t("buyurtmachi") }}</p>
          <input
            type="search"
            name="orderer"
            id="orderer"
            @input="onCHange"
            v-model="store.name"
            :placeholder="$t('pcustomer_name')"
            class="w-full p-3 focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0"
          />
        </label>
      </div>
      <div class="w-full">
        <label for="id" class="h-12 block flex-grow">
          <p class="pb-2">{{ $t("ordid") }}</p>
          <input
            type="search"
            name="id"
            v-model="store.order_id"
            @input="onCHange"
            id="id"
            :placeholder="$t('order_id')"
            class="w-full p-3 focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0"
          />
        </label>
      </div>

      <div class="w-full">
        <label for="start_date" class="h-12 block flex-grow">
          <p class="pb-2">{{ $t("todo") }}</p>
          <VueDatePicker
            v-model="store.datePick"
            @update:model-value="onCHange"
            range
            class="dark:text-white h-10 dark:bg-slate-900 data_pick"
          />
        </label>
      </div>

      <div class="h-12 w-full flex-grow group relative">
        <p class="pb-2 drpStatus">{{ $t("status") }}</p>
        <button
          @click="clickDropBtn"
          class="w-full drpStatus p-3 dark:text-white dark:bg-slate-900 group justify-between bg-[#ffffff9c] backdrop-blur-[6px] flex items-center focus:outline-none border-[2px] border-gray-300 rounded-md focus:ring-0"
        >
          <p
            class="drpStatus"
            :class="!store.order_status ? 'text-slate-500' : null"
          >
            {{
              store.order_status == null
                ? $t("notselected")
                : store.order_status == 1
                ? $t("new")
                : store.order_status == 2
                ? $t("waiting")
                : store.order_status == 3
                ? $t("complated")
                : null
            }}
          </p>
          <i class="drpStatus bx bxs-chevron-down"></i>
        </button>
        <div
          id="dropStatus"
          class="absolute z-20 hidden w-full flex-col p-2 bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-slate-700 items-start focus:outline-none border-[2px] border-gray-300 rounded-md focus:ring-0"
        >
          <p
            @click="SelectStatus"
            class="drop-status cursor-pointer border-b w-full text-start p-1 rounded-[3px] opacity-70 dark:hover:bg-slate-900 hover:bg-slate-100"
          >
            {{ $t("cancel") }}
          </p>
          <p
            id="1"
            @click="SelectStatus"
            class="drop-status cursor-pointer border-b w-full text-start p-1 rounded-[3px] dark:hover:bg-slate-900 hover:bg-slate-100"
          >
            {{ $t("new") }}
          </p>
          <p
            @click="SelectStatus"
            id="2"
            class="drop-status cursor-pointer border-b w-full text-start p-1 rounded-[3px] dark:hover:bg-slate-900 hover:bg-slate-100"
          >
            {{ $t("waiting") }}
          </p>
          <p
            @click="SelectStatus"
            id="3"
            class="drop-status cursor-pointer border-b w-full text-start p-1 rounded-[3px] dark:hover:bg-slate-900 hover:bg-slate-100"
          >
            {{ $t("complated") }}
          </p>
        </div>
      </div>

      <div class="h-12 w-full flex-grow group relative">
        <p class="pb-2">{{ $t("orders") }}</p>
        <button
          @click="myOrder"
          class="w-full p-3 group justify-between text-black hover:bg-slate-200 bg-[#ffffff9c] flex items-center focus:outline-none border-[2px] border-gray-300 rounded-md focus:ring-0"
        >
          {{ $t("allorders") }}
        </button>
      </div>
    </div>
  </div>

  <section
    class="bg-[#ffffff9c] dark:bg-gray-900 dark:text-white mt-[26px] sm:p-5"
  >
    <div class="w-full">
      <!-- Start coding here -->
      <div class="dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
        <div class="overflow-x-auto table_wrapper">
          <div
            v-if="store.orders?.length == 0"
            class="flex gap-5 justify-center px-5 py-3 items-center"
          >
            <i class="bx bxs-data text-2xl text-blue-600"></i>
            <p class="text-2xl text-blue-600 ">Ma'lumot mavjud emas !!!</p>
          </div>
          <table
            v-else
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
            >
              <tr class="border-b">
                <th scope="col" class="px-4 py-3">{{ $t("ordid") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("addorderdate") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("customername") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("link") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("amountprice") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("starterp") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("status") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("phonenum") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("admin") }}</th>
              </tr>
            </thead>
            <tbody
              v-for="(item, index) in orders"
              :key="index"
              class="infobox-item-properties"
            >
              <tr
                :class="
                  Math.ceil(
                    (new Date(item.createdAt) - new Date()) /
                      (1000 * 60 * 60 * 24)
                  ) < 60
                    ? 'bg-green-50  dark:bg-green-900'
                    : (new Date(item.createdAt) - new Date()) /
                        (1000 * 60 * 60 * 24) <
                      90
                    ? 'bg-amber-100'
                    : 'bg-red-100 dark:bg-red-900'
                "
                class="border-b dark:border-gray-700"
              >
                <td
                  @click="clickOrder"
                  class="px-4 py-3 cursor-pointer text-[#0B63F8] dark:text-[#5e91e7]"
                >
                  #{{ item.order_unique_id }}
                </td>
                <td class="px-4 py-3">
                  {{ item.createdAt.split("T")[0] }} /
                  {{
                    5 +
                    +item.createdAt.split("T")[1].split(":")[0] +
                    ":" +
                    item.createdAt.split("T")[1].split(":")[1]
                  }}
                </td>
                <th
                  scope="row"
                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ item.full_name }}
                </th>
                <td class="px-4 py-3">
                  <a
                    class="text-[#0B63F8]"
                    target="_blank"
                    :href="item.product_link"
                    >{{ $t("link") }}</a
                  >
                </td>
                <td class="px-4 py-3">{{ item.summa }}</td>
                <td class="px-4 py-3">{{ item.first_summa }}</td>
                <td class="px-4 py-3">
                  {{
                    item.operation.length == 1
                      ? $t("new")
                      : item.operation.length == 2
                      ? $t("waiting")
                      : item.operation.length == 3
                      ? $t("complated")
                      : null
                  }}
                </td>
                <td class="px-4 py-3">{{ item.phone_number }}</td>
                <td class="px-4 py-3">{{ item.admin.full_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Paginate
          v-if="pages > 1"
          :page-count="store.total_pages"
          :page-range="5"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :initial-page="page"
          v-model="page"
        >
        </Paginate>
      </div>
    </div>
  </section>
</template>
<script>
import { toast } from "vue3-toastify";
import { orderStore } from "../../stores/Order/Order";
import { initFlowbite } from "flowbite";
import axios from "@/Service/axios";
import Paginate from "vuejs-paginate-next";
export default {
  components: { Paginate },
  data() {
    return {
      orders: [],
      date: null,
      page: 1,
      pages: orderStore().total_pages,
      store: orderStore(),
    };
  },
  methods: {
    async clickCallback(pageNum) {
      this.page = pageNum;
      this.store.page = this.page;

      await orderStore().getorder();
      this.orders = orderStore().orders;
      this.pages = this.store.total_pages;
      this.orders = this.orders;
      initFlowbite();
    },
    clickOrder(e) {
      return this.$router.push({
        path: "/orders/" + e.target.textContent.slice(2),
      });
    },

    async myOrder(e) {
      if (e.target.textContent.trim() == "Barchaning buyurtmalari") {
        this.store.admin = true;
        e.target.textContent = "Mening buyurtmalarim";
      } else if (e.target.textContent.trim() == "Заказы у всех") {
        this.store.admin = true;
        e.target.textContent = "Мои заказы";
      } else if (e.target.textContent.trim() == "Mening buyurtmalarim") {
        this.store.admin = false;
        e.target.textContent = "Barchaning buyurtmalari";
      } else if (e.target.textContent.trim() == "Мои заказы") {
        this.store.admin = false;
        e.target.textContent = "Заказы у всех";
      }

      await orderStore().getorder();
      this.orders = orderStore().orders;
      this.pages = this.store.total_pages;

      this.page = 1;
      this.orders = this.orders;
    },

    async SelectStatus(e) {
      console.log(e.target.textContent.trim());
      if (
        e.target.textContent.trim() == "Bekor qilish" ||
        e.target.textContent.trim() == "Oтмена"
      ) {
        this.store.order_status = null;
      } else {
        this.store.order_status = +e.target.id;
      }
      this.page = 1;
      this.store.page = this.page;
      await orderStore().getorder();
      this.orders = orderStore().orders;
      this.pages = this.store.total_pages;
      this.orders = this.orders;
    },

    clickDropBtn() {
      const el = document.querySelector("#dropStatus");
      if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
        el.classList.add("flex");
      } else {
        el.classList.add("hidden");
        el.classList.remove("flex");
      }
    },

    async onCHange() {
      this.page = 1;
      this.store.page = this.page;
      await orderStore().getorder();
      this.orders = orderStore().orders;
      this.pages = this.store.total_pages;

      this.orders = this.orders;
    },
  },
  computed: {
    getPages() {
      return this.pages;
    },
  },
  async mounted() {
    this.store.page = this.page;
    await orderStore().getorder();
    this.orders = orderStore().orders;
    this.pages = this.store.total_pages;

    this.orders = this.orders;
    initFlowbite();

    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("drpStatus")) {
        const el = document.querySelector("#dropStatus");
        if (el) {
          el.classList.add("hidden");
          if (el.classList.contains("flex")) el.classList.remove("flex");
        }
      }
    });
  },
};
</script>
<style lang="css">
.drop-status cursor-pointer:last-child {
  border: none;
}

.page-item:first-child {
  border-radius: 7px 0px 0px 7px !important;
}

.page-item:last-child {
  border-radius: 0px 7px 7px 0px !important;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
}

.page-item:hover {
  background-color: #e8e8e8;
}

.page-item > a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination > .active {
  background-color: #bcb8c4;
  color: #55358c;
}

.table_wrapper {
  height: calc(100vh - 420px);
}

.data_pick input {
  padding: 12px 40px !important;
}
</style>
