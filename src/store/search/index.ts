import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type SearchState = {
  tablevariables: string[]
}

const setTablevariables: CaseReducer<SearchState, PayloadAction<string[]>> = (state, action) => ({
  ...state,
  tablevariables: action.payload,
})

const searchSlice = createSlice({
  name: 'timeSeries',
  initialState: {
    tablevariables: [],
  } as SearchState,
  reducers: {
    setTablevariables,
  },
})

export const tablevariablesSelector = (state: RootState) => state.search.tablevariables

export default searchSlice
