<template>
  <div id="home-1">
    <StarBackground />
    <div class="welcome">
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <h1>Welcome to Jazelly's Universe</h1>
      </transition>
    </div>
    <ScrollDownIndicator />
  </div>
</template>

<script>
import gsap from 'gsap';
import StarBackground from '../components/layouts/StarBackground';
import ScrollDownIndicator from '../components/ui/ScrollDownIndicator';

export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-60px)';
      el.style.opacity = 0;
    };

    const enter = (el) => {
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
      });
    };

    const afterEnter = () => {
      console.log('123');
    };

    return {beforeEnter, enter, afterEnter};
  },
  components: {
    StarBackground,
    ScrollDownIndicator,
  },
};
</script>

<style>
#home-1 {
  width: 100%;
  height: 100%;
}
.welcome {
  color: #ddd;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>