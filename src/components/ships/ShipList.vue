<script setup lang="ts">
import ShipCard from './ShipCard.vue'
import { onMounted, computed } from 'vue'
import { useShipsStore } from '../../stores/ships'

// const isLoading = ref(false)

const store = useShipsStore()

const ships = computed(() => store.ships)

onMounted(() => {
  store.isLoading = true
  store.fetchAllShips().then(resp => {
    if (resp.error !== null) {
      alert(`Возникла ошибка: ${resp.message}`)
    }
  })
  store.isLoading = false
})
</script>

<template>
  <div class="ships-block">
    <ul v-if="ships" class="ships-list">
      <ShipCard v-for="item in ships" :ship="item" :key="item.id" />
    </ul>
    <!-- <CharDetails /> -->
  </div>
  <div v-if="store.isLoading" class="loader-wrapper">
    <div class="loader"></div>
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
  .ships-list.sidebar-close {
    max-width: 960px;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
  }
}
@media screen and (min-width: 1050px) {
  .ships-list {
    max-width: 1047px;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
  }
}
</style>
