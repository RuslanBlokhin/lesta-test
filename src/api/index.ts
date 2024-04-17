import { IShip } from '../models/ship.model'
import axios from 'axios'

export async function getAllShips(): Promise<IShip[]> {
  const { data } = await axios({
    method: 'POST',
    url: 'https://vortex.korabli.su/api/graphql/glossary/',
    data: {
      query: `
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
    },
  })

  return data.data.vehicles
}
