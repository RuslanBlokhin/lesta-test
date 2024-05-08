<script setup lang="ts">
import { IShip } from '../../models/ship.model'
defineProps<{
  ship: IShip
}>()
</script>

<template>
  <li class="ship-item">
    <div class="ship-item__wrapper">
      <div class="ship-item__image-wrapper">
        <img :src="ship.icons.medium" alt="ship-image" class="ship-item__image" />
      </div>
      <div class="ship-item__info">
        <h3 class="ship-item__info-params-value name">{{ ship.title }}</h3>
        <div class="ship-item__info-row">
          <h4 class="ship-item__info-params-name">Класс:</h4>
          <div class="ship-item__info-params-value">{{ ship.type.title }}</div>
        </div>
        <div class="ship-item__info-row">
          <h4 class="ship-item__info-params-name">Нация:</h4>
          <div class="ship-item__info-params-value">{{ ship.nation.title }}</div>
        </div>
        <div class="ship-item__info-row">
          <h4 class="ship-item__info-params-name">Уровень:</h4>
          <div class="ship-item__info-params-value">{{ ship.level }}</div>
        </div>
      </div>
    </div>
    <div class="ship-item__description">
      <!-- <h4 class="ship-item__description-name">Описание:</h4> -->
      <div class="ship-item__description-value">{{ ship.description }}</div>
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
  gap: 20px;
  border-radius: 10px;
  color: #333;
  text-align: left;
  cursor: pointer;
}
.ship-item__wrapper {
  display: flex;
  column-gap: 10px;
  margin-bottom: 15px;
}
.ship-item__image-wrapper {
  padding: 5px;
  min-width: 150px;
  width: 150px;
  height: 115px;
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
.ship-item__description-value {
  line-height: normal;
}
.ship-item__description-name {
  margin-bottom: 10px;
}
.ship-item__info-params-name {
  min-width: 60px;
}
.ship-item__info-params-value {
  word-break: break-word;
}
.ship-item__info-params-value.name {
  margin-bottom: 10px;
}
@media screen and (min-width: 500px) {
  .ship-item__wrapper {
    column-gap: 20px;
  }
  .ship-item__image-wrapper {
    min-width: 200px;
    width: 200px;
    height: 130px;
  }
  .ship-item__info-row:not(:last-child) {
    margin-bottom: 10px;
  }
  .ship-item__info-params-name {
    min-width: 100px;
  }
  .ship-item__info-params-value.name {
    margin-bottom: 15px;
  }
}
</style>
