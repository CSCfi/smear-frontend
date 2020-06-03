import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { RootState } from '../index'
import { TreeNode } from '../../types'

type Variable = {
  tablevariable: string
  title: string
}

type Category = {
  id: string
  name: string
  variables: Variable[]
}

type Station = {
  id: number
  name: string
  categories: Category[]
}

const variablesToTreeData = (variables: Variable[]): TreeNode[] =>
  variables.map((variable) => {
    return {
      key: variable.tablevariable,
      title: variable.title,
      isVariable: true,
    }
  })

const categoriesToTreeData = (categories: Category[]): TreeNode[] =>
  categories.map((category) => {
    return {
      key: category.id,
      title: category.name,
      children: variablesToTreeData(category.variables),
      isVariable: false,
    }
  })

const stationsToTreeData = (stations: Station[]): TreeNode[] =>
  stations.map((station) => {
    return {
      key: String(station.id),
      title: station.name,
      children: categoriesToTreeData(station.categories),
      isVariable: false,
    }
  })

export const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState: [] as Station[],
  reducers: {
    setMenuItems: (state, action: PayloadAction<Station[]>) => action.payload,
  },
})

export const { setMenuItems } = menuItemSlice.actions

const menuItemsSelector = (state: RootState) => state.menuItems

export const treeDataSelector = createSelector(menuItemsSelector, (menuItems) =>
  stationsToTreeData(menuItems)
)

export default menuItemSlice.reducer
