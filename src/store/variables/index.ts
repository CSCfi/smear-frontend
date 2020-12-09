import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type Variable = {
  id: number,
  tablevariable: string,
  tableName: string,
  name: string,
  description: string,
  title: string,
  unit: string,
  source: string,
  coverage: number
}

const variablesSlice = createSlice({
  name: 'variables',
  initialState: [] as Variable[],
  reducers: {
    setVariables: (state, action: PayloadAction<Variable[]>) =>
      state
        .concat(action.payload.filter((v: Variable) =>
          !state.find((v2: Variable) => v.id === v2.id))),
  },
})

export const variablesSelector = (state: RootState) => state.variables

export default variablesSlice
