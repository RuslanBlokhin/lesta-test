<script setup lang="ts">
import BaseFilter from './BaseFilter.vue'
import filtersData from '../../data/filters.data'

console.log(filtersData)
</script>

<template>
  <ul class="filters-list">
    <BaseFilter v-for="f in filtersData" :options="f.options" :name="f.name" :key="f.id" />
  </ul>
</template>

<style>
.filters-list {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
</style>
