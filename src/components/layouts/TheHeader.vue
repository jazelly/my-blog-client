<template>
  <div class="g-glossy header-container">
    <h1 id="header-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss">
  .header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 5rem;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
  }

  .g-glossy {
    width: 100%;
    height: 5rem;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }

  #header-title{
    color: white;
    margin: 0;
  }
</style>