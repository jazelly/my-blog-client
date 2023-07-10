<template>
    <StarBackground></StarBackground>
    <!-- <the-header title="Jazelly"></the-header>
    <the-resources></the-resources> -->
</template>

<script>
// import TheHeader from './components/layouts/TheHeader.vue';
// import TheResources from './components/learning-resources/TheResources.vue';

import StarBackground from './components/layouts/StarBackground.vue';
export default {
  components: {
    StarBackground,
    // TheHeader,
    // TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

/* .bg-wrapper {
  width: 100%;
  height: 100%;
} */
</style>
