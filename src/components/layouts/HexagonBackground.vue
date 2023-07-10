<template lang="pug">
<ul id="hexagon-container" class="wrap" ref="hexagonContainer" style='--x: 50%; --y:50%'>
  <li v-for="number in numbers" :key="number"></li>
</ul>

</template>

<script>
export default {
  data() {
    return {
      haxogonCountOnePage: 0,
    };
  },

  computed: {
    numbers() {
      return Array.from({ length: this.haxogonCountOnePage - 0 + 1 }, (_, index) => index);
    },
  },

  mounted() {

    const nCol = window.innerWidth / 50;
    const nRow = window.innerHeight / (50 * 1.1547 * 0.866 / 2);
    this.haxogonCountOnePage = nCol * nRow;

    const element = this.$refs.hexagonContainer;
    const mouseOverContainer = document.getElementsByTagName('body')[0];

    const { clientWidth, clientHeight } = document.body;
    const showWidth = clientWidth / 10;
    const showHeight = clientHeight / 10;
    function transformElement(x, y) {
      console.log('clientWidth', clientWidth);
      console.log('clientHeight', clientHeight);

      element.setAttribute('style', `--x: ${x + showWidth}px;--y:${y + showHeight}px`);
    }

    mouseOverContainer.addEventListener('mousemove', e => {
      window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });

    mouseOverContainer.addEventListener('mouseleave', () => {
      window.requestAnimationFrame(function () {
        element.setAttribute('style', '--x: 50%; --y:50%');
      });
    });
  },
};
</script>

<style lang="scss">
body, html {
  width: 100%;
  height: 100%;
  display: flex;
  background: #aaa;
}

:root {
  --s: 50px;  /* size  */
  --m: .6px;    /* margin */
  --f: calc(1.732 * var(--s) + 4 * var(--m)  - 1px);
}

.wrap {
    position: relative;
    margin: auto;
    flex: 0 0 120%;
    transform: translate(-10%, -10%);
    height: 110%;
    width: 111%;
    font-size: 0;

    &::before {
        content: "";
        height: 100%;
        width: calc((var(--s) / 2) + calc(var(--m) / 2));
        shape-outside: repeating-linear-gradient(
            transparent 0,
            transparent 80px,
            #aaa 80px,
            #aaa var(--f)
        );
        float: left;
    }
    
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, #f44336, #ff9800, #ffe607, #09d7c4, #1cbed3, #1d8ae2, #bc24d6);
        z-index: 1;
        mix-blend-mode: darken;
        animation: change 5s infinite linear;
        mask: radial-gradient(circle at var(--x) var(--y), #000 0, #000 50px, transparent 150px, transparent 150px);
    }
}

li {
    position: relative;
    width: 50px;
    height: calc(var(--s) * 1.1547); 
    background: #000;
    flex: 0 0 auto;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin: var(--m);
    margin-bottom: calc(var(--m) - var(--s) * 0.2885); 
    display: inline-block;
    z-index: 2;
}

@keyframes change {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
