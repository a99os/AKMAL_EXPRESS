<template lang="">
  <div class="flex mx-auto overflow-hidden h-screen px-1">
    <SidebarAdmin />
    <div class="flex-grow overflow-y-auto flex flex-col px-10">
      <Header />
      <router-view class=""></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
import SidebarAdmin from "../components/Sidebar/SidebarAdmin.vue";
export default {
  components: { SidebarAdmin, Header },
  name: "AdminView",
};
</script>
<style lang=""></style>
