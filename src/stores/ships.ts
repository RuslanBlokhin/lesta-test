import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { IShip } from '../models/ship.model'
import { getAllShips } from '../api'

export const useShipsStore = defineStore('ships', () => {
  const ships = ref<Array<IShip>>([])
  const filteredShips = ref<Array<IShip>>([])
  // const isLoading = ref<boolean>(false)

  const getShips = computed(() => ships)
  // const getIsLoading = computed(() => ships)

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
  }

  async function fetchAllShips() {
    try {
      // isLoading.value = true
      const data = await getAllShips()
      ships.value = data
      filteredShips.value = data

      return { data, error: null }
    } catch (error) {
      return { data: null, message: getErrorMessage(error) }
    } finally {
      // isLoading.value = false
    }
  }

  function filterData(filter_id: string, filtered_value: string) {
    if (filter_id === '1') filteredShips.value = ships.value.filter(item => String(item.level) === filtered_value)
    if (filter_id === '2') filteredShips.value = ships.value.filter(item => item.nation.title === filtered_value)
    if (filter_id === '3') filteredShips.value = ships.value.filter(item => item.type.title === filtered_value)
  }

  return { filteredShips, getShips, fetchAllShips, filterData }
})
