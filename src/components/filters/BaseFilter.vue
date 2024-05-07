<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref('')

defineProps({
  name: String,
  options: Array,
})

const updateSelect = (e: Event) => {
  selectedOption.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <select @change="updateSelect" class="select">
    <option class="select__option" :value="name" selected disabled hidden>{{ name }}</option>
    <option class="select__option" v-for="option in options" :value="option">{{ option }}</option>
  </select>
</template>

<style>
.select {
  height: 40px;
  padding: 6px;
  border: none;
  outline: none;
  border-radius: 9px;
  border: 1px solid transparent;
  transition: border-color 0.25s;
  cursor: pointer;
}
.select:focus {
  border-color: #646cff;
}
.select option {
  padding: 6px;
}
</style>
