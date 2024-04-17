import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { IShip } from '../models/ship.model'
import { gql, useQuery } from '@urql/vue'

export const useShipsStore = defineStore('ships', () => {
  const ships = ref<Array<IShip>>([])

  const getShips = computed(() => ships)

  async function fetchAllShips() {
    const { data } = await useQuery({
      query: gql`
        {
          vehicles {
            name
            description
            icons {
              large
              medium
            }
            level
            type {
              name
              title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
        }
      `,
    })
    ships.value = data.value
    // console.log(data.value)
  }

  return { ships, getShips, fetchAllShips }
})
