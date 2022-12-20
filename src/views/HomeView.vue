<script setup>
import { onBeforeMount } from 'vue'
import TopIndex from '../components/TopIndex.vue'
import TaipeiClock from '../components/TaipeiClock.vue'
import PunchBlockVue from '../components/PunchBlock.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const { setUser } = userStore
onBeforeMount(() => {
  setUser()
})

const { user, userName } = storeToRefs(userStore)
</script>

<template>
  <main>
    <div class="container-md">
      <div class="row">
        <TaipeiClock />
      </div>
      <div class="row">
        <div class="col rwd-d-none">
          <img src="../assets/03.jpg" class="img-fluid" />
        </div>
        <PunchBlockVue />
      </div>
    </div>
  </main>
</template>
<style></style>
