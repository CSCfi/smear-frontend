import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'
import { RootState } from './index'

import { ISO_8601_DATE_TIME } from '../constants'
import { DownloadOptions } from '../types'

type DownloadState = {
  selectedStation: any
  selectedCategory: any
  selectedVariables: any[]
  options: DownloadOptions
  filter: string
  filterConditions: any[]
}

export const setSelectedStation: CaseReducer<DownloadState, PayloadAction<any>> = (state, action) => ({
  ...state,
  selectedStation: action.payload,
})

export const setSelectedCategory: CaseReducer<DownloadState, PayloadAction<any>> = (state, action) => ({
  ...state,
  selectedCategory: action.payload,
})

export const setSelectedVariables: CaseReducer<DownloadState, PayloadAction<any[]>> = (state, action) => ({
  ...state,
  selectedVariables: action.payload,
})

export const setOptions: CaseReducer<DownloadState, PayloadAction<DownloadOptions>> = (state, action) => ({
  ...state,
  options: action.payload,
})

export const setFilter: CaseReducer<DownloadState, PayloadAction<string>> = (state, action) => ({
  ...state,
  filter: action.payload,
})

export const setFilterConditions: CaseReducer<DownloadState, PayloadAction<any[]>> = (state, action) => ({
  ...state,
  filterConditions: action.payload,
})

const downloadSlice = createSlice({
  name: 'download',
  initialState: {
    selectedStation: undefined,
    selectedCategory: undefined,
    selectedVariables: [],
    options: {
      from: moment().subtract(1, "day").startOf('day').format(ISO_8601_DATE_TIME),
      to: moment().endOf('day').format(ISO_8601_DATE_TIME),
      quality: 'ANY',
      aggregation: 'NONE',
      averaging: 1
    },
    filter: '',
    filterConditions: [],
  } as DownloadState,
  reducers: {
    setSelectedStation,
    setSelectedCategory,
    setSelectedVariables,
    setOptions,
    setFilter,
    setFilterConditions
  },
})

export const downloadSelector = (state: RootState) => state.download

export default downloadSlice
