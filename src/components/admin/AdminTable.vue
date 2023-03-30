<template>
  <el-table :data="formattedData" height="600">
    <el-table-column
      v-for="column in props.columns"
      :key="column.prop"
      :props="column.prop"
      :label="column.label"
    />
    <el-table-column>
      <template #header>
        <el-input v-model="search" />
      </template>
      <template #default="scope">
        <slot :buttonColumn="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['columns', 'data', 'formatFunction'])
const search = ref('')
const formattedData = computed(() =>
  props.data
    .filter((e) => new RegExp(search.value).test(e))
    .map((e) => props.formatFunction(e))
)
</script>
