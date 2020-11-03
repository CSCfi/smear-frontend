import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type SearchState = {
  fetching: boolean,
  tablevariables: string[]
}

const setFetching: CaseReducer<SearchState, PayloadAction<boolean>> = (state, action) => ({
  ...state,
  fetching: action.payload,
})

const setTablevariables: CaseReducer<SearchState, PayloadAction<string[]>> = (state, action) => ({
  ...state,
  tablevariables: action.payload,
})

const searchSlice = createSlice({
  name: 'timeSeries',
  initialState: {
    fetching: false,
    tablevariables: [],
  } as SearchState,
  reducers: {
    setFetching,
    setTablevariables,
  },
})

export const fetchingSelector = (state: RootState) => state.search.fetching
export const tablevariablesSelector = (state: RootState) => state.search.tablevariables

export default searchSlice
