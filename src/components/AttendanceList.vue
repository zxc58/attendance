<script setup>
import { storeToRefs } from 'pinia'
import { useRecordStore } from '../stores/record'
const recordStore = useRecordStore()
const { recentRecords } = storeToRefs(recordStore)
</script>

<template>
  <table class="table table-hover">
    <tbody>
      <tr class="table-success">
        <th scope="row">Success</th>
        <td>14月1號</td>
        <td>星期三</td>
      </tr>

      <tr class="table-danger">
        <th scope="row">Danger</th>
        <td>14月1號</td>
        <td>星期三</td>
      </tr>

      <tr class="table-info">
        <th scope="row">Info</th>
        <td>14月1號</td>
        <td>星期三</td>
      </tr>
    </tbody>
  </table>
</template>
