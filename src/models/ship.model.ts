type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type T = NumberRange<1, 11>

export interface IShip {
  id: string
  title: string
  description: string
  icons: {
    small: string
    large: string
    medium: string
  }
  level: T
  type: {
    title: 'Подводная лодка' | 'Эсминец' | 'Крейсер' | 'Линкор' | 'Авианосец'
    icons: {
      default: string
    }
  }
  nation: {
    title:
      | 'Япония'
      | 'США'
      | 'СССР'
      | 'Германия'
      | 'Великобритания'
      | 'Франция'
      | 'Пан-Азия'
      | 'Италия'
      | 'Содружество'
      | 'Пан-Америка'
      | 'Европа'
      | 'Нидерланды'
      | 'Испания'
    color: string
    icons: {
      small?: string | null
      medium: string | null
      large: string | null
    }
  }
}
