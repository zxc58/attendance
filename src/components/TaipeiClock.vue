<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useTimeStore } from '../stores/time'
const timeStore = useTimeStore()
const { initTime } = timeStore
onBeforeMount(() => {
  initTime()
})
const { formatTime } = storeToRefs(timeStore)
</script>

<template>
  <div class="text-center display-1">{{ formatTime }}</div>
</template>

<style scoped></style>
