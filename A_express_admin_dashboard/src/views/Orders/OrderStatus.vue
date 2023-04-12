<template>
  <div id="kutiloqdaModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-[#ffffff9c] backdrop-blur-[6px] rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("changewaiting") }}
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="kutiloqdaModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">{{ $t("closem") }}</span>
          </button>
        </div>
        <!-- Modal body -->

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="kutiloqdaModal" type="button" @click="kutilmoqdaBtn"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("yes") }}
          </button>
          <button data-modal-hide="kutiloqdaModal" type="button"
            class="text-gray-500 bg-[#ffffff9c] backdrop-blur-[6px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            {{ $t("no") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="yakunlanganModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-[#ffffff9c] backdrop-blur-[6px] rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("changecomplate") }}
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="yakunlanganModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">{{ $t("closem") }}</span>
          </button>
        </div>
        <!-- Modal body -->

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="yakunlanganModal" type="button" @click="YakunlandiBtn"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("yes") }}
          </button>
          <button data-modal-hide="yakunlanganModal" type="button"
            class="text-gray-500 bg-[#ffffff9c] backdrop-blur-[6px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            {{ $t("no") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="reastartModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto dark:bg-gray-900">
      <!-- Modal content -->
      <div class="relative bg-[#ffffff9c] backdrop-blur-[6px] rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("changerestart") }}
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="reastartModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">{{ $t("closem") }}</span>
          </button>
        </div>
        <!-- Modal body -->

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="reastartModal" @click="restartBtn" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("yes") }}
          </button>
          <button data-modal-hide="reastartModal" type="button"
            class="text-gray-500 bg-[#ffffff9c] backdrop-blur-[6px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            {{ $t("no") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="forceModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-[#ffffff9c] backdrop-blur-[6px] rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("order") }} " {{ comment }} " {{ $t("finished") }}
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="forceModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">{{ $t("closem") }}</span>
          </button>
        </div>
        <!-- Modal body -->

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="forceModal" @click="forceMajor" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Xa
          </button>
          <button data-modal-hide="forceModal" type="button"
            class="text-gray-500 bg-[#ffffff9c] backdrop-blur-[6px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Yo'q
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <h1 class="text-[24px] text-[#000000] dark:text-white">
      {{ $t("statusorder") }}
    </h1>
    <div class="mt-6 mb-8 flex justify-between gap-6">
      <div class="w-[266px] h-12">
        <p class="pb-2">{{ $t("step") }}-1</p>
        <button disabled :class="
          status == 1 ? ' bg-[#8DF8FF]' : ' bg-[#d4d6d6] dark:bg-slate-500'
        "
          class="w-full h-[50px] text-[#13131399] dark:text-white font-bold text-[16px] uppercase leading-6 duration-300 border-[2px] rounded-[3px]">
          {{ $t("new") }}
        </button>
      </div>

      <div class="w-[266px] h-12">
        <p class="pb-2">{{ $t("step") }}-2</p>
        <button :disabled="status != 1" data-modal-target="kutiloqdaModal" data-modal-toggle="kutiloqdaModal" :class="
          status == 2
            ? ' bg-[#8DF8FF]'
            : status != 1
              ? '  bg-[#d4d6d6] dark:bg-slate-500'
              : ' hover:bg-slate-200 dark:hover:bg-slate-500 '
        "
          class="w-full h-[50px] text-[#13131399] dark:text-white font-bold text-[16px] uppercase leading-6 duration-300 border-[2px] rounded-[3px]">
          {{ $t("waiting") }}
        </button>
      </div>

      <div class="w-[266px] h-12">
        <p class="pb-2">{{ $t("step") }}-3</p>
        <button :disabled="status != 2" data-modal-target="yakunlanganModal" data-modal-toggle="yakunlanganModal" :class="
          status == 3
            ? ' bg-[#8DF8FF]'
            : status != 2
              ? '  bg-[#d4d6d6] dark:bg-slate-500'
              : ' hover:bg-slate-200 dark:hover:bg-slate-500 '
        "
          class="w-full h-[50px] text-[#13131399] dark:text-white font-bold text-[16px] uppercase leading-6 duration-300 border-[2px] rounded-[3px]">
          {{ $t("complated") }}
        </button>
      </div>

      <form action="">
        <label for="comment" class="w-[266px] h-[50px]">
          <p class="pb-2">{{ $t("forcemajor") }}</p>
          <input type="text" name="comment" v-model="comment" :disabled="status == 3" id="comment"
            :placeholder="$t('enter_comment')"
            class="w-full focus:outline-none h-[50px] border-[2px] border-gray-300 rounded-[3px] focus:ring-0" />
        </label>
        <button @click="($event) => $event.preventDefault()" class="w-10 bg-red-400 h-10 hidden"
          data-modal-target="forceModal" data-modal-toggle="forceModal"></button>
      </form>

      <div class="w-[266px] h-12">
        <p class="pb-2">{{ $t("restart") }}</p>
        <button :disabled="status == 3" data-modal-target="reastartModal" data-modal-toggle="reastartModal" :class="
          status == 3
            ? ' bg-[#d4d6d6] dark:bg-slate-500'
            : ' hover:bg-slate-200 dark:hover:bg-slate-500 '
        "
          class="w-full h-[50px] font-bold text-[16px] uppercase leading-6 text-[#13131399] dark:text-white duration-300 border-[2px] rounded-[3px]">
          {{ $t("restart") }}
        </button>
      </div>
    </div>
  </div>

  <section class="bg-[#ffffff9c] backdrop-blur-[6px] dark:bg-gray-900 mt-[26px] sm:p-5 ">
    <div class="w-full ">
      <!-- Start coding here -->
      <div class="dark:bg-gray-800 relative sm:rounded-lg overflow-hidden ">
        <div class="overflow-x-auto table_wrapper">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr class="border-b">
                <th scope="col" class="px-4 py-3">{{ $t("ordid") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("addorderdate") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("customername") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("amountprice") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("starterp") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("status") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("izoh") }}</th>
                <th scope="col" class="px-4 py-3">{{ $t("admin") }}</th>
              </tr>
            </thead>
            <tbody v-for="item in operations">
              <tr class="border-b dark:border-gray-700">
                <th scope="row" class="px-4 py-3 font-medium text-sky-500 whitespace-nowrap dark:text-white">
                  {{ order.order_unique_id }}
                </th>
                <td class="px-4 py-3">
                  {{ time(item.createdAt) }}
                </td>
                <td class="px-4 py-3">{{ order.full_name }}</td>
                <td class="px-4 py-3">{{ order.summa }}</td>
                <td class="px-4 py-3">{{ order.first_summa }}</td>
                <td class="px-4 py-3">
                  {{
                    item.status_id == 1
                    ? $t('new')
                    : item.status_id == 2
                      ? $t('waiting')
                      : item.status_id == 3
                        ? $t('complated')
                        : null
                  }}
                </td>
                <td class="px-4 py-3">{{ item.description }}</td>
                <td class="px-4 py-3">{{ item.admin.full_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <button @click="() => $router.push({ path: '/orders' })"
    class="text-white w-[122px] h-[50px] mt-10 rounded-lg bg-[#176DFF]">
    {{ $t("orqaga") }}
  </button>
</template>
<script>
import { toast } from "vue3-toastify";
import { initFlowbite } from "flowbite";
import axios from "@/Service/axios";
export default {
  data() {
    return {
      operations: null,
      status: null,
      order: null,
      comment: null,
    };
  },
  methods: {
    async getOrder() {
      try {
        const order = await axios.get("/order/" + this.$route.params.id);
        this.order = order.data;
        this.operations = order.data.operation;
        this.status = this.operations.length;
      } catch (error) {
        console.log(error);
      }
    },
    time(date) {
      var result = new Date(date);
      // result.setHours(result.getHours() + 5);

      return `${result.toLocaleDateString()}-${result.toTimeString().split(" ")[0]
        } `;
    },

    async kutilmoqdaBtn() {
      try {
        const operation = await axios.post("/operation", {
          order_id: this.order.id,
          status_id: 2,
          operation_date: new Date(),
          description: "waiting order",
        });
        this.getOrder();
        toast.success(localStorage.getItem('lang') == 'uz' ? "Kutilmoqda statusiga o'tkazildi" : "Переведено в статус ожидания", {
          autoClose: 3000,
        });
      } catch (error) { }
    },
    async YakunlandiBtn() {
      try {
        const operation = await axios.post("/operation", {
          order_id: this.order.id,
          status_id: 3,
          operation_date: new Date(),
          description: "ending order",
        });
        this.getOrder();
        toast.success(localStorage.getItem('lang') == 'uz' ? "Yakunlandi statusiga o'tkazildi" : "Переключено на завершено", {
          autoClose: 3000,
        });
      } catch (error) { }
    },

    async forceMajor() {
      if (this.comment) {
        if (this.status == 1) {
          await axios.post("/operation", {
            order_id: this.order.id,
            status_id: 2,
            operation_date: new Date(),
            description: this.comment,
          });
        }
        await axios.post("/operation", {
          order_id: this.order.id,
          status_id: 3,
          operation_date: new Date(),
          description: this.comment,
        });
        this.getOrder();
        this.comment = null;
        toast.success(localStorage.getItem('lang') == 'uz' ? "Yakunlandi statusiga o'tkazildi" : "Переключено на завершено", {
          autoClose: 3000,
        });
      } else {
        toast.error(localStorage.getItem('lang') == 'uz' ? "Izoh yozilmagan!" : "Без комментариев!", {
          autoClose: 3000,
        });
      }
    },

    async restartBtn() {
      try {
        this.operations.forEach(async (val) => {
          await axios.delete("/operation/" + val.id);
        });
        const operation = await axios.post("/operation", {
          order_id: this.order.id,
          status_id: 1,
          operation_date: new Date(),
          description: "new order",
        });
        this.getOrder();
        toast.success(localStorage.getItem('lang') == 'uz' ? "Restart qilindi" : "Перезапущен", {
          autoClose: 3000,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getOrder();
    initFlowbite();
  },
};
</script>
<style scoped>
.table_wrapper {
  height: calc(100vh - 500px);
}
</style>
