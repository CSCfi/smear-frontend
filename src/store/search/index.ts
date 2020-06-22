import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type SearchState = {
  tablevariables: string[]
  quality: string
  aggregation: string
  interval: number
}

const setTablevariables: CaseReducer<SearchState, PayloadAction<string[]>> = (state, action) => ({
  ...state,
  tablevariables: action.payload,
})

const setQuality: CaseReducer<SearchState, PayloadAction<string>> = (state, action) => ({
  ...state,
  quality: action.payload,
})

const setAggregation: CaseReducer<SearchState, PayloadAction<string>> = (state, action) => ({
  ...state,
  aggregation: action.payload,
})

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    tablevariables: [] as string[],
    interval: 30,
  } as SearchState,
  reducers: {
    setTablevariables,
    setQuality,
    setAggregation,
  },
})

export const tablevariablesSelector = (state: RootState) => state.search.tablevariables

export default searchSlice
