<script setup>
import router from '../router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
import { reactive } from 'vue'
const navItem = reactive([
  {
    linkClass: 'nav-link',
    name: 'Home',
    onclick: () => {
      router.push('/')
    },
  },
  {
    linkClass: 'nav-link',
    name: 'Setting',
    onclick: () => {
      router.push('/setting')
    },
  },
])
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const logOut = () => {
  localStorage.removeItem('token')
  window.location.assign('/login')
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
            class="nav-item text-center"
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
            <a class="nav-link" @click="logOut">Log out</a>
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
