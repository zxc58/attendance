<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import store from '../stores'
import { removeTokensAndRedirect } from '../assets/helpers/jwtHelper'
const { useUserStore } = store
const buttonCollapse = ref(null)
const router = useRouter()
const [userStore] = [useUserStore()]
const { user, isAdmin } = storeToRefs(userStore)

const navItem = reactive([
  {
    name: '考勤',
    onclick: () => {
      if (window.innerWidth < 768) {
        buttonCollapse.value.click()
      }
      router.push('/')
    },
  },
  {
    name: '設定',
    onclick: () => {
      if (window.innerWidth < 768) {
        buttonCollapse.value.click()
      }
      router.push('/setting')
    },
  },
])
const directToManagement = () => {
  if (window.innerWidth < 768) {
    buttonCollapse.value.click()
  }
  router.push('/admin')
}
const logOut = () => {
  return removeTokensAndRedirect()
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand fs-3 titan-logo">鈦坦科技</span>
      <button
        v-if="user"
        ref="buttonCollapse"
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
            <a class="nav-link fs-5" @click="item.onclick">{{ item.name }} </a>
          </li>
          <li class="nav-item text-center px-1" v-if="isAdmin">
            <a class="nav-link fs-5" @click="directToManagement">管理</a>
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
