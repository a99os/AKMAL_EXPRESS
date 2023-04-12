<template>
  <main class="w-screen h-screen flex">
    <div class="w-[25%] h-full section-left hidden md:block"></div>
    <div class="h-full section-right py-8 px-3 md:px-16 w-full">
      <div class="flex">
        <h2 class="text-xl font-bold mr-4">
          ID: #{{ store?.data?.order_unique_id || null }}
        </h2>
        <p class="text-xl font-medium">Buyurtma holati</p>
      </div>
      <div class="flex mt-[200px] w-[85%] mx-auto">
        <!-- 1 -->
        <div class="border-b border-blue-600 w-[25%] relative pb-6">
          <img
            src="../assets/images/box.png"
            alt="Box png"
            class="-translate-x-1/2 w-[30px] md:w-[60px]"
          />
          <div
            class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 md:w-7 md:h-7 w-4 h-4 rounded-full border border-blue-600 bg-blue-600 flex items-center justify-center"
          >
            <i class="bx bx-check md:text-xl text-sm text-white"></i>
          </div>
          <div
            v-if="status > 0"
            class="absolute translate-y-16 md:translate-y-20 -translate-x-4 md:-translate-x-5 w-[60%]"
          >
            <h1 class="text-[80%] md:text-lg">
              Qabul qilingan:
              <p
                class="text-[90%] w-[100px] md:w-[200px] text-red-600 font-bold"
              >
                {{ store.data?.operation[0]?.createdAt?.split("T")[0] }} /
                {{
                  store.data?.operation[0]?.createdAt
                    ?.split("T")[1]
                    .split(":")[0]
                }}:{{
                  store.data?.operation[0]?.createdAt
                    ?.split("T")[1]
                    .split(":")[1]
                }}
              </p>
            </h1>
          </div>
        </div>
        <!-- 2 -->
        <div
          :class="status <= 1 ? 'border-gray-400' : 'border-blue-600 '"
          class="border-b w-[25%] relative pb-2"
        >
          <img
            src="../assets/images/upsam.png"
            alt="Box png"
            :class="status <= 1 ? 'opacity-50' : null"
            class="-translate-x-1/2 w-[30px] md:w-[60px]"
          />
          <div
            :class="
              status <= 1
                ? 'border-blue-600 bg-white'
                : status == 2
                ? 'border-blue-600 bg-blue-600'
                : null
            "
            class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 md:w-7 md:h-7 w-4 h-4 rounded-full border bg-blue-600 flex items-center justify-center"
          >
            <i
              :class="status <= 1 ? 'hidden' : 'block'"
              class="bx bx-check text-sm text-white"
            ></i>
            <i
              :class="status > 1 ? 'hidden' : 'block'"
              class="bx bxs-circle text-blue-600 text-[10px] md:text-sm"
            ></i>
          </div>
          <div
            v-if="status > 1"
            class="absolute translate-y-[70px] md:translate-y-[95px] translate-x-3 md:-translate-x-5 w-[60%]"
          >
            <h1 class="text-[80%] md:text-lg">
              Kutish holatida:
              <p
                class="text-[90%] w-[100px] md:w-[200px] text-red-600 font-bold"
              >
                {{ store.data?.operation[1]?.createdAt?.split("T")[0] }} /
                {{
                  store.data?.operation[1]?.createdAt
                    ?.split("T")[1]
                    .split(":")[0]
                }}:{{
                  store.data?.operation[1]?.createdAt
                    ?.split("T")[1]
                    .split(":")[1]
                }}
              </p>
            </h1>
          </div>
        </div>
        <!-- 3 -->
        <div
          :class="status <= 2 ? 'border-gray-400' : 'border-blue-600 '"
          class="border-b w-[25%] relative pb-6"
        >
          <img
            :class="status <= 2 ? 'opacity-50' : null"
            src="../assets/images/downsam.png"
            alt="Box png"
            class="-translate-x-1/2 w-[30px] md:w-[60px]"
          />
          <div
            :class="
              status <= 1
                ? ' bg-white  border-gray-400'
                : status <= 2
                ? 'border-blue-600 bg-white'
                : status == 3
                ? 'border-blue-600 bg-blue-600'
                : null
            "
            class="absolute bottom-0 border left-0 -translate-x-1/2 translate-y-1/2 md:w-7 md:h-7 w-4 h-4 rounded-full flex items-center justify-center"
          >
            <i
              :class="status <= 2 ? 'hidden' : 'block'"
              class="bx bx-check text-sm text-white"
            ></i>
            <i
              :class="
                status > 2
                  ? 'hidden'
                  : status == 2
                  ? 'text-blue-600'
                  : 'text-gray-400'
              "
              class="bx bxs-circle text-[10px] md:text-sm"
            ></i>
          </div>
          <div
            v-if="status > 2"
            class="absolute translate-y-[67px] md:translate-y-[90px] translate-x-10 md:-translate-x-5 w-[75%]"
          >
            <h1 class="text-[80%] md:text-lg">
              Yakunlangan holatida:
              <p class="text-[90%] md:w-[200px] text-red-600 font-bold">
                {{ store.data?.operation[2]?.createdAt?.split("T")[0] }} /
                {{
                  store.data?.operation[2]?.createdAt
                    ?.split("T")[1]
                    .split(":")[0]
                }}:{{
                  store.data?.operation[2]?.createdAt
                    ?.split("T")[1]
                    .split(":")[1]
                }}
              </p>
            </h1>
          </div>
        </div>
        <!-- 4 -->
        <div
          :class="status <= 2 ? 'border-gray-400' : 'border-blue-600 '"
          class="border-b border-gray-400 w-[25%] relative pb-6 flex items-center"
        >
          <img
            :class="status <= 2 ? 'opacity-50' : null"
            src="../assets/images/car.png"
            alt="Car png"
            class="-translate-x-1/2 w-[50px] md:w-[100px]"
          />
          <i
            :class="status == 3 ? null : 'opacity-50'"
            class="bx bxs-check-circle absolute right-0 translate-x-1/2 text-[30px] md:text-[50px] text-[#13C39C]"
          ></i>
          <div
            :class="
              status == 3
                ? 'border-blue-600 bg-blue-600'
                : ' bg-white  border-gray-400'
            "
            class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 md:w-7 md:h-7 w-4 h-4 rounded-full border flex items-center justify-center"
          >
            <i
              :class="status != 3 ? 'hidden' : 'block'"
              class="bx bx-check text-sm text-white"
            ></i>
            <i
              :class="status == 3 ? 'hidden' : 'block'"
              class="bx bxs-circle text-gray-400 text-[10px] md:text-sm"
            ></i>
          </div>
          <div
            :class="
              status == 3
                ? 'border-blue-600 bg-blue-600'
                : ' bg-white  border-gray-400'
            "
            class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:w-7 md:h-7 w-4 h-4 rounded-full border flex items-center justify-center"
          >
            <i
              :class="status != 3 ? 'hidden' : 'block'"
              class="bx bx-check text-sm text-white"
            ></i>
            <i
              :class="status == 3 ? 'hidden' : 'block'"
              class="bx bxs-circle text-gray-400 text-[10px] md:text-sm"
            ></i>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-36">
        <button
          @click="() => $router.push({ path: '/' })"
          class="text-white md:w-[122px] md:h-[50px] w-[80px] h-[40px] text-sm md:text-lg mt-10 rounded-lg bg-[#176DFF]"
        >
          orqaga
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { orderStore } from "@/stores/store.js";
export default {
  data() {
    return {
      store: orderStore(),
      status: null,
    };
  },
  mounted() {
    this.status = this.store?.data?.operation.length;
    if (!this.store.data) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
.section-left {
  background-image: url("../assets/images/user-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section-right {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
