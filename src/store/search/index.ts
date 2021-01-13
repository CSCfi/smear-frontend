import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'
import { RootState } from '../index'
import { ISO_8601_DATE_TIME } from '../../constants'
import { DownloadOptions, TimeSeries } from '../../types'

type SearchState = {
  fetching: boolean,
  options: DownloadOptions,
  tablevariables: string[],
  timeseries: TimeSeries
}

const setFetching: CaseReducer<SearchState, PayloadAction<boolean>> = (state, action) => ({
  ...state,
  fetching: action.payload,
})

const setOptions: CaseReducer<SearchState, PayloadAction<DownloadOptions>> = (state, action) => ({
  ...state,
  options: action.payload,
})

const setTablevariables: CaseReducer<SearchState, PayloadAction<string[]>> = (state, action) => ({
  ...state,
  tablevariables: action.payload,
})

const setTimeSeries: CaseReducer<SearchState, PayloadAction<TimeSeries>> = (state, action) => ({
  ...state,
  timeseries: action.payload,
})

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    fetching: false,
    options: {
      from: moment().subtract(1, "day").startOf('day').format(ISO_8601_DATE_TIME),
      to: moment().endOf('day').format(ISO_8601_DATE_TIME),
      quality: 'ANY',
      aggregation: 'NONE',
      averaging: 1
    },
    tablevariables: [],
    timeseries: {}
  } as SearchState,
  reducers: {
    setFetching,
    setOptions,
    setTablevariables,
    setTimeSeries
  },
})

export const searchSelector = (state: RootState) => state.search
export const fetchingSelector = (state: RootState) => state.search.fetching
export const tablevariablesSelector = (state: RootState) => state.search.tablevariables

export default searchSlice
