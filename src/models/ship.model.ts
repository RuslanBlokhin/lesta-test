type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type T = NumberRange<1, 11>

export interface IShip {
  name: string
  title: string | null
  description: string | null
  icons: {
    small: string
    large: string
    medium: string
  }
  level: T
  type: {
    name: 'destroyer' | 'cruiser' | 'submarine' | 'battleship' | 'aircarrier'
    title: string | null
    icons: {
      default: string
    }
  }
  nation: {
    name: string
    title: string | null
    color: string
    icons: {
      small?: string | null
      medium: string | null
      large: string | null
    }
  }
}
