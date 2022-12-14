<script setup>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { ref } from 'vue'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Taipei')
let time = ref(dayjs().format('HH:mm'))
const updateTime = () => {
  time.value = dayjs().format('HH:mm')
}
setInterval(updateTime, 1000 * 60)
</script>
<template>
  <h1 class="text-center">{{ time }}</h1>
</template>
<style scoped></style>
