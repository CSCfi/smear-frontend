import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'
import { RootState } from '../index'
import { ISO_8601_DATE_TIME } from '../../constants'
import { DownloadOptions, TimeSeries } from '../../types'

type SearchState = {
  errorMessage: string,
  fetching: boolean,
  options: DownloadOptions,
  tablevariables: string[],
  timeseries: TimeSeries,
  warningMessage: string
}

const setErrorMessage: CaseReducer<SearchState, PayloadAction<string>> = (state, action) => ({
  ...state,
  errorMessage: action.payload,
})

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

const setWarningMessage: CaseReducer<SearchState, PayloadAction<string>> = (state, action) => ({
  ...state,
  warningMessage: action.payload,
})

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    errorMessage: '',
    fetching: false,
    options: {
      from: moment().subtract(1, "day").startOf('day').format(ISO_8601_DATE_TIME),
      to: moment().endOf('day').format(ISO_8601_DATE_TIME),
      quality: 'ANY',
      aggregation: 'NONE',
      averaging: 1
    },
    tablevariables: [],
    timeseries: {},
    warningMessage: ''
  } as SearchState,
  reducers: {
    setErrorMessage,
    setFetching,
    setOptions,
    setTablevariables,
    setTimeSeries,
    setWarningMessage
  },
})

export const searchSelector = (state: RootState) => state.search
export const fetchingSelector = (state: RootState) => state.search.fetching
export const tablevariablesSelector = (state: RootState) => state.search.tablevariables

export default searchSlice
