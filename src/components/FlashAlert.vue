<script setup>
import { storeToRefs } from 'pinia'
import { useAlertStore } from '../stores/alert'
const alertStore = useAlertStore()
const { alertContent, alertType } = storeToRefs(alertStore)
</script>

<template>
  <el-alert
    :type="alertType"
    :title="alertContent"
    effect="dark"
    center
    :closable="false"
  ></el-alert>
</template>

<style scoped>
@keyframes alert-animation {
  from {
    top: 0px;
  }
  to {
    top: 100px;
  }
}
.el-alert {
  left: 40%;
  position: fixed;
  z-index: 1100;
  width: 20%;
  margin-top: 0px;
  margin-bottom: 1px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  animation-name: alert-animation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
</style>
