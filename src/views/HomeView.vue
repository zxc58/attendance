<script setup>
import PunchBlock from '../components/PunchBlock.vue'
import DataBlock from '../components/DataBlock.vue'
import AttendanceTable from '../components/AttendanceTable.vue'
</script>

<template>
  <el-row>
    <el-col :sm="{ offset: 2, span: 8 }" :lg="{ offset: 4, span: 6 }">
      <DataBlock />
      <PunchBlock />
    </el-col>
    <el-col :sm="{ span: 12, offset: 2 }" :lg="{ span: 11, offset: 2 }">
      <AttendanceTable />
    </el-col>
  </el-row>
</template>
<style></style>
