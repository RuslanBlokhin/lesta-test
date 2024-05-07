import { IShip } from '../models/ship.model'
import axios from 'axios'

const url = 'https://vortex.korabli.su/api/graphql/glossary/'

export async function getAllShips(): Promise<IShip[]> {
  const { data } = await axios({
    method: 'POST',
    url,
    data: {
      query: `
        query Vehicles($languageCode: String = "ru", $isCatalogue: Boolean = true) {
          vehicles(lang: $languageCode isCatalogue: $isCatalogue) {
            id
            title
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
    },
  })

  return data.data.vehicles
}
