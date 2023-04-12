<template>
  <router-view></router-view>
  <!-- <UserView /> -->
  <!-- <UserResult /> -->
</template>
<script>
import UserView from "./views/UserView.vue";
import UserResult from "./views/UserResult.vue";
export default {
  components: { UserResult, UserView },
  name: "App",
};
</script>
<style scoped></style>
