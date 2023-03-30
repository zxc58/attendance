<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import store from '../stores'
import UnworkEmployees from '../components/admin/UnworkEmployees.vue'
import LockedAccounts from '../components/admin/LockedAccounts.vue'
import AbsenteeismEmployees from '../components/admin/AbsenteeismEmployees.vue'
const { useUserStore } = store
const [router, userStore] = [useRouter(), useUserStore()]
const { isAdmin } = storeToRefs(userStore)
const controller = reactive([false, false, true])
if (!isAdmin.value) {
  router.push('/')
}

const navChange = (index) => {
  controller.forEach((e, i, a) => {
    if (i === index) {
      a[i] = true
    } else {
      a[i] = false
    }
  })
}
</script>

<template>
  <!-- <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs> -->
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
        <LockedAccounts v-if="controller[0]" />
        <UnworkEmployees v-if="controller[1]" />
        <AbsenteeismEmployees v-if="controller[2]" />
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
