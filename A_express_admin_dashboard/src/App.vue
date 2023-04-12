<template lang="">
  <Layout />
</template>
<script>
import Layout from "./Layout/Layout.vue";
import {useDark, useToggle} from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
export default {
  name: "App",
  components: { Layout },
};
</script>
<style scoped>
</style>
