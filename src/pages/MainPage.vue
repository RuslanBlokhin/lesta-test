<script setup lang="ts">
import { onMounted } from 'vue'
import { useShipsStore } from '../stores/ships'
const store = useShipsStore()

onMounted(() => {
  store.fetchAllShips()

  console.log(store.getShips)
})
</script>

<template>
  <div></div>
</template>

<style></style>
