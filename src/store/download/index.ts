import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type DownloadState = {
  filter: string
  filterConditions: any[]
}

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
    filter: '',
    filterConditions: [],
  } as DownloadState,
  reducers: {
    setFilter,
    setFilterConditions
  },
})

export const downloadSelector = (state: RootState) => state.download

export default downloadSlice
