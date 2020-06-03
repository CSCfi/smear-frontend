import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

export type Variable = {
  tablevariable: string
  title: string
}

export type Category = {
  id: string
  name: string
  variables: Variable[]
}

export type Station = {
  id: number
  name: string
  categories: Category[]
}

export const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState: [] as Station[],
  reducers: {
    setMenuItems: (state, action: PayloadAction<Station[]>) => action.payload,
  },
})

export const { setMenuItems } = menuItemSlice.actions

export const menuItemsSelector = (state: RootState) => state.menuitems

export default menuItemSlice.reducer
