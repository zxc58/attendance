<script setup>
import { ref, onMounted } from 'vue'
import { getUnworking } from '../assets/api'
const unworkEmployees = ref(null)
onMounted(async () => {
  try {
    const unworking = await getUnworking()
    unworkEmployees.value = unworking
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <table class="table table-bordered">
    <thead>
      <tr class="table-danger">
        <th scope="col">部門</th>
        <th scope="col">名字</th>
        <th scope="col">電話</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in unworkEmployees" :key="row.id">
        <th scope="row">{{ row.departmentName ?? '無' }}</th>
        <td>{{ row.name }}</td>
        <td>{{ row.phone ?? '無' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
thead th {
  position: sticky;
  top: 0;
}
</style>
