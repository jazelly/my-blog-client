<template>
  <div class="scroll-down-indicator"></div>
</template>

<style>
.scroll-down-indicator::before {
  animation: bounce 1s ease infinite;
  bottom: 2rem;
  color: #fff;
  content: '╲╱';
  font-size: 2rem;
  height: 4rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 4rem;
  margin-left: -3rem;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  width: 6rem;
}

@keyframes bounce {
  50% {
    transform: translateY(-50%);
  }
}
</style>