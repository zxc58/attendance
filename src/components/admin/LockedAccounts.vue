<script setup>
import { ref, onMounted } from 'vue'
import to from 'await-to-js'
import api from '../../utils/api'
import store from '../../stores'
const lockedAccount = ref([])
const { useAlertStore } = store
const alertStore = useAlertStore()
onMounted(async () => {
  const [, { data }] = to(await api.admin.getLockedAccount())
  if (!data) return alertStore.show()
  lockedAccount.value = data
})
async function unLockAccount(id) {
  const [, { data }] = await to(api.admin.unlocked(id))
  if (!data) return alertStore.show()
  const deleteIndex = lockedAccount.value.findIndex((e) => e.id === data.id)
  lockedAccount.value.splice(deleteIndex, 1)
}
</script>

<template>
  <table class="table table-bordered">
    <thead>
      <tr class="table-danger">
        <th scope="col">帳號</th>
        <th scope="col">名字</th>
        <th scope="col">解鎖</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in lockedAccount" :key="row.id">
        <th scope="row">{{ row.account }}</th>
        <td>{{ row.name }}</td>
        <td>
          <button
            class="my-0 btn btn-sm btn-warning rounded-pill"
            @click="
              () => {
                unLockAccount(row.id)
              }
            "
          >
            解鎖帳號
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
thead th {
  position: sticky;
  top: 0;
}
</style>
