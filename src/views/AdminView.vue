<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import UnworkEmployeesVue from '../components/admin/UnworkEmployees.vue'
import LockedAccountsVue from '../components/admin/LockedAccounts.vue'
import AbsenteeismEmployeesVue from '../components/admin/AbsenteeismEmployees.vue'
const [router, userStore] = [useRouter(), useUserStore()]

const { isAdmin } = storeToRefs(userStore)
const controller = reactive([false, false, true])

const navChange = (index) => {
  controller.forEach((e, i, a) => {
    if (i === index) {
      a[i] = true
    } else {
      a[i] = false
    }
  })
}
if (!isAdmin.value) {
  router.push('/')
}
</script>

<template>
  <main>
    <div class="container my-container text-center">
      <div
        class="btn-group mb-1"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio0"
          autocomplete="off"
          checked=""
          @click="
            () => {
              navChange(0)
            }
          "
        />
        <label class="btn btn-outline-primary" for="btnradio0">解鎖帳號</label>
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked=""
          @click="
            () => {
              navChange(1)
            }
          "
        />
        <label class="btn btn-outline-primary" for="btnradio1">未到員工</label>
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          checked=""
          @click="
            () => {
              navChange(2)
            }
          "
        />
        <label class="btn btn-outline-primary" for="btnradio2">出勤異常</label>
      </div>
      <br />
      <div class="overflow-auto">
        <LockedAccountsVue v-if="controller[0]" />
        <UnworkEmployeesVue v-if="controller[1]" />
        <AbsenteeismEmployeesVue v-if="controller[2]" />
      </div>
    </div>
  </main>
</template>
<style scoped>
.my-container {
  max-width: 800px;
  margin-top: 1rem;
}
</style>
