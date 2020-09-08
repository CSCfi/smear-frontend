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
      checkable: true,
      isLeaf: true,
    }
  })

const categoriesToTreeData = (categories: Category[]): TreeNode[] =>
  categories.map((category) => {
    return {
      key: category.id,
      title: category.name,
      children: variablesToTreeData(category.variables),
      checkable: false,
      isLeaf: false,
    }
  })

const stationsToTreeData = (stations: Station[]): TreeNode[] =>
  stations.map((station) => {
    return {
      key: String(station.id),
      title: station.name,
      children: categoriesToTreeData(station.categories),
      checkable: false,
      isLeaf: false,
    }
  })

const treeDataSlice = createSlice({
  name: 'treeData',
  initialState: [] as Station[],
  reducers: {
    setDataStructure: (state, action: PayloadAction<Station[]>) => action.payload,
  },
})

const dataStructureSelector = (state: RootState) => state.treeData

export const treeDataSelector = createSelector(dataStructureSelector, (dataStructure) =>
  stationsToTreeData(dataStructure)
)

export default treeDataSlice