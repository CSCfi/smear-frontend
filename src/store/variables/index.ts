import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type Variable = {
  tablevariable: string,
  tableName: string,
  name: string,
  description: string,
  unit: string,
  source: string,
  coverage: number
}

const variablesSlice = createSlice({
  name: 'variables',
  initialState: [] as Variable[],
  reducers: {
    setVariables: (state, action: PayloadAction<Variable[]>) => action.payload,
  },
})

export const variablesSelector = (state: RootState) => state.variables

export default variablesSlice
