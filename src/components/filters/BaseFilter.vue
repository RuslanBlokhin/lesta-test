<script setup lang="ts">
import { ref } from 'vue'
import { useShipsStore } from '../../stores/ships'

const store = useShipsStore()

const selectedOption = ref('')

defineProps({
  id: String,
  title: String,
  options: Array,
})

const updateSelect = (e: Event) => {
  const evntTarget = e.target as HTMLInputElement
  const evntCurrTarget = e.currentTarget as HTMLInputElement
  selectedOption.value = evntTarget.value

  store.filterData(evntCurrTarget.id, evntTarget.value)
}
</script>

<template>
  <li class="select">
    <label for="" class="select__label">
      <p class="select__title">{{ title }}</p>
      <select @change="updateSelect" class="select__select" :id="id">
        <option class="select__option" :value="title" selected disabled hidden>{{ title }}</option>
        <option class="select__option" v-for="option in options" :value="option">{{ option }}</option>
      </select>
    </label>
  </li>
</template>

<style>
.select__title {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 300;
  color: gray;
  padding-left: 5px;
}
.select__select {
  height: 40px;
  padding: 6px;
  border: none;
  outline: none;
  border-radius: 9px;
  border: 1px solid transparent;
  transition: border-color 0.25s;
  cursor: pointer;
}
.select__select:focus {
  border-color: #646cff;
}
.select option {
  padding: 6px;
}
</style>
