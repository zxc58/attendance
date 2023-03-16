<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, onBeforeUnmount } from 'vue'
import store from '../stores'
const { useTimeStore } = store
const timeStore = useTimeStore()
const { formatTime } = storeToRefs(timeStore)
let intervalID
onMounted(() => {
  timeStore.setTime()
  intervalID = setInterval(timeStore.setTime, 1000 * 2)
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
