<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { useTimeStore } from '../stores/time'
const timeStore = useTimeStore()
const { setTime } = timeStore
const { formatTime } = storeToRefs(timeStore)
let intervalID
onBeforeMount(() => {
  setTime()
  intervalID = setInterval(() => {
    console.log('interval')
    setTime()
  }, 1000 * 2)
})
onBeforeUnmount(() => {
  clearInterval(intervalID)
})
</script>

<template>
  <div class="text-center display-1">{{ formatTime }}</div>
</template>

<style scoped></style>
