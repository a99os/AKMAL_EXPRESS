<template lang="">
  <div class="flex mx-auto overflow-hidden h-screen px-1">
    <Sidebar />
    <div class="flex-grow overflow-y-auto flex flex-col px-10">
      <Header />
      <router-view class=""></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
export default {
  components: { Sidebar, Header },
  name: "SuperAdminView",
};
</script>
<style lang=""></style>
