<template>
  <div class="flash-container"></div>
</template>
<style scoped>
@keyframes flash-alert-animation {
  from {
    top: 0px;
  }
  to {
    top: 100px;
  }
}
.flash {
  margin-top: 0px;
  margin-bottom: 1px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  animation-name: flash-alert-animation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.flash-container {
  position: fixed;
  left: 45%;
  z-index: 1100;
}
</style>
