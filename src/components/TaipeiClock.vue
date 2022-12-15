<script setup>
import dayjsTaipei from '../assets/timeHelper'
import { ref } from 'vue'

let time = ref(dayjsTaipei().format('HH:mm'))
const updateTime = () => {
  time.value = dayjsTaipei().format('HH:mm')
}
setInterval(updateTime, 1000 * 60)
</script>
<template>
  <h1 class="text-center display-1">{{ time }}</h1>
</template>
<style scoped>
.clock {
  font-size: 1000%;
}
</style>
