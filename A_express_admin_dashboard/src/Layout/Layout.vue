<template lang="">
  <template v-if="!isLogin">
    <AdminLogin />
  </template>
  <template v-else>
    <template v-if="role == '1'">
      <SuperAdminView />
    </template>
    <template v-else-if="role == '2'">
      <AdminView />
    </template>
  </template>
</template>
<script>
import { loginStore } from "../stores/Login/login";
import AdminLogin from "../views/AdminLogin.vue";
import AdminView from "../views/AdminView.vue";
import SuperAdminView from "../views/SuperAdmin.vue";
import { isLoginData } from "@/helper/isLogin";
import checkToken from "../helper/checkToken";
export default {
  components: { AdminLogin, AdminView, SuperAdminView },
  name: "Layout",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return loginStore().isLogin;
    },
    role() {
      return loginStore().role;
    },
  },
  async mounted() {
    
  },
};
</script>
<style lang=""></style>
