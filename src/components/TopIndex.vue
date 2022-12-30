<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
import { useAttendanceStore } from '../stores/attendance'
import { reactive } from 'vue'
const router = useRouter()
const navItem = reactive([
  {
    linkClass: 'nav-link fs-5',
    name: '考勤',
    onclick: () => {
      router.push('/')
    },
  },
  {
    linkClass: 'nav-link fs-5',
    name: '設定',
    onclick: () => {
      router.push('/setting')
    },
  },
])
const [userStore, attendanceStore] = [useUserStore(), useAttendanceStore()]
const { user } = storeToRefs(userStore)
const logOut = () => {
  userStore.$patch({ user: null })
  attendanceStore.$patch({ todaysAttendance: null, recentAttendances: [] })
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand fs-3 titan-logo">鈦坦科技</span>
      <button
        v-if="user"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#pageList"
        aria-controls="pageList"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="pageList" v-if="user">
        <ul class="navbar-nav me-auto ms-auto">
          <li
            class="nav-item text-center px-1"
            v-for="item in navItem"
            :key="item.name"
          >
            <a :class="item.linkClass" @click="item.onclick"
              >{{ item.name }}
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item text-center logout-btn">
            <a class="nav-link" @click="logOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.titan-logo {
  user-select: none;
}
a {
  cursor: pointer;
}
</style>
