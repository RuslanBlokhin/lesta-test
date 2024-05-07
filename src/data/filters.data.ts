import { ISelect } from '../models/filter.model'

const levelfilterData: ISelect = {
  id: 1,
  name: 'Уровень',
  options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
}
const nationfilterData: ISelect = {
  id: 2,
  name: 'Нация',
  options: [
    'Япония',
    'США',
    'СССР',
    'Германия',
    'Великобритания',
    'Франция',
    'Пан-Азия',
    'Италия',
    'Содружество',
    'Пан-Америка',
    'Европа',
    'Нидерланды',
    'Испания',
  ],
}
const classfilterData: ISelect = {
  id: 3,
  name: 'Класс',
  options: ['Подводная лодка', 'Эсминец', 'Крейсер', 'Линкор', 'Авианосец'],
}

export default [levelfilterData, nationfilterData, classfilterData]
