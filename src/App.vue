<script>
import { RouterLink, RouterView } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'

export default {
  components: {
    AppSidebar
  },
}
</script>

<template>
  
  <AppSidebar/>
  <RouterView class="all-content" />

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as *;

.all-content {
  width: 100%;
}

</style>