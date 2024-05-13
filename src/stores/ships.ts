import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IShip } from '../models/ship.model'
import { getAllShips } from '../api'

export const useShipsStore = defineStore('ships', () => {
  const ships = ref<Array<IShip>>([])
  const filteredShips = ref<Array<IShip>>([])
  const filters = ref({
    level: '',
    nation: '',
    type: '',
  })

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
  }

  async function fetchAllShips() {
    try {
      const data = await getAllShips()
      ships.value = data
      filteredShips.value = data

      return { data, error: null }
    } catch (error) {
      return { data: null, message: getErrorMessage(error) }
    } finally {
    }
  }

  function filterData(filter_id: string, filtered_value: string) {
    if (filter_id === '1') {
      filters.value.level = filtered_value
      filteredShips.value = ships.value.filter(item => String(item.level) === filtered_value)
    }
    if (filter_id === '2') {
      filters.value.nation = filtered_value
      filteredShips.value = ships.value.filter(item => item.nation.title === filtered_value)
    }
    if (filter_id === '3') {
      filters.value.type = filtered_value
      filteredShips.value = ships.value.filter(item => item.type.title === filtered_value)
    }
  }

  return { filteredShips, filters, fetchAllShips, filterData }
})
