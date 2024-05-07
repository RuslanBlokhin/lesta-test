import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { IShip } from '../models/ship.model'
import { getAllShips } from '../api'

export const useShipsStore = defineStore('ships', () => {
  const ships = ref<Array<IShip>>([])
  const isLoading = ref<boolean>(false)

  const getShips = computed(() => ships)

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
  }

  async function fetchAllShips() {
    try {
      const data = await getAllShips()
      ships.value = data
      console.log(ships.value.length)

      return { data, error: null }
    } catch (error) {
      return { data: null, message: getErrorMessage(error) }
    }
  }

  return { ships, getShips, isLoading, fetchAllShips }
})
