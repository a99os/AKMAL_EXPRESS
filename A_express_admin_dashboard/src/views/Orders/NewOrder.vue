<template>
  <div
    id="addOrderModal"
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
            data-modal-hide="addOrderModal"
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
            data-modal-hide="addOrderModal"
            type="button"
            @click="AddBtn"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ $t("yes") }}
          </button>
          <button
            data-modal-hide="addOrderModal"
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
    <h1 class="text-[24px] dark:text-white text-[#000000]">
      {{ $t("addneworder") }}
    </h1>
    <div class="mt-6 grid grid-cols-3 gap-y-6">
      <div>
        <label for="customername" class="w-[266px] h-12">
          <p class="pb-2">{{ $t("buyurtmachi") }}</p>
          <input
            type="text"
            v-model="full_name"
            name="customername"
            id="customername"
            :placeholder="$t('pcustomer_name')"
            class="max-w-full focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0 w-[90%] p-3"
          />
        </label>
      </div>

      <div>
        <label for="customernumber" class="w-[266px] h-12">
          <p class="pb-2">{{ $t("phonenum") }}</p>
          <input
            type="tel"
            v-model="phone_number"
            name="customernumber"
            id="customernumber"
            :placeholder="$t('pcustomer_pnum')"
            class="max-w-full focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0 w-[90%] p-3"
          />
        </label>
      </div>

      <div>
        <label for="orderlink" class="w-[266px] h-12">
          <p class="pb-2">{{ $t("link") }}</p>
          <input
            type="text"
            name="orderlink"
            v-model="product_link"
            id="orderlink"
            placeholder="https://"
            class="max-w-full focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0 w-[90%] p-3"
          />
        </label>
      </div>

      <div>
        <label for="orderprice" class="w-[266px] h-12">
          <p class="pb-2">{{ $t("pprice") }}</p>
          <input
            type="number"
            name="orderprice"
            id="orderprice"
            v-model="summa"
            :placeholder="$t('product_price')"
            class="max-w-full focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0 w-[90%] p-3"
          />
        </label>
      </div>

      <div>
        <label for="starterprice" class="w-[266px] h-12">
          <p class="pb-2">{{ $t("starterp") }}</p>
          <input
            type="number"
            name="starterprice"
            v-model="first_summa"
            id="starterprice"
            :placeholder="$t('pr_starter_price')"
            class="max-w-full focus:outline-none border-[2px] dark:text-white dark:bg-slate-900 border-gray-300 rounded-md focus:ring-0 w-[90%] p-3"
          />
        </label>
      </div>
      <button
        data-modal-target="addOrderModal"
        data-modal-toggle="addOrderModal"
        class="text-white w-[90%] p-3 mt-[30px] rounded-lg bg-[#176DFF]"
      >
        {{ $t("add") }}
      </button>
    </div>
  </div>

  <section
    class="bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-gray-900 mt-[26px] sm:p-5"
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
            <p class="text-2xl text-blue-600">Ma'lumot mavjud emas !!!</p>
          </div>
          <table
            v-else
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
            >
              <tr class="border-b">
                <th scope="col" class="px-4 py-2">{{ $t("ordid") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("addorderdate") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("customername") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("link") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("amountprice") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("starterp") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("status") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("phonenum") }}</th>
                <th scope="col" class="px-4 py-2">{{ $t("admin") }}</th>
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
                  ) < 30
                    ? 'bg-green-50  dark:bg-green-900'
                    : (new Date(item.createdAt) - new Date()) /
                        (1000 * 60 * 60 * 24) <
                      50
                    ? 'bg-amber-100'
                    : 'bg-red-100 dark:bg-red-900'
                "
                class="border-b dark:border-gray-700"
              >
                <td
                  @click="clickOrder"
                  class="px-4 py-2 cursor-pointer text-[#0B63F8]"
                >
                  #{{ item.order_unique_id }}
                </td>
                <td class="px-4 py-2">
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
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ item.full_name }}
                </th>
                <td class="px-4 py-2">
                  <a
                    class="text-[#0B63F8]"
                    target="_blank"
                    :href="item.product_link"
                    >Havola</a
                  >
                </td>
                <td class="px-4 py-2">{{ item.summa }}</td>
                <td class="px-4 py-2">{{ item.first_summa }}</td>
                <td class="px-4 py-2">
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
                <td class="px-4 py-2">{{ item.phone_number }}</td>
                <td class="px-4 py-2">{{ item.admin.full_name }}</td>
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
import axios from "axios";
import { toast } from "vue3-toastify";
import { initFlowbite } from "flowbite";
import { orderStore } from "../../stores/Order/Order";
import Paginate from "vuejs-paginate-next";
export default {
  components: { Paginate },
  data() {
    return {
      full_name: null,
      phone_number: null,
      product_link: null,
      summa: null,
      first_summa: null,
      store: orderStore(),
      orders: null,
      page: 1,
      pages: null,
    };
  },
  methods: {
    clickOrder(e) {
      return this.$router.push({
        path: "/neworder/" + e.target.textContent.slice(2),
      });
    },
    async clickCallback(pageNum) {
      this.page = pageNum;
      this.store.page = this.page;
      await orderStore().getorder();
      this.orders = orderStore().orders;
      this.pages = this.store.total_pages;
      this.orders = this.store.orders;
      initFlowbite();
    },

    async AddBtn(e) {
      e.preventDefault();
      if (
        !this.summa ||
        !this.first_summa ||
        !this.product_link ||
        !this.phone_number ||
        !this.full_name
      ) {
        return toast.error(
          localStorage.getItem("lang") == "uz"
            ? "atributlar to'liq kiritilmagan"
            : "атрибуты не включены полностью",
          {
            autoClose: 3000,
          }
        );
      }
      const result = await orderStore().addOrder({
        summa: this.summa,
        first_summa: this.first_summa,
        product_link: this.product_link,
        phone_number: this.phone_number,
        full_name: this.full_name,
      });
      if (result) {
        return toast.error(result.data.message, {
          autoClose: 3000,
        });
      } else {
        toast.success(
          localStorage.getItem("lang") == "uz"
            ? "Order muvaffaqiyatli yaratildi"
            : "Заказ успешно создан",
          {
            autoClose: 3000,
          }
        );
        this.summa = null;
        this.first_summa = null;
        this.product_link = null;
        this.phone_number = null;
        this.full_name = null;
        this.page = 1;
        this.store.page = this.page;
        await orderStore().getorder();
        this.orders = orderStore().orders;
        this.pages = this.store.total_pages;
        this.orders = this.store.orders;
      }
    },
  },
  computed: {
    async getemployes() {
      return this.orders;
    },
  },
  async mounted() {
    initFlowbite();
    this.store.page = this.page;

    await orderStore().getorder();
    this.pages = this.store.total_pages;
    this.orders = orderStore().orders;
    this.orders = this.store.orders;
  },
};
</script>
<style lang="css">
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
  height: calc(100vh - 500px);
}
</style>
