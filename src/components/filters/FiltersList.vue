<script setup lang="ts">
import BaseFilter from './BaseFilter.vue'
import filtersData from '../../data/filters.data'
</script>

<template>
  <h1 hidden>Мир кораблей</h1>
  <ul class="filters-list">
    <BaseFilter v-for="f in filtersData" :options="f.options" :id="f.id" :title="f.title" :key="f.id" />
  </ul>
</template>

<style>
.filters-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
}
</style>
