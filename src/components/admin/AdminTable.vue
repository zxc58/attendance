<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['columns', 'data', 'formatFunction'])
const search = ref('')
const formattedData = computed(() =>
  props.formatFunction
    ? props.data
        .filter((e) => new RegExp(search.value).test(e.name))
        .map((e) => props.formatFunction(e))
    : props.data.filter((e) => new RegExp(search.value).test(e.name))
)
</script>

<template>
  <el-table :data="formattedData" height="600">
    <el-table-column
      v-for="column in props.columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.prop"
    />
    <el-table-column>
      <template #header>
        <el-input v-model="search" />
      </template>
      <template #default="scope">
        <slot :lastColumn="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
