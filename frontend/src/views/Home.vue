<template>
  <splash-header />
</template>

<script lang="ts">
  import Vue from 'vue'
  import SplashHeader from "@/components/SplashHeader.vue";

  export default Vue.extend({
    name: 'Home',

    components: {
      SplashHeader,
    },
  })
</script>
