<script setup>
import { ref, onMounted } from 'vue'
import api from '../../assets/api'
import { flash } from '../../assets/helpers/flashHelper'
const lockedAccount = ref([])
onMounted(async () => {
  try {
    const { data } = await api.admin.getLockedAccountAPI()
    lockedAccount.value = data
  } catch (err) {
    flash()
  }
})
const unLockAccount = async (id) => {
  try {
    const { data } = await api.admin.unlockedAPI(id)
    const deleteIndex = lockedAccount.value.findIndex((e) => e.id === data.id)
    lockedAccount.value.splice(deleteIndex, 1)
    flash('success', '成功解鎖')
  } catch (err) {
    flash()
  }
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
