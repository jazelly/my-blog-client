<template>
  <div id="home-1" class="home-section-container">
    <StarBackground />
    <div class="welcome">
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <h1 id="home-title">Welcome to Jazelly's Universe</h1>
      </transition>
    </div>
    <ScrollDownIndicator />
  </div>
  <div id="home-2" class="home-section-container">
    <div class="welcome">
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <h1 id="home-title">Welcome to Jazelly's Universe</h1>
      </transition>
    </div>
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
.home-section-container {
  width: 100%;
  height: 100%;
}

#home-title{
  font-size:3rem;
  color:white;
  font-family: 'Merienda', cursive;
  animation-name:glow;
  animation-duration:1s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}

@keyframes glow{
  from{text-shadow:0px 0px 5px #fff,0px 0px 5px #482fc7;}
  to{text-shadow:0px 0px 20px #fff,0px 0px 20px #3f28b4;}
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