<script setup lang="ts">
import ShipCard from './ShipCard.vue'
import { onMounted, computed, ref } from 'vue'
import { useShipsStore } from '../../stores/ships'

const isLoading = ref(false)

const store = useShipsStore()

const ships = computed(() => store.filteredShips)
// const isLoading = computed(() => store.isLoading)

onMounted(() => {
  isLoading.value = true
  store.fetchAllShips().then(resp => {
    if (resp.error !== null) {
      alert(`Возникла ошибка: ${resp.message}`)
    }
  })
  isLoading.value = false
})
</script>

<template>
  <div class="ships-block">
    <ul v-if="ships" class="ships-list">
      <ShipCard v-for="item in ships" :ship="item" :key="item.id" />
    </ul>
    <div v-if="isLoading" class="loader-wrapper">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style>
.ships-list {
  position: relative;
  max-width: 500px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
}
.ships-block {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.loadmore-btn {
  margin: 20px auto 0;
}
@media screen and (min-width: 768px) {
  .ships-list {
    max-width: 960px;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
  }
}
@media screen and (min-width: 1920px) {
  .ships-list {
    max-width: none;
    grid-template-columns: repeat(3, 32%);
    justify-content: center;
  }
}
</style>
