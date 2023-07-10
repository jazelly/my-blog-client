<template>
  <div class="starsky-layer1"></div>
  <div class="starsky-layer2"></div>
  <div class="starsky-layer3"></div>
  <div class="starsky-layer4"></div>
  <div class="starsky-layer5"></div>
  <div class="starsky-layer6"></div>
  <div class="starsky-layer7"></div>
  <div class="starsky-layer8"></div>
  <div class="starsky-layer9"></div>
  <div class="starsky-layer10"></div>
  <div class="title">JAZELLY</div>
</template>

<style lang="scss">
body, html {
  width: 100%;
  height: 100%;
  display: flex;
  background: #111;
}

.flashing-animation {
  animation: flashing 2s ease-in-out infinite;
}
@function getShadows($n) {
  $shadows: '#{random(100)}vw #{random(100)}vh #fff';

  @for $i from 2 through $n {
    $shadows: '#{$shadows}, #{random(100)}vw #{random(100)}vh #fff';
  }

  @return unquote($shadows);
}

@function getAnimation($n, $duration) {
  $animation: 'moveUp #{$duration / (11 - $n)} linear infinite';
  @if $n >= 9 {
    $animation: '#{$animation}, flashing 2s ease-in-out infinite';
  }

  @return unquote($animation);
}

  $duration: 400s;
  $count: 400;
  @for $i from 1 through 10 {
    $count: floor($count / 2);
    .starsky-layer#{$i} {
      $size: #{$i / 3}px;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 50%;
      width: $size;
      height: $size;
      box-shadow: getShadows($count);
      animation: getAnimation($i, $duration);
      &::after {
        content : '';
        position: fixed;
        left: 0;
        top: 100vh;
        width: $size;
        height: $size;
        border-radius: inherit;
        box-shadow: inherit;
      }
    }
  }

  @keyframes moveUp {
    100%{
      transform: translateY(-100vh);
    }
  }

  @keyframes flashing {
    0% {
    opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script>

</script>
