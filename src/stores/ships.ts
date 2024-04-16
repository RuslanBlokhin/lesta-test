import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IShip } from '../models/ship.model'

export const useShipsStore = defineStore('ships', () => {
  const ships = ref<Array<IShip>>([])

  function setCurrentShips(state: IShip[]) {
    ships.value = state
  }

  return { ships, setCurrentShips }
})
