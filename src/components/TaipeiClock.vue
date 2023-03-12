<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, onBeforeUnmount } from 'vue'
import store from '../stores'
const { useTimeStore } = store
const timeStore = useTimeStore()
const { setTime } = timeStore
const { formatTime } = storeToRefs(timeStore)
let intervalID
onMounted(() => {
  setTime()
  intervalID = setInterval(setTime, 1000 * 2)
})
onBeforeUnmount(() => {
  clearInterval(intervalID)
})
</script>

<template>
  <div>
    <p class="text-center display-1 py-0 my-0">
      {{ formatTime }}
    </p>
  </div>
</template>

<style scoped>
p::before {
  content: '現在時間:';
  font-size: 1rem;
  position: absolute;
  right: 65%;
}
</style>
