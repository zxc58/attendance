<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import store from '../stores'
import api from '../utils/api'
import to from 'await-to-js'
import { removeTokens } from '../utils/helpers/jwtHelper'
import { useWindowSize, useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()
const { width } = useWindowSize()
const { useUserStore } = store
const [userStore, router] = [useUserStore(), useRouter()]
const { user, isAdmin } = storeToRefs(userStore)

async function logOut() {
  const [err] = await to(api.user.logout())
  if (err) return
  userStore.$reset()
  removeTokens()
  router.push('/login')
}
const [pathName, baseURL] = [location.value.pathname, import.meta.env.BASE_URL]
const activeIndex = `/${pathName.replace(baseURL, '')}`
</script>

<template>
  <el-menu
    router
    :default-active="activeIndex"
    :ellipsis="false"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <p class="logo" v-if="width >= 768">出勤系統</p>
    <el-menu-item index="/" v-if="user">出勤</el-menu-item>
    <el-menu-item index="/setting" v-if="user">設定</el-menu-item>
    <el-menu-item index="/admin" v-if="isAdmin">管理</el-menu-item>
    <div class="flex-grow"></div>
    <el-button @click="logOut" v-if="user">登出</el-button>
  </el-menu>
</template>
<style scoped>
.logo {
  color: white;
  margin: 0px;
  font-size: 2rem;
  margin-right: 50px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
