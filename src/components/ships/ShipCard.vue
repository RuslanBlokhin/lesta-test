<script setup lang="ts">
import { IShip } from '../../models/ship.model'
const props = defineProps<{
  ship: IShip
}>()
console.log(props.ship)
</script>

<template>
  <li class="ship-item">
    <div class="ship-item__image-wrapper">
      <img :src="ship.icons.medium" alt="ship-image" class="ship-item__image" />
    </div>
    <div class="ship-item__info">
      <h3 class="ship-item__info-params-value name">{{ ship.name }}</h3>

      <div class="ship-item__info-row">
        <h4 class="ship-item__info-params-name">Класс:</h4>
        <div class="ship-item__info-params-value">{{ ship.type.name }}</div>
      </div>
      <div class="ship-item__info-row">
        <h4 class="ship-item__info-params-name">Нация:</h4>
        <div class="ship-item__info-params-value">{{ ship.nation.name }}</div>
      </div>
      <div class="ship-item__info-row">
        <h4 class="ship-item__info-params-name">Уровень:</h4>
        <div class="ship-item__info-params-value">{{ ship.level }}</div>
      </div>
      <!-- <div class="ship-item__info-row">
        <h4 class="ship-item__info-params-name">Описание:</h4>
        <div class="ship-item__info-params-value">{{ ship.description }}</div>
      </div> -->
    </div>
  </li>
</template>

<style>
.ship-item {
  padding: 10px;
  z-index: 2;
  background-color: #ececec;
  background-image: url('../../assets/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  color: #333;
  text-align: left;
  cursor: pointer;
}
.ship-item__image-wrapper {
  padding: 5px;
  min-width: 200px;
  width: 200px;
  height: 130px;
  border-radius: 10px;
  box-shadow: 0 0 4px -2px;
  background-color: white;
  transition: scale 100ms ease-in;
}
.ship-item:hover .ship-item__image-wrapper {
  scale: 1.05;
}
.ship-item__image {
  border-radius: 10px;
}
.ship-item__info {
  padding-top: 10px;
}
.ship-item__info-row {
  display: flex;
  align-items: baseline;
}
.ship-item__info-row:not(:last-child) {
  margin-bottom: 5px;
}
.ship-item__info-params-name {
  min-width: 100px;
}
.ship-item__info-params-value {
  word-break: break-word;
}
</style>
